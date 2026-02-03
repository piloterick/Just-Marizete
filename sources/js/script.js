/* ===================================
   JUST MARIZETE - E-COMMERCE JS
   Shopping Cart & Interactions
   =================================== */

// ==========================================
// DOM ELEMENTS
// ==========================================
const cartIcon = document.getElementById('cart-icon');
const cart = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartClose = document.getElementById('cart-close');
const cartContent = document.querySelector('.cart-content');
const totalPriceEl = document.querySelector('.total-price');
const cartItemCount = document.querySelector('.cart-item-count');
const buyBtn = document.querySelector('.btn-buy');
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

// ==========================================
// CART STATE
// ==========================================
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// ==========================================
// INITIALIZE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeCart();
    setupEventListeners();
    renderCart();
});

// ==========================================
// EVENT LISTENERS SETUP
// ==========================================
function setupEventListeners() {
    // Cart Toggle
    cartIcon?.addEventListener('click', toggleCart);
    cartClose?.addEventListener('click', closeCart);
    cartOverlay?.addEventListener('click', closeCart);

    // Add to Cart Buttons
    document.querySelectorAll('.shopping-bag').forEach(btn => {
        btn.addEventListener('click', handleAddToCart);
    });

    // Mobile Menu
    mobileMenuIcon?.addEventListener('click', toggleMobileMenu);

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-menu .link-nav').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Buy Button
    buyBtn?.addEventListener('click', handleCheckout);

    // Close cart on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCart();
            closeMobileMenu();
        }
    });
}

// ==========================================
// CART FUNCTIONS
// ==========================================
function initializeCart() {
    // Create overlay if doesn't exist
    if (!document.querySelector('.cart-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'cart-overlay';
        document.body.appendChild(overlay);
    }

    // Create toast container
    if (!document.querySelector('.toast-container')) {
        const toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }
}

function toggleCart() {
    cart?.classList.toggle('active');
    document.querySelector('.cart-overlay')?.classList.toggle('active');
    document.body.style.overflow = cart?.classList.contains('active') ? 'hidden' : '';
}

function closeCart() {
    cart?.classList.remove('active');
    document.querySelector('.cart-overlay')?.classList.remove('active');
    document.body.style.overflow = '';
}

function handleAddToCart(e) {
    e.preventDefault();
    e.stopPropagation();

    const card = e.target.closest('.card');
    if (!card) return;

    const product = extractProductData(card);
    addToCart(product);

    // Visual feedback
    animateAddToCart(e.target);
    showToast(`${product.name} aggiunto al carrello!`, 'success');
}

function extractProductData(card) {
    const img = card.querySelector('img');
    const title = card.querySelector('.product-title, h2')?.textContent.trim();
    const priceText = card.querySelector('.price')?.textContent.trim();
    const price = parsePrice(priceText);

    return {
        id: generateProductId(title),
        name: title,
        price: price,
        image: img?.src || '',
        quantity: 1
    };
}

function generateProductId(name) {
    return name?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') ||
        `product-${Date.now()}`;
}

function parsePrice(priceString) {
    if (!priceString) return 0;
    // Handle both "€ 19.50" and "19,50 €" formats
    const cleaned = priceString
        .replace('€', '')
        .replace(',', '.')
        .replace(/\s/g, '')
        .trim();
    return parseFloat(cleaned) || 0;
}

function addToCart(product) {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ ...product });
    }

    saveCart();
    renderCart();
}

function removeFromCart(productId) {
    const itemIndex = cartItems.findIndex(item => item.id === productId);

    if (itemIndex > -1) {
        const removedItem = cartItems[itemIndex];
        cartItems.splice(itemIndex, 1);
        saveCart();
        renderCart();
        showToast(`${removedItem.name} rimosso dal carrello`, 'error');
    }
}

function updateQuantity(productId, change) {
    const item = cartItems.find(item => item.id === productId);

    if (item) {
        item.quantity += change;

        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            renderCart();
        }
    }
}

function saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function clearCart() {
    cartItems = [];
    saveCart();
    renderCart();
}

// ==========================================
// RENDER CART
// ==========================================
function renderCart() {
    if (!cartContent) return;

    if (cartItems.length === 0) {
        renderEmptyCart();
    } else {
        renderCartItems();
    }

    updateCartTotal();
    updateCartCount();
    updateBuyButton();
}

function renderEmptyCart() {
    cartContent.innerHTML = `
        <div class="cart-empty">
            <div class="cart-empty-icon">🛒</div>
            <p>Il tuo carrello è vuoto</p>
            <p style="font-size: 0.9rem; margin-top: 10px; color: #999;">
                Aggiungi qualche prodotto per iniziare!
            </p>
        </div>
    `;
}

function renderCartItems() {
    cartContent.innerHTML = cartItems.map(item => `
        <div class="cart-box" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" class="cart-img">
            <div class="cart-detail">
                <h3 class="cart-product-title">${item.name}</h3>
                <span class="cart-price">${formatPrice(item.price)}</span>
                <div class="cart-quantity">
                    <button class="decrement-btn" aria-label="Diminuisci quantità">−</button>
                    <span class="number">${item.quantity}</span>
                    <button class="increment-btn" aria-label="Aumenta quantità">+</button>
                </div>
            </div>
            <i class="ri-delete-bin-line cart-remove" aria-label="Rimuovi prodotto"></i>
        </div>
    `).join('');

    // Attach event listeners to cart items
    attachCartItemListeners();
}


function attachCartItemListeners() {
    // Increment buttons
    document.querySelectorAll('.increment-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = e.target.closest('.cart-box').dataset.id;
            updateQuantity(productId, 1);
        });
    });

    // Decrement buttons
    document.querySelectorAll('.decrement-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = e.target.closest('.cart-box').dataset.id;
            updateQuantity(productId, -1);
        });
    });

    // Remove buttons
    document.querySelectorAll('.cart-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = e.target.closest('.cart-box').dataset.id;

            // Add removal animation
            const cartBox = e.target.closest('.cart-box');
            cartBox.style.animation = 'fadeOut 0.3s ease forwards';

            setTimeout(() => removeFromCart(productId), 300);
        });
    });
}

function updateCartTotal() {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (totalPriceEl) {
        totalPriceEl.textContent = formatPrice(total);
    }
}

function updateCartCount() {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    if (cartItemCount) {
        cartItemCount.textContent = totalItems;
        cartItemCount.classList.toggle('active', totalItems > 0);
    }
}

function updateBuyButton() {
    if (buyBtn) {
        buyBtn.disabled = cartItems.length === 0;
        buyBtn.textContent = cartItems.length === 0 ? 'Carrello Vuoto' : 'Acquista Ora';
    }
}

function formatPrice(price) {
    return new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'EUR'
    }).format(price);
}

// ==========================================
// CHECKOUT
// ==========================================
function handleCheckout() {
    if (cartItems.length === 0) {
        showToast('Il carrello è vuoto!', 'error');
        return;
    }

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Create order summary
    const orderSummary = cartItems.map(item =>
        `• ${item.name} x${item.quantity} - ${formatPrice(item.price * item.quantity)}`
    ).join('\n');

    // WhatsApp message
    const message = encodeURIComponent(
        `🛒 *Nuovo Ordine Just Marizete*\n\n` +
        `${orderSummary}\n\n` +
        `💰 *Totale: ${formatPrice(total)}*\n\n` +
        `Vorrei procedere con l'ordine!`
    );

    // Open WhatsApp (replace with actual number)
    const whatsappURL = `https://wa.me/393664932878?text=${message}`;

    // Show confirmation
    if (confirm(`Totale ordine: ${formatPrice(total)}\n\nVuoi procedere con l'ordine via WhatsApp?`)) {
        window.open(whatsappURL, '_blank');
        clearCart();
        closeCart();
        showToast('Ordine inviato! Ti contatteremo presto.', 'success');
    }
}

