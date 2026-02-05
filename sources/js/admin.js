// ==========================================
// ADMIN PANEL - JUST MARIZETE
// ==========================================

// ==========================================
// CONFIGURAZIONE (CAMBIA QUESTE CREDENZIALI!)
// ==========================================
const ADMIN_CONFIG = {
    // ⚠️ CAMBIA QUESTE CREDENZIALI!
    username: 'admin',
    password: 'JustMarizete2024!',

    // Chiave per localStorage
    sessionKey: 'just_admin_session',
    sessionDuration: 24 * 60 * 60 * 1000 // 24 ore
};

// Sottocategorie per linea
const SUBCATEGORIES = {
    benessere: [
        { value: 'oli-essenziali', label: 'Oli Essenziali' },
        { value: 'creme-dermoattive', label: 'Creme Dermoattive' },
        { value: 'bagni-essenze', label: 'Bagni ed Essenze' },
        { value: 'lamelloderm', label: 'Lamelloderm' },
        { value: 'piedi-gambe', label: 'Piedi e Gambe' },
        { value: 'malva', label: 'Malva' },
        { value: 'baby', label: 'Baby' },
        { value: 'specifici', label: 'Specifici' },
        { value: 'igiene-orale', label: 'Igiene Orale' },
        { value: 'intim', label: 'Intim' },
        { value: 'lozioni-corpo', label: 'Lozioni Corpo' },
        { value: 'amici-animali', label: 'Amici Animali' }
    ],
    bellezza: [
        { value: 'capelli', label: 'Capelli' },
        { value: 'body-reform', label: 'Body Reform' },
        { value: 'infiore', label: 'Infiore' },
        { value: 'solari', label: 'Solari' },
        { value: 'uomo', label: 'Uomo' }
    ],
    casa: [
        { value: 'prodotti-casa', label: 'Prodotti Casa' }
    ],
    integratori: [
        { value: 'integrazione-alimentare', label: 'Integrazione Alimentare' }
    ]
};

// ==========================================
// DOM ELEMENTS
// ==========================================
const loginSection = document.getElementById('admin-login');
const dashboardSection = document.getElementById('admin-dashboard');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const logoutBtn = document.getElementById('btn-logout');
const adminUsername = document.getElementById('admin-username');

// ==========================================
// INIZIALIZZAZIONE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    checkSession();
    setupEventListeners();
});

// ==========================================
// AUTENTICAZIONE
// ==========================================

function checkSession() {
    const session = localStorage.getItem(ADMIN_CONFIG.sessionKey);

    if (session) {
        const sessionData = JSON.parse(session);
        const now = Date.now();

        if (now < sessionData.expires) {
            // Sessione valida
            showDashboard(sessionData.username);
            return;
        } else {
            // Sessione scaduta
            localStorage.removeItem(ADMIN_CONFIG.sessionKey);
        }
    }

    // Mostra login
    showLogin();
}

function handleLogin(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica credenziali
    if (username === ADMIN_CONFIG.username && password === ADMIN_CONFIG.password) {
        // Crea sessione
        const session = {
            username: username,
            expires: Date.now() + ADMIN_CONFIG.sessionDuration,
            loginTime: new Date().toISOString()
        };

        localStorage.setItem(ADMIN_CONFIG.sessionKey, JSON.stringify(session));

        showDashboard(username);
        showToast('Accesso effettuato con successo!', 'success');
    } else {
        loginError.textContent = '❌ Username o password non corretti';
        shakeElement(loginForm);
    }
}

function handleLogout() {
    localStorage.removeItem(ADMIN_CONFIG.sessionKey);
    showLogin();
    showToast('Logout effettuato', 'success');
}

function showLogin() {
    loginSection.style.display = 'flex';
    dashboardSection.style.display = 'none';
    loginForm.reset();
    loginError.textContent = '';
}

function showDashboard(username) {
    loginSection.style.display = 'none';
    dashboardSection.style.display = 'flex';
    adminUsername.textContent = username;

    // Carica dati
    loadProductsTable();
    loadStats();
}

// ==========================================
// EVENT LISTENERS
// ==========================================

