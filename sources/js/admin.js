
// ==========================================
// ADMIN PANEL - JUST MARIZETE
// ==========================================



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

const dashboardSection = document.getElementById('admin-dashboard');


const logoutBtn = document.getElementById('btn-logout');
const adminUsername = document.getElementById('admin-username');

// ==========================================
// INIZIALIZZAZIONE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {

    // ✅ Verifica autenticazione admin
    firebase.auth().onAuthStateChanged(async function (user) {
        const loadingEl = document.getElementById('admin-loading');
        const deniedEl = document.getElementById('access-denied');
        const dashboardEl = document.getElementById('admin-dashboard');

        if (!user) {
            window.location.href = 'login.html';
            return;
        }

        try {
            const doc = await firebase.firestore().collection('users').doc(user.uid).get();

            if (doc.exists && doc.data().role === 'admin') {
                // ✅ È admin
                if (loadingEl) loadingEl.style.display = 'none';
                if (dashboardEl) dashboardEl.style.display = 'block';

                if (adminUsername) {
                    adminUsername.textContent = doc.data().name || user.email;
                }

                // Carica prodotti e setup
                loadProducts();
                loadProductsFromLocal();
                setupEventListeners();

            } else {
                // ❌ Non è admin
                if (loadingEl) loadingEl.style.display = 'none';
                if (deniedEl) deniedEl.style.display = 'flex';
            }
        } catch (error) {
            console.error('Errore:', error);
            if (loadingEl) loadingEl.style.display = 'none';
            if (deniedEl) deniedEl.style.display = 'flex';
        }
    });
});


// ==========================================
// CARICA PRODOTTI (da products-data.js)
// ==========================================
function loadProducts() {
    const tbody = document.getElementById('products-tbody');

    if (!tbody) {
        console.error('❌ products-tbody non trovato!');
        return;
    }

    tbody.innerHTML = '<tr><td colspan="6">Caricamento...</td></tr>';

    // ✅ Usa la variabile 'products' da products-data.js
    if (typeof products === 'undefined' || products.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6">Nessun prodotto trovato</td></tr>';
        console.error('❌ Variabile products non trovata!');
        return;
    }

    console.log('📦 Prodotti trovati:', products.length);

    tbody.innerHTML = '';

    products.forEach(p => {
        tbody.innerHTML += `
            <tr>
                <td>${p.id}</td>
                <td><img src="${p.image || ''}" width="50" onerror="this.style.display='none'"></td>
                <td>${p.name}</td>
                <td>${p.category}</td>
                <td>€${p.price.toFixed(2)}</td>
                <td>
                    <button onclick="editProduct(${p.id})" title="Modifica">✏️</button>
                    <button onclick="deleteProduct(${p.id})" title="Elimina">🗑️</button>
                </td>
            </tr>
        `;
    });

    console.log('✅ Prodotti caricati nella tabella!');
}