// ==========================================
// MOBILE MENU
// ==========================================
function toggleMobileMenu() {
    mobileMenu?.classList.toggle('open');
}

function closeMobileMenu() {
    mobileMenu?.classList.remove('open');
}

// Legacy function support
function menuShow() {
    toggleMobileMenu();
}

function listClose() {
    closeMobileMenu();
}

// ==========================================
// ANIMATIONS & FEEDBACK
// ==========================================
function animateAddToCart(button) {
    button.style.transform = 'scale(1.3)';
    button.style.background = '#4caf50';

    setTimeout(() => {
        button.style.transform = '';
        button.style.background = '';
    }, 300);

    // Animate cart icon
    if (cartIcon) {
        cartIcon.style.animation = 'bounce 0.5s ease';
        setTimeout(() => {
            cartIcon.style.animation = '';
        }, 500);
    }
}

function showToast(message, type = 'success') {
    const container = document.querySelector('.toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${type === 'success' ? '✅' : '❌'}</span>
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    // Remove toast after animation
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ==========================================
// SEARCH FUNCTIONALITY
// ==========================================
const searchInput = document.querySelector('.search');

searchInput?.addEventListener('input', debounce((e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    filterProducts(searchTerm);
}, 300));

function filterProducts(searchTerm) {
    const cards = document.querySelectorAll('.card');
    let visibleCount = 0;

    cards.forEach(card => {
        const title = card.querySelector('.product-title, h2')?.textContent.toLowerCase() || '';
        const description = card.querySelector('p')?.textContent.toLowerCase() || '';

        const matches = title.includes(searchTerm) || description.includes(searchTerm);

        card.style.display = matches || searchTerm === '' ? '' : 'none';
        card.style.animation = matches ? 'fadeIn 0.3s ease' : '';

        if (matches || searchTerm === '') visibleCount++;
    });

    // Show message if no results
    // You can add a "no results" message here if needed
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            closeMobileMenu();
        }
    });
});

