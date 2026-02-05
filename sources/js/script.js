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

    // search functionality
    setupSearch();

    // Add to Cart Buttons
    document.querySelectorAll('.shopping-bag').forEach(btn => {
        btn.addEventListener('click', handleAddToCart);
    });

    // Mobile Menu
    mobileMenuIcon?.addEventListener('click', toggleMobileMenu);

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-menu .mobile-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // ==========================================
    // 🆕 DROPDOWN PRODOTTI MOBILE
    // ==========================================
    const mobileProductsToggle = document.getElementById('mobile-products-toggle');
    const mobileProductsSubmenu = document.getElementById('mobile-products-submenu');

    // Toggle dropdown quando clicchi su "Prodotti"
    mobileProductsToggle?.addEventListener('click', function () {
        this.classList.toggle('active');
        mobileProductsSubmenu?.classList.toggle('open');
    });

    // Chiudi menu quando clicchi su una categoria
    document.querySelectorAll('.mobile-category-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Chiudi menu
            closeMobileMenu();
            mobileProductsSubmenu?.classList.remove('open');
            mobileProductsToggle?.classList.remove('active');

            // Smooth scroll se è un anchor
            if (href?.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    const headerHeight = document.querySelector('header')?.offsetHeight || 80;
                    const targetPosition = target.offsetTop - headerHeight - 20;

                    setTimeout(() => {
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }, 300); // Delay per permettere al menu di chiudersi
                }
            }
        });
    });

    // Chiudi dropdown quando clicchi sul link catalogo
    document.querySelector('.mobile-catalog-link')?.addEventListener('click', function () {
        closeMobileMenu();
        mobileProductsSubmenu?.classList.remove('open');
        mobileProductsToggle?.classList.remove('active');
    });

    // ==========================================
    // 🆕 CHIUDI MENU CLICK FUORI
    // ==========================================
    document.addEventListener('click', function (e) {
        if (mobileMenu?.classList.contains('open')) {
            const isClickInsideMenu = mobileMenu.contains(e.target);
            const isClickOnMenuBtn = mobileMenuIcon?.contains(e.target);

            if (!isClickInsideMenu && !isClickOnMenuBtn) {
                closeMobileMenu();
                mobileProductsSubmenu?.classList.remove('open');
                mobileProductsToggle?.classList.remove('active');
            }
        }
    });

    // Buy Button
    buyBtn?.addEventListener('click', handleCheckout);

    // Close cart on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCart();
            closeMobileMenu();
            // Chiudi anche dropdown
            mobileProductsSubmenu?.classList.remove('open');
            mobileProductsToggle?.classList.remove('active');
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

    // 🆕 Chiudi anche il dropdown prodotti
    const mobileProductsToggle = document.getElementById('mobile-products-toggle');
    const mobileProductsSubmenu = document.getElementById('mobile-products-submenu');
    mobileProductsSubmenu?.classList.remove('open');
    mobileProductsToggle?.classList.remove('active');
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

            switch (sortType) {
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
    return function (...args) {
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


// ==========================================
// RILEVA SE DROPDOWN HA BISOGNO DI SCROLL
// ==========================================
function checkDropdownScroll() {
    const dropdown = document.getElementById('mobile-products-submenu');

    if (dropdown) {
        // Controlla se il contenuto è più alto del container
        if (dropdown.scrollHeight > dropdown.clientHeight) {
            dropdown.classList.add('has-scroll');
        } else {
            dropdown.classList.remove('has-scroll');
        }
    }
}

// Chiama quando si apre il dropdown
const mobileProductsToggle = document.getElementById('mobile-products-toggle');
mobileProductsToggle?.addEventListener('click', function () {
    setTimeout(checkDropdownScroll, 400); // Dopo l'animazione
});


// ==========================================
// SEARCH FUNCTIONALITY - COMPLETA
// ==========================================

// Database categorie/pagine per ricerca rapida
const searchCategories = [
    { title: "Oli Essenziali", category: "Linea Benessere", icon: "🌿", link: "#oli-essenziali", type: "category" },
    { title: "Creme Dermoattive", category: "Linea Benessere", icon: "🌿", link: "#creme-dermoattive", type: "category" },
    { title: "Bagni ed Essenze", category: "Linea Benessere", icon: "🌿", link: "#bagni-essenze", type: "category" },
    { title: "Lamelloderm", category: "Linea Benessere", icon: "🌿", link: "#lamelloderm", type: "category" },
    { title: "Piedi e Gambe", category: "Linea Benessere", icon: "🌿", link: "#piedi-gambe", type: "category" },
    { title: "Malva", category: "Linea Benessere", icon: "🌿", link: "#malva", type: "category" },
    { title: "Baby", category: "Linea Benessere", icon: "🌿", link: "#baby", type: "category" },
    { title: "Specifici", category: "Linea Benessere", icon: "🌿", link: "#specifici", type: "category" },
    { title: "Igiene Orale", category: "Linea Benessere", icon: "🌿", link: "#igiene-orale", type: "category" },
    { title: "Intim", category: "Linea Benessere", icon: "🌿", link: "#intim", type: "category" },
    { title: "Lozioni Corpo", category: "Linea Benessere", icon: "🌿", link: "#lozioni-corpo", type: "category" },
    { title: "Amici Animali", category: "Linea Benessere", icon: "🌿", link: "#amici-animali", type: "category" },
    { title: "Capelli", category: "Linea Bellezza", icon: "✨", link: "#capelli", type: "category" },
    { title: "Body Reform", category: "Linea Bellezza", icon: "✨", link: "#body-reform", type: "category" },
    { title: "Infiore", category: "Linea Bellezza", icon: "✨", link: "#infiore", type: "category" },
    { title: "Solari", category: "Linea Bellezza", icon: "✨", link: "#solari", type: "category" },
    { title: "Uomo", category: "Linea Bellezza", icon: "✨", link: "#uomo", type: "category" },
    { title: "Prodotti Casa", category: "Linea Casa", icon: "🏠", link: "#prodotti-casa", type: "category" },
    { title: "Integrazione Alimentare", category: "Integratori", icon: "💊", link: "#integrazione-alimentare", type: "category" },
    { title: "Chi Sono", category: "Pagine", icon: "👤", link: "#chi-sono", type: "page" },
    { title: "Contatti", category: "Pagine", icon: "📞", link: "#contatti", type: "page" },
    { title: "Catalogo Just", category: "Link Esterni", icon: "📖", link: "https://www.just.it/catalogo/", type: "external" }
];

// Elementi DOM Search
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const searchResultsContent = searchResults?.querySelector('.search-results-content');
const searchClear = document.getElementById('search-clear');

let searchTimeout;
let currentFocusIndex = -1;

// ==========================================
// SETUP SEARCH
// ==========================================
function setupSearch() {
    if (!searchInput || !searchResults) return;

    // Input handler con debounce
    searchInput.addEventListener('input', function () {
        const query = this.value.trim();

        // Mostra/nascondi bottone clear
        searchClear?.classList.toggle('visible', query.length > 0);

        // Debounce per performance
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            if (query.length >= 2) {
                performSearch(query);
            } else {
                closeSearchResults();
            }
        }, 200);
    });

    // Focus handler
    searchInput.addEventListener('focus', function () {
        if (this.value.trim().length >= 2) {
            searchResults.classList.add('active');
        }
    });

    // Clear button
    searchClear?.addEventListener('click', function () {
        searchInput.value = '';
        this.classList.remove('visible');
        closeSearchResults();
        searchInput.focus();
    });

    // Chiudi quando clicchi fuori
    document.addEventListener('click', function (e) {
        if (!e.target.closest('#search-container')) {
            closeSearchResults();
        }
    });

    // Navigazione tastiera
    searchInput.addEventListener('keydown', handleSearchKeyboard);
}