// ==========================================
// GESTIONE MODAL
// ==========================================
function closeModal() {
    const modal = document.getElementById('edit-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function openModal() {
    const modal = document.getElementById('edit-modal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// ==========================================
// EVENT LISTENERS
// ==========================================

function setupEventListeners() {

    // Modal
    document.getElementById('modal-close')?.addEventListener('click', closeModal);
    document.getElementById('edit-modal')?.addEventListener('click', function (e) {
        if (e.target === this) closeModal();
    });

    // Torna al sito
    document.getElementById('btn-back-to-site')?.addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    // Logout - torna a index.html
    document.getElementById('btn-logout')?.addEventListener('click', function () {
        firebase.auth().signOut().then(function () {
            window.location.href = 'index.html';
        });
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


}

function showStats() {
    const statsContainer = document.getElementById('stats-container');
    
    if (statsContainer.style.display === 'none') {
        statsContainer.style.display = 'grid';
        loadStats();
    } else {
        statsContainer.style.display = 'none';
    }
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

    // ✅ AGGIUNGI QUESTA PARTE - Nascondi statistiche quando cambi sezione
    const statsContainer = document.getElementById('stats-container');
    if (statsContainer && sectionName !== 'stats') {
        statsContainer.style.display = 'none';
    }
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
                <img src="${product.image}" alt="${product.name}"onerror="this.src='./sources/images/placeholder.png'">
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
    const image = getImageUrl() || './sources/images/placeholder.png';
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

function getImageUrl() {
    const type = document.querySelector('input[name="image-type"]:checked')?.value || 'local';

    if (type === 'local') {
        return document.getElementById('product-image-local')?.value || '';
    } else {
        return document.getElementById('product-image-url')?.value || '';
    }
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
    loadStats();
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
// SALVATAGGIO LOCALSTORAGE
// ==========================================
function saveProductsToLocal() {
    localStorage.setItem('justMarizete_products', JSON.stringify(products));
    console.log('💾 Prodotti salvati in localStorage');
}

function loadProductsFromLocal() {
    const saved = localStorage.getItem('justMarizete_products');
    if (saved) {
        // Sostituisci l'array products con quello salvato
        const savedProducts = JSON.parse(saved);
        products.length = 0; // Svuota array
        savedProducts.forEach(p => products.push(p)); // Riempi con dati salvati
        console.log('📦 Prodotti caricati da localStorage:', products.length);
    }
}

// ==========================================
// GESTIONE INPUT IMMAGINE
// ==========================================
function toggleImageInput() {
    const type = document.querySelector('input[name="image-type"]:checked').value;
    const localInput = document.getElementById('product-image-local');
    const urlInput = document.getElementById('product-image-url');

    if (type === 'local') {
        localInput.style.display = 'block';
        urlInput.style.display = 'none';
    } else {
        localInput.style.display = 'none';
        urlInput.style.display = 'block';
    }

    updateImagePreview();
}

function updateImagePreview() {
    const type = document.querySelector('input[name="image-type"]:checked')?.value || 'local';
    const localInput = document.getElementById('product-image-local');
    const urlInput = document.getElementById('product-image-url');
    const preview = document.getElementById('image-preview');
    const hiddenInput = document.getElementById('product-image');

    let imageUrl = '';

    if (type === 'local') {
        imageUrl = localInput?.value || '';
    } else {
        imageUrl = urlInput?.value || '';
    }

    // Salva nel campo nascosto
    if (hiddenInput) {
        hiddenInput.value = imageUrl;
    }

    // Mostra anteprima
    if (preview) {
        if (imageUrl) {
            preview.innerHTML = `
                <img src="${imageUrl}" 
                     style="max-width: 100%; max-height: 120px; border-radius: 8px;" 
                     onerror="this.parentElement.innerHTML='<span style=\\'color: #e74c3c;\\'>❌ Immagine non trovata</span>'">
            `;
        } else {
            preview.innerHTML = '<span style="color: #999;">Anteprima immagine</span>';
        }
    }
}

// ==========================================
// STATISTICHE
// ==========================================
function loadStats() {
    // Prendi i prodotti (da localStorage o array)
    let allProducts = [];
    
    const saved = localStorage.getItem('justMarizete_products');
    if (saved) {
        allProducts = JSON.parse(saved);
    } else if (typeof products !== 'undefined') {
        allProducts = products;
    }
    
    // Calcola statistiche
    const stats = {
        total: allProducts.length,
        benessere: allProducts.filter(p => p.line === 'benessere').length,
        bellezza: allProducts.filter(p => p.line === 'bellezza').length,
        casa: allProducts.filter(p => p.line === 'casa').length,
        integratori: allProducts.filter(p => p.line === 'integratori').length,
        valore: allProducts.reduce((sum, p) => sum + (parseFloat(p.price) || 0), 0)
    };
    
    // Aggiorna DOM
    const setStatSafe = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    };
    
    setStatSafe('stat-total', stats.total);
    setStatSafe('stat-benessere', stats.benessere);
    setStatSafe('stat-bellezza', stats.bellezza);
    setStatSafe('stat-casa', stats.casa);
    setStatSafe('stat-integratori', stats.integratori);
    setStatSafe('stat-valore', '€' + stats.valore.toFixed(2));
    
    console.log('📊 Statistiche aggiornate:', stats);
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