// ==========================================
// LAZY LOADING IMAGES
// ==========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// SCROLL TO TOP BUTTON (Optional)
// ==========================================
function createScrollToTop() {
    const btn = document.createElement('button');
    btn.innerHTML = '↑';
    btn.className = 'scroll-to-top';
    btn.setAttribute('aria-label', 'Torna su');
    btn.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary);
        color: white;
        font-size: 24px;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(102, 67, 181, 0.4);
    `;

    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.style.opacity = '1';
            btn.style.visibility = 'visible';
        } else {
            btn.style.opacity = '0';
            btn.style.visibility = 'hidden';
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

createScrollToTop();

console.log('🛒 Just Marizete E-commerce initialized!');

/* ===================================
   ANIMAZIONE CONTATORI STATS
   =================================== */
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // 2 secondi
                const increment = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

// Inizializza quando il DOM è pronto
document.addEventListener('DOMContentLoaded', animateCounters);

/* ===================================
   PRODUCTS SECTION - FUNCTIONALITY
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
    initProductsSection();
});

function initProductsSection() {
    // Category Buttons
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterByCategory(btn.dataset.category);
        });
    });

    // Sidebar Accordion
    const sidebarHeaders = document.querySelectorAll('.sidebar-category-header');
    sidebarHeaders.forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('active');
            const subList = header.nextElementSibling;
            subList.classList.toggle('open');
        });
    });

    // Subcategory Links
    const subcategoryLinks = document.querySelectorAll('.subcategory-link');
    subcategoryLinks.forEach(link => {
        link.addEventListener('click', () => {
            subcategoryLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Search Products
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
        searchInput.addEventListener('input', debounce((e) => {
            searchProducts(e.target.value);
        }, 300));
    }

    // Sort Products
    const sortSelect = document.getElementById('sort-products');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            sortProducts(e.target.value);
        });
    }

    // Add to Cart Buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', handleAddToCart);
    });

    // Wishlist Buttons
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.wishlist-btn').classList.toggle('active');
            showToast('Aggiunto ai preferiti!', 'success');
        });
    });

    // Quick View Buttons
    document.querySelectorAll('.quick-view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            openQuickView(card);
        });
    });
}

// Filter by Category
function filterByCategory(category) {
    const sections = document.querySelectorAll('.category-section');
    
    sections.forEach(section => {
        if (category === 'all' || section.dataset.category === category) {
            section.style.display = 'block';
            section.style.animation = 'fadeIn 0.5s ease';
        } else {
            section.style.display = 'none';
        }
    });
}

// Search Products
function searchProducts(query) {
    const cards = document.querySelectorAll('.product-card');
    const lowerQuery = query.toLowerCase().trim();
    
    cards.forEach(card => {
        const title = card.querySelector('.product-title')?.textContent.toLowerCase() || '';
        const description = card.querySelector('.product-description')?.textContent.toLowerCase() || '';
        
        if (title.includes(lowerQuery) || description.includes(lowerQuery) || lowerQuery === '') {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.3s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

// Sort Products
function sortProducts(sortType) {
    const grids = document.querySelectorAll('.products-grid');
    
    grids.forEach(grid => {
        const cards = Array.from(grid.querySelectorAll('.product-card'));
        
        cards.sort((a, b) => {
            const priceA = parseFloat(a.dataset.price) || 0;
            const priceB = parseFloat(b.dataset.price) || 0;
            const nameA = a.dataset.name || '';
            const nameB = b.dataset.name || '';
            
            switch(sortType) {
                case 'price-asc':
                    return priceA - priceB;
                case 'price-desc':
                    return priceB - priceA;
                case 'name-asc':
                    return nameA.localeCompare(nameB);
                case 'name-desc':
                    return nameB.localeCompare(nameA);
                default:
                    return 0;
            }
        });
        
        cards.forEach(card => grid.appendChild(card));
    });
}

// Add to Cart Handler
function handleAddToCart(e) {
    const card = e.target.closest('.product-card');
    const title = card.querySelector('.product-title')?.textContent;
    const price = card.querySelector('.current-price')?.textContent;
    const image = card.querySelector('.product-image img')?.src;
    
    // Animazione bottone
    const btn = e.target.closest('.add-to-cart-btn');
    btn.innerHTML = '<i class="ri-check-line"></i> Aggiunto!';
    btn.style.background = '#4caf50';
    
    setTimeout(() => {
        btn.innerHTML = '<i class="ri-shopping-cart-2-line"></i><span>Aggiungi</span>';
        btn.style.background = '';
    }, 1500);
    
    // Aggiungi al carrello (usa la funzione esistente)
    if (typeof addToCart === 'function') {
        addToCart({
            id: generateProductId(title),
            name: title,
            price: parsePrice(price),
            image: image,
            quantity: 1
        });
    }
    
    showToast(`${title} aggiunto al carrello!`, 'success');
}

// Quick View Modal
function openQuickView(card) {
    const title = card.querySelector('.product-title')?.textContent;
    const description = card.querySelector('.product-description')?.textContent;
    const price = card.querySelector('.current-price')?.textContent;
    const image = card.querySelector('.product-image img')?.src;
    
    // Crea modal
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="quick-view-overlay"></div>
        <div class="quick-view-content">
            <button class="quick-view-close"><i class="ri-close-line"></i></button>
            <div class="quick-view-image">
                <img src="${image}" alt="${title}">
            </div>
            <div class="quick-view-info">
                <h3>${title}</h3>
                <p>${description}</p>
                <div class="quick-view-price">${price}</div>
                <button class="add-to-cart-btn quick-add">
                    <i class="ri-shopping-cart-2-line"></i>
                    Aggiungi al Carrello
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Close handlers
    modal.querySelector('.quick-view-overlay').addEventListener('click', () => closeQuickView(modal));
    modal.querySelector('.quick-view-close').addEventListener('click', () => closeQuickView(modal));
    
    // Add animation
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeQuickView(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => modal.remove(), 300);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function generateProductId(name) {
    return name?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || `product-${Date.now()}`;
}

function parsePrice(priceString) {
    if (!priceString) return 0;
    return parseFloat(priceString.replace('€', '').replace(',', '.').trim()) || 0;
}

// Animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .quick-view-modal {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .quick-view-modal.active {
        opacity: 1;
    }
    
    .quick-view-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(5px);
    }
    
    .quick-view-content {
        position: relative;
        background: white;
        border-radius: 20px;
        max-width: 800px;
        width: 90%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        overflow: hidden;
        transform: scale(0.9);
        transition: transform 0.3s ease;
    }
    
    .quick-view-modal.active .quick-view-content {
        transform: scale(1);
    }
    
    .quick-view-close {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 40px;
        height: 40px;
        background: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        z-index: 10;
        box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    }
    
    .quick-view-image {
        background: #f8f9ff;
        padding: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .quick-view-image img {
        max-width: 100%;
        max-height: 300px;
        object-fit: contain;
    }
    
    .quick-view-info {
        padding: 40px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    
    .quick-view-info h3 {
        font-size: 1.5rem;
        color: #1a1a2e;
    }
    
    .quick-view-info p {
        color: #666;
        line-height: 1.6;
    }
    
    .quick-view-price {
        font-size: 2rem;
        font-weight: 700;
        color: #667eea;
    }
    
    .quick-add {
        margin-top: auto;
    }
    
    @media (max-width: 768px) {
        .quick-view-content {
            grid-template-columns: 1fr;
            max-height: 90vh;
            overflow-y: auto;
        }
    }
`;
document.head.appendChild(style);