// ==========================================
// ESEGUI RICERCA
// ==========================================
function performSearch(query) {
    const normalizedQuery = normalizeString(query);

    // 1. Cerca nei PRODOTTI (dal tuo database products.js)
    const productResults = products.filter(product => {
        const nameMatch = normalizeString(product.name).includes(normalizedQuery);
        const descMatch = normalizeString(product.description).includes(normalizedQuery);
        const categoryMatch = normalizeString(product.category).includes(normalizedQuery);
        return nameMatch || descMatch || categoryMatch;
    }).slice(0, 8); // Limita a 8 prodotti

    // 2. Cerca nelle CATEGORIE/PAGINE
    const categoryResults = searchCategories.filter(item => {
        return normalizeString(item.title).includes(normalizedQuery);
    }).slice(0, 5); // Limita a 5 categorie

    // Renderizza risultati
    renderSearchResults(productResults, categoryResults, query);
}

// ==========================================
// RENDERIZZA RISULTATI
// ==========================================
function renderSearchResults(productResults, categoryResults, query) {
    if (!searchResultsContent) return;

    const totalResults = productResults.length + categoryResults.length;

    if (totalResults === 0) {
        // Nessun risultato
        searchResultsContent.innerHTML = `
            <div class="search-no-results">
                <i class="ri-search-line"></i>
                <p>Nessun risultato per "<strong>${escapeHtml(query)}</strong>"</p>
                <p style="font-size: 12px; margin-top: 8px; opacity: 0.7;">
                    Prova con: "Olio 31", "Crema", "Lavanda"...
                </p>
            </div>
        `;
    } else {
        let html = '';

        // Sezione Categorie (se presenti)
        if (categoryResults.length > 0) {
            html += `<div class="search-category-header">📂 Categorie</div>`;
            categoryResults.forEach((item, index) => {
                const isExternal = item.type === 'external' ? 'target="_blank" rel="noopener noreferrer"' : '';
                html += `
                    <a href="${item.link}" class="search-result-item" ${isExternal} data-index="${index}">
                        <div class="search-result-icon">${item.icon}</div>
                        <div class="search-result-info">
                            <div class="search-result-title">${highlightMatch(item.title, query)}</div>
                            <div class="search-result-subtitle">${item.category}</div>
                        </div>
                        <i class="ri-arrow-right-s-line search-result-arrow"></i>
                    </a>
                `;
            });
        }

        // Sezione Prodotti (se presenti)
        if (productResults.length > 0) {
            html += `<div class="search-category-header">🛍️ Prodotti</div>`;
            productResults.forEach((product, index) => {
                const badgeHtml = product.badges.includes('bestseller')
                    ? '<span class="search-badge bestseller">⭐ Best</span>'
                    : product.badges.includes('new')
                        ? '<span class="search-badge new">🆕 Nuovo</span>'
                        : '';

                html += `
                    <a href="#${product.subcategory}" class="search-result-item search-product-item" data-product-id="${product.id}" data-index="${categoryResults.length + index}">
                        <div class="search-result-image">
                            <img src="${product.image}" alt="${product.name}" onerror="this.src='./sources/images/placeholder.png'">
                        </div>
                        <div class="search-result-info">
                            <div class="search-result-title">
                                ${highlightMatch(product.name, query)}
                                ${badgeHtml}
                            </div>
                            <div class="search-result-subtitle">${product.category}</div>
                            <div class="search-result-price">€ ${product.price.toFixed(2)}</div>
                        </div>
                        <i class="ri-arrow-right-s-line search-result-arrow"></i>
                    </a>
                `;
            });
        }

        // Link "Vedi tutti"
        if (productResults.length >= 8) {
            html += `
                <a href="#prodotti" class="search-view-all">
                    <i class="ri-search-line"></i>
                    Vedi tutti i risultati per "${escapeHtml(query)}"
                </a>
            `;
        }

        searchResultsContent.innerHTML = html;

        // Event listener per i risultati
        searchResultsContent.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', handleResultClick);
        });
    }

    // Reset focus index
    currentFocusIndex = -1;
    searchResults.classList.add('active');
}

