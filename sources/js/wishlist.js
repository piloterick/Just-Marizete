// ==========================================
// WISHLIST - JUST MARIZETE
// ==========================================

// ==========================================
// GESTIONE LOCALSTORAGE
// ==========================================
function getWishlist() {
    const saved = localStorage.getItem('justWishlist');
    return saved ? JSON.parse(saved) : [];
}

function saveWishlist(wishlist) {
    localStorage.setItem('justWishlist', JSON.stringify(wishlist));
}

// ==========================================
// AGGIUNGI/RIMUOVI DALLA WISHLIST
// ==========================================
function toggleWishlist(productId) {
    let wishlist = getWishlist();
    
    if (wishlist.includes(productId)) {
        // Rimuovi
        wishlist = wishlist.filter(id => id !== productId);
        showToast('💔 Rimosso dalla wishlist', 'info');
    } else {
        // Aggiungi
        wishlist.push(productId);
        showToast('❤️ Aggiunto alla wishlist!', 'success');
    }
    
    saveWishlist(wishlist);
    updateWishlistIcon(productId);
    updateWishlistCount();
    
    return wishlist.includes(productId);
}

function isInWishlist(productId) {
    const wishlist = getWishlist();
    return wishlist.includes(productId);
}

// ==========================================
// AGGIORNA ICONA CUORE
// ==========================================
function updateWishlistIcon(productId) {
    const icon = document.querySelector(`[data-wishlist-id="${productId}"]`);
    if (icon) {
        if (isInWishlist(productId)) {
            icon.classList.add('active');
            icon.innerHTML = '<i class="ri-heart-fill"></i>';
        } else {
            icon.classList.remove('active');
            icon.innerHTML = '<i class="ri-heart-line"></i>';
        }
    }
}

// ==========================================
// AGGIORNA CONTATORE WISHLIST
// ==========================================
function updateWishlistCount() {
    const wishlist = getWishlist();
    const countEl = document.getElementById('wishlist-count');
    
    if (countEl) {
        countEl.textContent = wishlist.length;
        countEl.style.display = wishlist.length > 0 ? 'flex' : 'none';
    }
}

// ==========================================
// CARICA PRODOTTI WISHLIST
// ==========================================
function loadWishlistProducts() {
    const wishlist = getWishlist();
    const container = document.getElementById('wishlist-container');
    const emptyEl = document.getElementById('wishlist-empty');
    const actionsEl = document.getElementById('wishlist-actions');
    
    if (!container) return;
    
    // Se wishlist vuota
    if (wishlist.length === 0) {
        container.style.display = 'none';
        emptyEl.style.display = 'flex';
        actionsEl.style.display = 'none';
        return;
    }
    
    // Mostra prodotti
    container.style.display = 'grid';
    emptyEl.style.display = 'none';
    actionsEl.style.display = 'flex';
    
    container.innerHTML = '';
    
    // Prendi i prodotti salvati
    let allProducts = [];
    const saved = localStorage.getItem('justMarizete_products');
    if (saved) {
        allProducts = JSON.parse(saved);
    } else if (typeof products !== 'undefined') {
        allProducts = products;
    }
    
    // Filtra solo quelli nella wishlist
    wishlist.forEach(productId => {
        const product = allProducts.find(p => p.id === productId);
        
        if (product) {
            container.innerHTML += `
                <div class="wishlist-card" data-id="${product.id}">
                    <button class="wishlist-remove" onclick="removeFromWishlist(${product.id})" title="Rimuovi">
                        <i class="ri-close-line"></i>
                    </button>
                    
                    <div class="wishlist-image">
                        <img src="${product.image || './sources/images/placeholder.png'}" 
                             alt="${product.name}"
                             onerror="this.src='./sources/images/placeholder.png'">
                    </div>
                    
                    <div class="wishlist-info">
                        <h3 class="wishlist-name">${product.name}</h3>
                        <p class="wishlist-category">${product.category}</p>
                        <p class="wishlist-price">€${parseFloat(product.price).toFixed(2)}</p>
                    </div>
                    
                    <div class="wishlist-buttons">
                        <button class="btn-add-cart" onclick="addToCartFromWishlist(${product.id})">
                            <i class="ri-shopping-cart-line"></i> Aggiungi al Carrello
                        </button>
                    </div>
                </div>
            `;
        }
    });
    
    console.log('❤️ Wishlist caricata:', wishlist.length, 'prodotti');
}

// ==========================================
// RIMUOVI DALLA WISHLIST
// ==========================================
function removeFromWishlist(productId) {
    let wishlist = getWishlist();
    wishlist = wishlist.filter(id => id !== productId);
    saveWishlist(wishlist);
    
    loadWishlistProducts();
    updateWishlistCount();
    
    showToast('💔 Prodotto rimosso dalla wishlist', 'info');
}

// ==========================================
// SVUOTA WISHLIST
// ==========================================
function clearWishlist() {
    if (confirm('Sei sicuro di voler svuotare la wishlist?')) {
        saveWishlist([]);
        loadWishlistProducts();
        updateWishlistCount();
        showToast('🗑️ Wishlist svuotata', 'warning');
    }
}

// ==========================================
// AGGIUNGI AL CARRELLO
// ==========================================
function addToCartFromWishlist(productId) {
    // Prendi i prodotti
    let allProducts = [];
    const saved = localStorage.getItem('justMarizete_products');
    
    if (saved) {
        allProducts = JSON.parse(saved);
    } else if (typeof products !== 'undefined') {
        allProducts = products;
    }
    
    // Trova il prodotto
    const product = allProducts.find(p => p.id === productId || p.id === parseInt(productId));
    
    if (!product) {
        console.error('❌ Prodotto non trovato:', productId);
        showToast('❌ Prodotto non trovato', 'error');
        return;
    }
    
    console.log('✅ Prodotto trovato:', product);
    
    // Prendi carrello esistente
    let cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    
    // Controlla se già nel carrello
    const existingIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        // ✅ AGGIUNGI TUTTI I DATI!
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            description: product.description,
            quantity: 1
        });
    }
    
    // Salva
    localStorage.setItem('cartItems', JSON.stringify(cart));
    
    console.log('🛒 Carrello aggiornato:', cart);
    
    showToast('🛒 Aggiunto al carrello!', 'success');
    updateCartCount();
}

// ==========================================
// AGGIUNGI TUTTI AL CARRELLO
// ==========================================
function addAllToCart() {
    const wishlist = getWishlist();
    
    if (wishlist.length === 0) return;
    
    wishlist.forEach(productId => {
        addToCartFromWishlist(productId);
    });
    
    showToast(`🛒 ${wishlist.length} prodotti aggiunti al carrello!`, 'success');
}

// ==========================================
// AGGIORNA CONTATORE CARRELLO
// ==========================================
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const countEl = document.getElementById('cart-count');
    if (countEl) {
        countEl.textContent = total;
        countEl.style.display = total > 0 ? 'flex' : 'none';
    }
}

// ==========================================
// TOAST NOTIFICHE
// ==========================================
function showToast(message, type = 'info') {
    // Rimuovi toast esistenti
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = message;
    
    document.body.appendChild(toast);
    
    // Mostra
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Nascondi dopo 3 secondi
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==========================================
// INIZIALIZZAZIONE
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    loadWishlistProducts();
    updateWishlistCount();
    updateCartCount();
    
    // Event listeners
    document.getElementById('btn-clear-wishlist')?.addEventListener('click', clearWishlist);
    document.getElementById('btn-add-all-cart')?.addEventListener('click', addAllToCart);
});