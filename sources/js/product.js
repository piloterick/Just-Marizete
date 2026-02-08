// ==========================================
// PAGINA DETTAGLIO PRODOTTO
// ==========================================

let currentProduct = null;
let quantity = 1;

// Ottieni ID prodotto dall'URL
function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Carica prodotto
function loadProduct() {
    const productId = getProductIdFromURL();
    
    if (!productId) {
        showNotFound();
        return;
    }
    
    // Prendi prodotti da localStorage o products-data.js
    let allProducts = [];
    const saved = localStorage.getItem('justMarizete_products');
    
    if (saved) {
        allProducts = JSON.parse(saved);
    } else if (typeof products !== 'undefined') {
        allProducts = products;
    }
    
    // Trova il prodotto (supporta ID numero o stringa)
    currentProduct = allProducts.find(p => 
        String(p.id) === String(productId) || 
        p.id === parseInt(productId)
    );
    
    if (!currentProduct) {
        showNotFound();
        return;
    }
    
    // Mostra prodotto
    displayProduct();
}

// Mostra prodotto non trovato
function showNotFound() {
    document.getElementById('product-loading').style.display = 'none';
    document.getElementById('product-not-found').style.display = 'block';
}

// Mostra dettagli prodotto
function displayProduct() {
    const p = currentProduct;
    
    // Aggiorna titolo pagina
    document.title = `${p.name} - Just Marizete`;
    
    // Riempi dati principali
    document.getElementById('product-image').src = p.image || './sources/images/placeholder.png';
    document.getElementById('product-image').alt = p.name;
    document.getElementById('product-name').textContent = p.name;
    document.getElementById('product-category').textContent = p.category;
    document.getElementById('product-description').textContent = p.description || '';
    document.getElementById('product-price').textContent = `€${parseFloat(p.price).toFixed(2)}`;
    document.getElementById('product-stars').innerHTML = generateStars(p.rating || 0);
    document.getElementById('product-reviews').textContent = `(${p.reviews || 0} recensioni)`;
    
    // ✅ Mostra descrizione completa
    const fullDescEl = document.getElementById('product-full-description');
    if (fullDescEl && p.fullDescription) {
        fullDescEl.innerHTML = p.fullDescription;
        fullDescEl.style.display = 'block';
    }
    
    // Controlla se in wishlist
    updateWishlistButton();
    
    // Nascondi loading, mostra prodotto
    document.getElementById('product-loading').style.display = 'none';
    document.getElementById('product-detail').style.display = 'grid';
}

// Genera stelle rating
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="ri-star-fill"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="ri-star-half-fill"></i>';
        } else {
            stars += '<i class="ri-star-line"></i>';
        }
    }
    return stars;
}

// Aggiorna quantità
function updateQuantity(change) {
    quantity += change;
    if (quantity < 1) quantity = 1;
    if (quantity > 99) quantity = 99;
    document.getElementById('qty-value').textContent = quantity;
}

// Aggiungi al carrello
function addToCart() {
    if (!currentProduct) return;
    
    let cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    
    // ⚠️ Controlla se già nel carrello
    const existingItem = cart.find(item => String(item.id) === String(currentProduct.id));
    
    if (existingItem) {
        showToast('⚠️ Prodotto già nel carrello!', 'warning');
        return;
    }
    
    // Aggiungi con la quantità selezionata
    cart.push({
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        image: currentProduct.image,
        category: currentProduct.category,
        quantity: quantity
    });
    
    localStorage.setItem('cartItems', JSON.stringify(cart));
    
    showToast(`🛒 ${quantity}x ${currentProduct.name} aggiunto al carrello!`, 'success');
    updateCartCount();
}

// Toggle wishlist
function toggleWishlist() {
    if (!currentProduct) return;
    
    let wishlist = JSON.parse(localStorage.getItem('justWishlist') || '[]');
    const productId = currentProduct.id;
    
    const index = wishlist.findIndex(id => String(id) === String(productId));
    
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('💔 Rimosso dai preferiti', 'info');
    } else {
        wishlist.push(productId);
        showToast('❤️ Aggiunto ai preferiti!', 'success');
    }
    
    localStorage.setItem('justWishlist', JSON.stringify(wishlist));
    updateWishlistButton();
}

// Aggiorna pulsante wishlist
function updateWishlistButton() {
    const btn = document.getElementById('add-to-wishlist-btn');
    if (!btn || !currentProduct) return;
    
    const wishlist = JSON.parse(localStorage.getItem('justWishlist') || '[]');
    const isInWishlist = wishlist.some(id => String(id) === String(currentProduct.id));
    
    if (isInWishlist) {
        btn.classList.add('active');
        btn.innerHTML = '<i class="ri-heart-fill"></i>';
    } else {
        btn.classList.remove('active');
        btn.innerHTML = '<i class="ri-heart-line"></i>';
    }
}

// Toast notifica
function showToast(message, type = 'info') {
    // Rimuovi toast esistenti
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = message;
    
    // ✅ Stile per posizione in ALTO (solo pagina prodotto)
    toast.style.position = 'fixed';
    toast.style.top = '30px';
    toast.style.bottom = 'auto';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%) translateY(-100px)';
    toast.style.padding = '15px 30px';
    toast.style.borderRadius = '10px';
    toast.style.color = 'white';
    toast.style.fontWeight = '500';
    toast.style.zIndex = '9999';
    toast.style.opacity = '0';
    toast.style.transition = 'transform 0.3s, opacity 0.3s';
    
    document.body.appendChild(toast);
    
    // Mostra con animazione dall'alto
    setTimeout(() => {
        toast.style.transform = 'translateX(-50%) translateY(0)';
        toast.style.opacity = '1';
    }, 100);
    
    // Nascondi dopo 3 secondi
    setTimeout(() => {
        toast.style.transform = 'translateX(-50%) translateY(-100px)';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==========================================
// INIZIALIZZAZIONE
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    loadProduct();
    
    // Event listeners
    document.getElementById('qty-minus')?.addEventListener('click', () => updateQuantity(-1));
    document.getElementById('qty-plus')?.addEventListener('click', () => updateQuantity(1));
    document.getElementById('add-to-cart-btn')?.addEventListener('click', addToCart);
    document.getElementById('add-to-wishlist-btn')?.addEventListener('click', toggleWishlist);
});