// ==========================================
// GESTISCI CLICK SU RISULTATO
// ==========================================
function handleResultClick(e) {
    const href = this.getAttribute('href');
    const isExternal = this.getAttribute('target') === '_blank';
    const productId = this.dataset.productId;

    if (!isExternal && href?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const headerHeight = document.querySelector('header')?.offsetHeight || 80;
            const targetPosition = target.offsetTop - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Se è un prodotto, evidenzialo brevemente
            if (productId) {
                setTimeout(() => {
                    highlightProduct(productId);
                }, 500);
            }
        }
    }

    // Chiudi ricerca
    closeSearchResults();
    searchInput.value = '';
    searchClear?.classList.remove('visible');
}

// ==========================================
// EVIDENZIA PRODOTTO (opzionale)
// ==========================================
function highlightProduct(productId) {
    const productCard = document.querySelector(`.product-card[data-id="${productId}"]`);
    if (productCard) {
        productCard.classList.add('highlight');
        productCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => {
            productCard.classList.remove('highlight');
        }, 2000);
    }
}

// ==========================================
// NAVIGAZIONE TASTIERA
// ==========================================
function handleSearchKeyboard(e) {
    const items = searchResultsContent?.querySelectorAll('.search-result-item');
    if (!items || items.length === 0) return;

    switch (e.key) {
        case 'ArrowDown':
            e.preventDefault();
            currentFocusIndex = (currentFocusIndex + 1) % items.length;
            updateSearchFocus(items);
            break;

        case 'ArrowUp':
            e.preventDefault();
            currentFocusIndex = currentFocusIndex <= 0 ? items.length - 1 : currentFocusIndex - 1;
            updateSearchFocus(items);
            break;

        case 'Enter':
            if (currentFocusIndex >= 0 && items[currentFocusIndex]) {
                e.preventDefault();
                items[currentFocusIndex].click();
            }
            break;

        case 'Escape':
            closeSearchResults();
            searchInput.blur();
            break;
    }
}