// ==========================================
// RENDER PRODOTTI AUTOMATICO DA ARRAY
// ==========================================

/**
 * Genera le stelle per il rating
 */
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="ri-star-fill"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="ri-star-half-fill"></i>';
        } else {
            stars += '<i class="ri-star-line"></i>';
        }
    }
    return stars;
}

/**
 * Converte il tipo di badge nel testo visualizzato
 */
function getBadgeText(badge) {
    const badges = {
        'bestseller': 'Bestseller',
        'new': 'Nuovo',
        'hot': '🔥 Hot',
        'sale': 'Offerta'
    };
    return badges[badge] || badge;
}

/**
 * Formatta prezzo in italiano
 */
function formatPriceIT(price) {
    return new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'EUR'
    }).format(price);
}

/**
 * Genera l'HTML di una singola card prodotto
 */
function createProductCard(product) {
    const badgesHTML = product.badges && product.badges.length > 0 
        ? `<div class="product-badges">
            ${product.badges.map(badge => 
                `<span class="badge badge-${badge}">${getBadgeText(badge)}</span>`
            ).join('')}
           </div>` 
        : '';

    return `
        <div class="product-card" data-id="${product.id}" data-price="${product.price}" data-name="${product.name}" data-category="${product.subcategory}" data-line="${product.line}">
            ${badgesHTML}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name} - Just" loading="lazy">
                <div class="product-overlay">
                    <button class="quick-view-btn" data-id="${product.id}" title="Vista rapida">
                        <i class="ri-eye-line"></i>
                    </button>
                    <button class="wishlist-btn" data-id="${product.id}" title="Aggiungi ai preferiti">
                        <i class="ri-heart-line"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h4 class="product-title">${product.name}</h4>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    <div class="stars">${generateStars(product.rating)}</div>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
            </div>
            <div class="product-footer">
                <span class="current-price">${formatPriceIT(product.price)}</span>
                <button class="add-to-cart-btn" data-id="${product.id}">
                    <i class="ri-shopping-cart-2-line"></i>
                    <span>Aggiungi</span>
                </button>
            </div>
        </div>
    `;
}