function setupEventListeners() {
    // Login
    loginForm?.addEventListener('submit', handleLogin);
    logoutBtn?.addEventListener('click', handleLogout);

    // Toggle password visibility
    document.getElementById('toggle-password')?.addEventListener('click', function () {
        const passwordInput = document.getElementById('password');
        const icon = this.querySelector('i');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.className = 'ri-eye-off-line';
        } else {
            passwordInput.type = 'password';
            icon.className = 'ri-eye-line';
        }
    });

    // Navigation
    document.querySelectorAll('.admin-nav-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const section = this.dataset.section;
            switchSection(section);
        });
    });

    // Linea -> Sottocategoria
    document.getElementById('product-line')?.addEventListener('change', updateSubcategories);

    // Product Form
    document.getElementById('product-form')?.addEventListener('submit', handleAddProduct);

    // Search & Filter
    document.getElementById('search-products')?.addEventListener('input', filterProducts);
    document.getElementById('filter-category')?.addEventListener('change', filterProducts);

    // Export
    document.getElementById('export-products')?.addEventListener('click', exportProducts);

    // Change Password
    document.getElementById('change-password-form')?.addEventListener('submit', handleChangePassword);

    // Modal
    document.getElementById('modal-close')?.addEventListener('click', closeModal);
    document.getElementById('edit-modal')?.addEventListener('click', function (e) {
        if (e.target === this) closeModal();
    });
}

// ==========================================
// NAVIGATION
// ==========================================

function switchSection(sectionName) {
    // Update nav buttons
    document.querySelectorAll('.admin-nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.section === sectionName);
    });

    // Update sections
    document.querySelectorAll('.admin-section').forEach(section => {
        section.classList.toggle('active', section.id === `section-${sectionName}`);
    });
}

// ==========================================
// PRODUCTS TABLE
// ==========================================