// ==========================================
// AGGIORNA FOCUS TASTIERA
// ==========================================
function updateSearchFocus(items) {
    items.forEach((item, index) => {
        item.classList.toggle('focused', index === currentFocusIndex);
    });

    if (items[currentFocusIndex]) {
        items[currentFocusIndex].scrollIntoView({ block: 'nearest' });
    }
}

// ==========================================
// CHIUDI RISULTATI
// ==========================================
function closeSearchResults() {
    searchResults?.classList.remove('active');
    currentFocusIndex = -1;
}

// ==========================================
// FUNZIONI HELPER
// ==========================================
function normalizeString(str) {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""); // Rimuove accenti
}

function highlightMatch(text, query) {
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ==========================================
// CONTEGGIO PRODOTTI AUTOMATICO
// ==========================================

/**
 * Aggiorna tutti i conteggi prodotti nel sito
 * Chiamare dopo aver caricato i prodotti o aggiunto nuovi
 */
function updateProductCounts() {

    // Conteggi per LINEA
    const countByLine = {
        benessere: getProductsByLine('benessere').length,
        bellezza: getProductsByLine('bellezza').length,
        casa: getProductsByLine('casa').length,
        integratori: getProductsByLine('integratori').length
    };

    // Conteggi per SOTTOCATEGORIA
    const countBySubcategory = {
        'oli-essenziali': getProductsBySubcategory('oli-essenziali').length,
        'creme-dermoattive': getProductsBySubcategory('creme-dermoattive').length,
        'bagni-essenze': getProductsBySubcategory('bagni-essenze').length,
        'lamelloderm': getProductsBySubcategory('lamelloderm').length,
        'piedi-gambe': getProductsBySubcategory('piedi-gambe').length,
        'malva': getProductsBySubcategory('malva').length,
        'baby': getProductsBySubcategory('baby').length,
        'specifici': getProductsBySubcategory('specifici').length,
        'igiene-orale': getProductsBySubcategory('igiene-orale').length,
        'intim': getProductsBySubcategory('intim').length,
        'lozioni-corpo': getProductsBySubcategory('lozioni-corpo').length,
        'amici-animali': getProductsBySubcategory('amici-animali').length,
        'capelli': getProductsBySubcategory('capelli').length,
        'body-reform': getProductsBySubcategory('body-reform').length,
        'infiore': getProductsBySubcategory('infiore').length,
        'solari': getProductsBySubcategory('solari').length,
        'uomo': getProductsBySubcategory('uomo').length,
        'prodotti-casa': getProductsBySubcategory('prodotti-casa').length,
        'integrazione-alimentare': getProductsBySubcategory('integrazione-alimentare').length
    };

    // ==========================================
    // AGGIORNA CONTEGGI LINEE (Category Section Headers)
    // ==========================================

    // Linea Benessere
    const benessereCount = document.querySelector('[data-category="benessere"] .products-count');
    if (benessereCount) {
        benessereCount.textContent = `${countByLine.benessere} prodotti`;
    }

    // Linea Bellezza
    const bellezzaCount = document.querySelector('[data-category="bellezza"] .products-count');
    if (bellezzaCount) {
        bellezzaCount.textContent = `${countByLine.bellezza} prodotti`;
    }

    // Linea Casa
    const casaCount = document.querySelector('[data-category="casa"] .products-count');
    if (casaCount) {
        casaCount.textContent = `${countByLine.casa} prodotti`;
    }

    // Linea Integratori
    const integratoriCount = document.querySelector('[data-category="integratori"] .products-count');
    if (integratoriCount) {
        integratoriCount.textContent = `${countByLine.integratori} prodott${countByLine.integratori === 1 ? 'o' : 'i'}`;
    }

    // ==========================================
    // AGGIORNA CONTEGGI SOTTOCATEGORIE
    // ==========================================

    Object.keys(countBySubcategory).forEach(subcategory => {
        const count = countBySubcategory[subcategory];
        const element = document.querySelector(`#${subcategory} .subcategory-count`);

        if (element) {
            element.textContent = `${count} prodott${count === 1 ? 'o' : 'i'}`;
        }
    });

    // ==========================================
    // AGGIORNA SIDEBAR
    // ==========================================

    // Aggiorna conteggi nella sidebar (se hai aggiunto data-count)
    document.querySelectorAll('.subcategory-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
            const subcategory = href.replace('#', '');
            const count = countBySubcategory[subcategory];

            if (count !== undefined) {
                // Se vuoi mostrare il conteggio nel link
                let countBadge = link.querySelector('.sidebar-count');
                if (!countBadge) {
                    countBadge = document.createElement('span');
                    countBadge.className = 'sidebar-count';
                    link.appendChild(countBadge);
                }
                countBadge.textContent = count;
            }
        }
    });

    // ==========================================
    // AGGIORNA HEADER SEZIONE PRODOTTI
    // ==========================================

    const totalProducts = products.length;
    const sectionSubtitle = document.querySelector('.products-section .section-subtitle');
    if (sectionSubtitle) {
        sectionSubtitle.textContent = `Scopri oltre ${totalProducts} prodotti naturali svizzeri per il tuo benessere quotidiano`;
    }

    // ==========================================
    // AGGIORNA STATS (Chi Sono)
    // ==========================================

    const productsStatNumber = document.querySelector('.stat-item:nth-child(3) .stat-number');
    if (productsStatNumber) {
        productsStatNumber.setAttribute('data-target', totalProducts);
    }

    // Log per debug
    console.log('📊 Conteggi aggiornati:', {
        totale: totalProducts,
        linee: countByLine,
        sottocategorie: countBySubcategory
    });
}