/**
 * Renderizza i prodotti in un container
 */
function renderProductsToGrid(productsArray, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    
    if (productsArray.length === 0) {
        container.innerHTML = `
            <div class="no-products" style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <i class="ri-search-line" style="font-size: 3rem; color: #ccc;"></i>
                <p style="color: #999; margin-top: 10px;">Nessun prodotto trovato</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = productsArray.map(product => createProductCard(product)).join('');
}

/**
 * Renderizza TUTTI i prodotti nelle rispettive sottocategorie
 */
function renderAllProducts() {
    // Verifica che l'array products esista (da products-data.js)
    if (typeof products === 'undefined') {
        console.warn('⚠️ Array products non trovato!');
        console.warn('Assicurati di caricare products-data.js PRIMA di questo script.');
        return;
    }
    
    const subcategories = [
        'oli-essenziali',
        'creme-dermoattive',
        'bagni-essenze',
        'lamelloderm',
        'piedi-gambe',
        'malva',
        'baby',
        'specifici',
        'igiene-orale',
        'intim',
        'lozioni-corpo',
        'amici-animali',
        'capelli',
        'body-reform',
        'infiore',
        'solari',
        'uomo',
        'prodotti-casa',
        'integrazione-alimentare'
    ];

    let totalRendered = 0;

    subcategories.forEach(subcat => {
        const filteredProducts = products.filter(p => p.subcategory === subcat);
        const selector = `#${subcat} .products-grid`;
        
        if (document.querySelector(selector)) {
            renderProductsToGrid(filteredProducts, selector);
            totalRendered += filteredProducts.length;
        }
    });
    
    console.log(`✅ ${totalRendered} prodotti renderizzati automaticamente!`);
    
    // Re-inizializza event listeners dopo il render
    reinitProductListeners();
}

/**
 * Re-inizializza gli event listeners sui nuovi elementi
 */
function reinitProductListeners() {
    // Add to Cart
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        // Rimuovi listener esistenti per evitare duplicati
        btn.replaceWith(btn.cloneNode(true));
    });
    
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', handleAddToCart);
    });

    // Wishlist
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.replaceWith(btn.cloneNode(true));
    });
    
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(btn.dataset.id);
            toggleWishlistPersistent(productId, btn);
        });
    });

    // Quick View
    document.querySelectorAll('.quick-view-btn').forEach(btn => {
        btn.replaceWith(btn.cloneNode(true));
    });
    
    document.querySelectorAll('.quick-view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            openQuickView(card);
        });
    });
    
    // Aggiorna UI wishlist
    updateWishlistUI();
}

// ==========================================
// WISHLIST PERSISTENTE
// ==========================================
let wishlist = JSON.parse(localStorage.getItem('justWishlist')) || [];

function toggleWishlistPersistent(productId, btn) {
    const index = wishlist.indexOf(productId);
    
    if (index === -1) {
        wishlist.push(productId);
        btn.classList.add('active');
        btn.innerHTML = '<i class="ri-heart-fill"></i>';
        showToast('Aggiunto ai preferiti! ❤️', 'success');
    } else {
        wishlist.splice(index, 1);
        btn.classList.remove('active');
        btn.innerHTML = '<i class="ri-heart-line"></i>';
        showToast('Rimosso dai preferiti', 'success');
    }
    
    localStorage.setItem('justWishlist', JSON.stringify(wishlist));
}

function updateWishlistUI() {
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        const productId = parseInt(btn.dataset.id);
        const isInWishlist = wishlist.includes(productId);
        
        btn.classList.toggle('active', isInWishlist);
        btn.innerHTML = isInWishlist 
            ? '<i class="ri-heart-fill"></i>' 
            : '<i class="ri-heart-line"></i>';
    });
}

// ==========================================
// INIZIALIZZAZIONE RENDER PRODOTTI
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Aspetta un attimo per assicurarsi che products-data.js sia caricato
    setTimeout(() => {
        renderAllProducts();
    }, 100);
});