function loadProductsTable(productsToShow = products) {
    const tbody = document.getElementById('products-tbody');
    if (!tbody) return;

    tbody.innerHTML = productsToShow.map(product => `
        <tr data-id="${product.id}">
            <td>${product.id}</td>
            <td>
                <img src="${product.image}" alt="${product.name}" 
                     onerror="this.src='./sources/images/placeholder.png'">
            </td>
            <td><strong>${product.name}</strong></td>
            <td>${product.category}</td>
            <td>€ ${product.price.toFixed(2)}</td>
            <td class="actions">
                <button class="btn-edit" onclick="editProduct(${product.id})" title="Modifica">
                    <i class="ri-edit-line"></i>
                </button>
                <button class="btn-delete" onclick="deleteProduct(${product.id})" title="Elimina">
                    <i class="ri-delete-bin-line"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function filterProducts() {
    const search = document.getElementById('search-products')?.value.toLowerCase() || '';
    const category = document.getElementById('filter-category')?.value || '';

    let filtered = products;

    if (search) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(search) ||
            p.category.toLowerCase().includes(search) ||
            p.description.toLowerCase().includes(search)
        );
    }

    if (category) {
        filtered = filtered.filter(p => p.line === category);
    }

    loadProductsTable(filtered);
}

// ==========================================
// ADD PRODUCT
// ==========================================

function updateSubcategories() {
    const line = document.getElementById('product-line').value;
    const subcategorySelect = document.getElementById('product-subcategory');

    subcategorySelect.innerHTML = '<option value="">Seleziona sottocategoria</option>';

    if (line && SUBCATEGORIES[line]) {
        SUBCATEGORIES[line].forEach(sub => {
            subcategorySelect.innerHTML += `<option value="${sub.value}">${sub.label}</option>`;
        });
    }
}

function handleAddProduct(e) {
    e.preventDefault();

    const form = e.target;

    // Raccogli dati
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const line = document.getElementById('product-line').value;
    const subcategory = document.getElementById('product-subcategory').value;
    const description = document.getElementById('product-description').value;
    const image = document.getElementById('product-image').value || './sources/images/placeholder.png';
    const rating = parseFloat(document.getElementById('product-rating').value) || 4;

    // Raccogli badges
    const badges = [];
    form.querySelectorAll('input[name="badges"]:checked').forEach(cb => {
        badges.push(cb.value);
    });

    // Trova categoria label
    const categoryLabel = SUBCATEGORIES[line]?.find(s => s.value === subcategory)?.label || subcategory;

    // Genera nuovo ID
    const newId = Math.max(...products.map(p => p.id)) + 1;

    // Crea prodotto
    const newProduct = {
        id: newId,
        name: name,
        category: categoryLabel,
        subcategory: subcategory,
        line: line,
        price: price,
        description: description,
        image: image,
        rating: rating,
        reviews: 0,
        badges: badges
    };

    // Aggiungi al database
    products.push(newProduct);

    // Salva in localStorage (persistenza locale)
    saveProductsToLocal();

    // Reset form
    form.reset();
    document.getElementById('product-subcategory').innerHTML = '<option value="">Prima seleziona la linea</option>';

    // Aggiorna tabella
    loadProductsTable();
    loadStats();

    // Feedback
    showToast(`✅ Prodotto "${name}" aggiunto con successo!`, 'success');

    // Mostra codice da copiare
    showProductCode(newProduct);
}

function showProductCode(product) {
    const code = JSON.stringify(product, null, 4);

    const modal = document.getElementById('edit-modal');
    const modalBody = modal.querySelector('.modal-body');

    modal.querySelector('.modal-header h3').innerHTML = '<i class="ri-code-line"></i> Codice Prodotto';

    modalBody.innerHTML = `
        <p style="margin-bottom: 15px;">Copia questo codice in <code>products.js</code>:</p>
        <textarea style="width: 100%; height: 300px; font-family: monospace; font-size: 12px; padding: 15px; border-radius: 8px; border: 2px solid #e5e7eb;">${code}</textarea>
        <div style="margin-top: 15px; display: flex; gap: 10px;">
            <button onclick="copyToClipboard(\`${code.replace(/`/g, '\\`')}\`)" class="btn-primary">
                <i class="ri-file-copy-line"></i> Copia Codice
            </button>
            <button onclick="closeModal()" class="btn-secondary">Chiudi</button>
        </div>
    `;

    modal.classList.add('active');
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('📋 Codice copiato negli appunti!', 'success');
    });
}

// ==========================================
// EDIT PRODUCT
// ==========================================

function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const modal = document.getElementById('edit-modal');
    const modalBody = modal.querySelector('.modal-body');

    modal.querySelector('.modal-header h3').innerHTML = '<i class="ri-edit-line"></i> Modifica Prodotto';

    // Genera opzioni sottocategorie
    let subcatOptions = '';
    if (SUBCATEGORIES[product.line]) {
        subcatOptions = SUBCATEGORIES[product.line].map(sub =>
            `<option value="${sub.value}" ${sub.value === product.subcategory ? 'selected' : ''}>${sub.label}</option>`
        ).join('');
    }

    modalBody.innerHTML = `
        <input type="hidden" id="edit-product-id" value="${product.id}">
        
        <div class="form-group">
            <label>Nome Prodotto</label>
            <input type="text" id="edit-product-name" value="${product.name}" required>
        </div>
        
        <div class="form-row">
            <div class="form-group">
                <label>Prezzo (€)</label>
                <input type="number" id="edit-product-price" value="${product.price}" step="0.01" required>
            </div>
            <div class="form-group">
                <label>Rating</label>
                <input type="number" id="edit-product-rating" value="${product.rating}" min="1" max="5" step="0.5">
            </div>
        </div>
        
        <div class="form-group">
            <label>Descrizione</label>
            <textarea id="edit-product-description" rows="3">${product.description}</textarea>
        </div>
        
        <div class="form-group">
            <label>Immagine URL</label>
            <input type="text" id="edit-product-image" value="${product.image}">
        </div>
        
        <div class="form-actions" style="margin-top: 20px;">
            <button type="button" onclick="closeModal()" class="btn-secondary">Annulla</button>
            <button type="button" onclick="saveProductEdit(${product.id})" class="btn-primary">
                <i class="ri-save-line"></i> Salva Modifiche
            </button>
        </div>
    `;

    modal.classList.add('active');
}

function saveProductEdit(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    // Aggiorna dati
    product.name = document.getElementById('edit-product-name').value;
    product.price = parseFloat(document.getElementById('edit-product-price').value);
    product.rating = parseFloat(document.getElementById('edit-product-rating').value);
    product.description = document.getElementById('edit-product-description').value;
    product.image = document.getElementById('edit-product-image').value;

    // Salva
    saveProductsToLocal();

    // Aggiorna UI
    loadProductsTable();
    closeModal();

    showToast(`✅ Prodotto "${product.name}" modificato!`, 'success');
}

// ==========================================
// DELETE PRODUCT
// ==========================================

function deleteProduct(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    if (confirm(`Sei sicuro di voler eliminare "${product.name}"?`)) {
        const index = products.findIndex(p => p.id === id);
        products.splice(index, 1);

        saveProductsToLocal();
        loadProductsTable();
        loadStats();

        showToast(`🗑️ Prodotto "${product.name}" eliminato`, 'warning');
    }
}

// ==========================================
// STATS
// ==========================================

function loadStats() {
    const statsGrid = document.getElementById('stats-grid');
    if (!statsGrid) return;

    const stats = [
        {
            icon: 'ri-shopping-bag-3-line',
            class: 'total',
            value: products.length,
            label: 'Prodotti Totali'
        },
        {
            icon: 'ri-leaf-line',
            class: 'benessere',
            value: getProductsByLine('benessere').length,
            label: 'Linea Benessere'
        },
        {
            icon: 'ri-sparkling-line',
            class: 'bellezza',
            value: getProductsByLine('bellezza').length,
            label: 'Linea Bellezza'
        },
        {
            icon: 'ri-home-heart-line',
            class: 'casa',
            value: getProductsByLine('casa').length,
            label: 'Linea Casa'
        },
        {
            icon: 'ri-capsule-line',
            class: 'integratori',
            value: getProductsByLine('integratori').length,
            label: 'Integratori'
        }
    ];

    statsGrid.innerHTML = stats.map(stat => `
        <div class="stat-card">
            <div class="stat-icon ${stat.class}">
                <i class="${stat.icon}"></i>
            </div>
            <div class="stat-info">
                <h3>${stat.value}</h3>
                <p>${stat.label}</p>
            </div>
        </div>
    `).join('');
}

// ==========================================
// LOCAL STORAGE
// ==========================================

function saveProductsToLocal() {
    localStorage.setItem('just_products_backup', JSON.stringify(products));
}

function loadProductsFromLocal() {
    const saved = localStorage.getItem('just_products_backup');
    if (saved) {
        return JSON.parse(saved);
    }
    return null;
}

// ==========================================
// EXPORT
// ==========================================

function exportProducts() {
    const dataStr = JSON.stringify(products, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `products_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();

    URL.revokeObjectURL(url);
    showToast('📥 File esportato con successo!', 'success');
}

// ==========================================
// CHANGE PASSWORD
// ==========================================

function handleChangePassword(e) {
    e.preventDefault();

    const current = document.getElementById('current-password').value;
    const newPass = document.getElementById('new-password').value;
    const confirm = document.getElementById('confirm-password').value;

    if (current !== ADMIN_CONFIG.password) {
        showToast('❌ Password attuale non corretta', 'error');
        return;
    }

    if (newPass !== confirm) {
        showToast('❌ Le password non coincidono', 'error');
        return;
    }

    if (newPass.length < 8) {
        showToast('❌ La password deve avere almeno 8 caratteri', 'error');
        return;
    }

    // In un sistema reale, salveresti la nuova password sul server
    // Qui mostriamo solo un messaggio informativo
    showToast('⚠️ Per cambiare la password, modifica ADMIN_CONFIG in admin.js', 'warning');
    e.target.reset();
}

// ==========================================
// MODAL
// ==========================================

function closeModal() {
    document.getElementById('edit-modal')?.classList.remove('active');
}

// ==========================================
// UTILITIES
// ==========================================

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const icons = {
        success: 'ri-check-line',
        error: 'ri-error-warning-line',
        warning: 'ri-alert-line'
    };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="${icons[type]}"></i>
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function shakeElement(element) {
    element.style.animation = 'shake 0.5s ease';
    setTimeout(() => element.style.animation = '', 500);
}

// Aggiungi animazione shake
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        20%, 60% { transform: translateX(-10px); }
        40%, 80% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);