// ==========================================
// AGGIORNA CONTEGGIO MOBILE MENU (Opzionale)
// ==========================================

function updateMobileMenuCounts() {
    const mobileCategories = document.querySelectorAll('.mobile-dropdown-category');

    mobileCategories.forEach(category => {
        const titleEl = category.querySelector('.mobile-category-title');
        if (!titleEl) return;

        const title = titleEl.textContent;
        let count = 0;

        if (title.includes('Benessere')) {
            count = getProductsByLine('benessere').length;
        } else if (title.includes('Bellezza')) {
            count = getProductsByLine('bellezza').length;
        } else if (title.includes('Casa')) {
            count = getProductsByLine('casa').length;
        } else if (title.includes('Integratori')) {
            count = getProductsByLine('integratori').length;
        }

        // Aggiungi badge conteggio se vuoi
        let badge = titleEl.querySelector('.mobile-count-badge');
        if (!badge && count > 0) {
            badge = document.createElement('span');
            badge.className = 'mobile-count-badge';
            titleEl.appendChild(badge);
        }
        if (badge) {
            badge.textContent = `(${count})`;
        }
    });
}

// ==========================================
// INIZIALIZZAZIONE
// ==========================================

// Chiama all'avvio
document.addEventListener('DOMContentLoaded', () => {
    // ... altro codice esistente ...

    // 🔄 Aggiorna conteggi prodotti
    updateProductCounts();
    updateMobileMenuCounts();
});

// Esporta funzione per uso esterno (opzionale)
window.updateProductCounts = updateProductCounts;


// ==========================================
// USER AUTH STATE (nel sito principale)
// ==========================================

// Controlla se utente è loggato
firebase.auth().onAuthStateChanged(user => {
    updateUserUI(user);
});

function updateUserUI(user) {
    const navList = document.querySelector('.nav-list');
    const mobileNavList = document.querySelector('.mobile-nav-list');

    if (user) {
        // Utente loggato - mostra profilo
        const userHtml = `
            <li class="nav-item user-menu">
                <a class="link-nav" href="profilo.html">
                    <i class="ri-user-line"></i>
                    ${user.displayName || 'Profilo'}
                </a>
            </li>
        `;
        // Aggiungi al menu
    } else {
        // Utente non loggato - mostra login
        const loginHtml = `
            <li class="nav-item">
                <a class="link-nav" href="login.html">
                    <i class="ri-user-line"></i>
                    Accedi
                </a>
            </li>
        `;
        // Aggiungi al menu
    }
}


// ==========================================
// NAVBAR USER AUTH
// ==========================================

// Elementi DOM
const navUser = document.getElementById('nav-user');
const userGuest = document.getElementById('user-guest');
const userLogged = document.getElementById('user-logged');
const userAvatarBtn = document.getElementById('user-avatar-btn');
const userDropdown = document.getElementById('user-dropdown');
const userAvatar = document.getElementById('user-avatar');
const userAvatarLarge = document.getElementById('user-avatar-large');
const userName = document.getElementById('user-name');
const userFullname = document.getElementById('user-fullname');
const userEmail = document.getElementById('user-email');
const userMenuAdmin = document.getElementById('user-menu-admin');
const btnLogout = document.getElementById('btn-logout');

// Mobile elements
const mobileUserSection = document.getElementById('mobile-user-section');
const mobileGuest = document.getElementById('mobile-guest');
const mobileLogged = document.getElementById('mobile-logged');
const mobileUserAvatar = document.getElementById('mobile-user-avatar');
const mobileUserName = document.getElementById('mobile-user-name');
const mobileUserEmail = document.getElementById('mobile-user-email');
const mobileAdminLinks = document.getElementById('mobile-admin-links');
const mobileBtnLogout = document.getElementById('mobile-btn-logout');

// ==========================================
// INIT AUTH STATE
// ==========================================

function initAuthState() {
    // Controlla se Firebase è disponibile
    if (typeof firebase === 'undefined') {
        console.warn('Firebase non caricato');
        return;
    }
    
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            // Utente loggato
            await updateUILoggedIn(user);
        } else {
            // Utente non loggato
            updateUILoggedOut();
        }
    });
}

// ==========================================
// UPDATE UI - LOGGATO
// ==========================================

async function updateUILoggedIn(user) {
    // Nascondi guest, mostra logged
    userGuest?.classList.add('hidden');
    userLogged?.classList.remove('hidden');
    
    mobileGuest?.classList.add('hidden');
    mobileLogged?.classList.remove('hidden');
    mobileUserSection?.classList.remove('hidden');
    
    // Ottieni dati utente da Firestore
    let userData = null;
    let isAdmin = false;
    
    try {
        const userDoc = await firebase.firestore()
            .collection('users')
            .doc(user.uid)
            .get();
        
        if (userDoc.exists) {
            userData = userDoc.data();
            isAdmin = userData.role === 'admin';
        }
    } catch (error) {
        console.error('Errore recupero dati utente:', error);
    }
    
    // Nome da mostrare
    const displayName = userData?.name || user.displayName?.split(' ')[0] || 'Utente';
    const fullName = userData 
        ? `${userData.name || ''} ${userData.surname || ''}`.trim() 
        : user.displayName || 'Utente';
    const email = user.email;
    const photoURL = userData?.photoURL || user.photoURL;
    
    // Aggiorna Desktop
    if (userName) userName.textContent = displayName;
    if (userFullname) userFullname.textContent = fullName;
    if (userEmail) userEmail.textContent = email;
    
    // Avatar
    if (photoURL) {
        if (userAvatar) userAvatar.innerHTML = `<img src="${photoURL}" alt="Avatar">`;
        if (userAvatarLarge) userAvatarLarge.innerHTML = `<img src="${photoURL}" alt="Avatar">`;
        if (mobileUserAvatar) mobileUserAvatar.innerHTML = `<img src="${photoURL}" alt="Avatar">`;
    } else {
        const initial = displayName.charAt(0).toUpperCase();
        if (userAvatar) userAvatar.innerHTML = `<span>${initial}</span>`;
        if (userAvatarLarge) userAvatarLarge.innerHTML = `<span>${initial}</span>`;
        if (mobileUserAvatar) mobileUserAvatar.innerHTML = `<span>${initial}</span>`;
    }
    
    // Aggiorna Mobile
    if (mobileUserName) mobileUserName.textContent = fullName;
    if (mobileUserEmail) mobileUserEmail.textContent = email;
    
    // Mostra/nascondi menu admin
    if (isAdmin) {
        userMenuAdmin?.classList.remove('hidden');
        mobileAdminLinks?.classList.remove('hidden');
    } else {
        userMenuAdmin?.classList.add('hidden');
        mobileAdminLinks?.classList.add('hidden');
    }
}

// ==========================================
// UPDATE UI - NON LOGGATO
// ==========================================

function updateUILoggedOut() {
    // Mostra guest, nascondi logged
    userGuest?.classList.remove('hidden');
    userLogged?.classList.add('hidden');
    
    mobileGuest?.classList.remove('hidden');
    mobileLogged?.classList.add('hidden');
    mobileUserSection?.classList.add('hidden');
    
    // Chiudi dropdown se aperto
    userDropdown?.classList.remove('active');
    userAvatarBtn?.classList.remove('active');
}

// ==========================================
// TOGGLE USER DROPDOWN
// ==========================================

function setupUserDropdown() {
    // Toggle dropdown
    userAvatarBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        userAvatarBtn.classList.toggle('active');
        userDropdown?.classList.toggle('active');
    });
    
    // Chiudi cliccando fuori
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.user-logged')) {
            userDropdown?.classList.remove('active');
            userAvatarBtn?.classList.remove('active');
        }
    });
    
    // Chiudi su ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            userDropdown?.classList.remove('active');
            userAvatarBtn?.classList.remove('active');
        }
    });
}

// ==========================================
// LOGOUT
// ==========================================

function setupLogout() {
    const handleLogout = async () => {
        try {
            await firebase.auth().signOut();
            
            // Chiudi menu
            userDropdown?.classList.remove('active');
            closeMobileMenu();
            
            // Redirect opzionale
            // window.location.href = 'index.html';
            
            showToast('👋 Logout effettuato', 'success');
            
        } catch (error) {
            console.error('Errore logout:', error);
            showToast('Errore durante il logout', 'error');
        }
    };
    
    btnLogout?.addEventListener('click', handleLogout);
    mobileBtnLogout?.addEventListener('click', handleLogout);
}

// ==========================================
// TOAST NOTIFICATION (se non l'hai già)
// ==========================================

function showToast(message, type = 'success') {
    // Crea container se non esiste
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: 'ri-check-line',
        error: 'ri-error-warning-line',
        warning: 'ri-alert-line'
    };
    
    toast.innerHTML = `
        <i class="${icons[type] || icons.success}"></i>
        <span class="toast-message">${message}</span>
    `;
    
    container.appendChild(toast);
    
    // Rimuovi dopo 3 secondi
    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==========================================
// INIZIALIZZA TUTTO
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initAuthState();
    setupUserDropdown();
    setupLogout();
});