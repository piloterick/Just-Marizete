// ==================== //
// PROFILE PAGE SCRIPTS //
// ==================== //

console.log('✅ profilo.js caricato correttamente!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM pronto');
    
    initProfileNavigation();
    initPersonalDataForm();
    initAddressManagement();
    initOrdersSection();
    initSecuritySection();
    initPreferencesSection();
    initAvatarUpload();
    initModals();
    loadUserData();
});

// ==================== //
// USER DATA MANAGEMENT //
// ==================== //

const defaultUserData = {
    id: 1,
    nome: 'Mario',
    cognome: 'Rossi',
    email: 'mario.rossi@email.com',
    telefono: '+39 333 1234567',
    dataNascita: '1990-05-15',
    genere: 'M',
    codiceFiscale: 'RSSMRA90E15H501Z',
    avatar: 'https://via.placeholder.com/120x120/6643b5/ffffff?text=MR',
    addresses: [
        {
            id: 1,
            label: 'Casa',
            nome: 'Mario',
            cognome: 'Rossi',
            via: 'Via Roma 123',
            cap: '00100',
            citta: 'Roma',
            provincia: 'RM',
            paese: 'IT',
            telefono: '+39 333 1234567',
            isDefault: true
        },
        {
            id: 2,
            label: 'Ufficio',
            nome: 'Mario',
            cognome: 'Rossi',
            via: 'Via Milano 456',
            cap: '20100',
            citta: 'Milano',
            provincia: 'MI',
            paese: 'IT',
            telefono: '+39 333 7654321',
            isDefault: false
        }
    ],
    orders: [
        {
            id: 'ORD-2025-001',
            date: '2025-01-15',
            status: 'consegnato',
            total: 87.50,
            products: [
                { name: 'Olio 31', price: 38.00, quantity: 1, image: './sources/images/Oli Essenziali/olio-31.png' },
                { name: 'Crema Calendula', price: 23.00, quantity: 1, image: './sources/images/Creme Dermoattive/Crema-dermo-Calendula.png' },
                { name: 'Relax Attivatore', price: 19.50, quantity: 1, image: './sources/images/Oli Essenziali/relax-attivatore.png' }
            ],
            shippingAddress: 'Via Roma 123, 00100 Roma (RM)'
        },
        {
            id: 'ORD-2025-002',
            date: '2025-01-20',
            status: 'spedito',
            total: 45.00,
            products: [
                { name: 'Shampoo Addolcente', price: 23.00, quantity: 1, image: './sources/images/Capelli/Shampoo-addolcente.png' },
                { name: 'Balsamo Disciplinante', price: 22.00, quantity: 1, image: './sources/images/Capelli/Balsamo-disciplinante.png' }
            ],
            shippingAddress: 'Via Milano 456, 20100 Milano (MI)',
            trackingNumber: 'IT123456789'
        },
        {
            id: 'ORD-2025-003',
            date: '2025-01-25',
            status: 'in-elaborazione',
            total: 62.00,
            products: [
                { name: 'Crema Viso Malva', price: 32.00, quantity: 1, image: './sources/images/Malva/Crema-viso-Malva.png' },
                { name: 'Latte Malva', price: 29.50, quantity: 1, image: './sources/images/Malva/Latte-corpo-Malva.png' }
            ],
            shippingAddress: 'Via Roma 123, 00100 Roma (RM)'
        }
    ],
    preferences: {
        emailPromo: true,
        orderNotifications: true,
        newsletter: false,
        pushNotifications: false,
        language: 'it',
        currency: 'EUR',
        theme: 'light',
        searchHistory: true,
        analyticsCookies: true
    },
    security: {
        lastPasswordChange: '2024-12-01',
        twoFactorEnabled: false,
        sessions: [
            {
                id: 1,
                device: 'Chrome su Windows',
                location: 'Roma, Italia',
                lastActive: 'Adesso',
                current: true,
                icon: 'ri-computer-line'
            },
            {
                id: 2,
                device: 'Safari su iPhone',
                location: 'Roma, Italia',
                lastActive: '2 ore fa',
                current: false,
                icon: 'ri-smartphone-line'
            }
        ]
    }
};

function loadUserData() {
    let userData = localStorage.getItem('userData');
    
    if (!userData) {
        localStorage.setItem('userData', JSON.stringify(defaultUserData));
        userData = defaultUserData;
    } else {
        userData = JSON.parse(userData);
    }

    populateUserData(userData);
    console.log('👤 Dati utente caricati');
}

function populateUserData(data) {
    // Sidebar
    const sidebarUsername = document.getElementById('sidebar-username');
    const sidebarEmail = document.getElementById('sidebar-email');
    const avatarPreview = document.getElementById('avatar-preview');
    
    if (sidebarUsername) sidebarUsername.textContent = `${data.nome} ${data.cognome}`;
    if (sidebarEmail) sidebarEmail.textContent = data.email;
    if (avatarPreview) avatarPreview.src = data.avatar || 'https://via.placeholder.com/120x120/6643b5/ffffff?text=User';

    // Personal Data Form
    const fields = {
        'nome': data.nome,
        'cognome': data.cognome,
        'email': data.email,
        'telefono': data.telefono,
        'data-nascita': data.dataNascita,
        'genere': data.genere,
        'codice-fiscale': data.codiceFiscale
    };

    for (const [id, value] of Object.entries(fields)) {
        const element = document.getElementById(id);
        if (element) element.value = value || '';
    }

    // Addresses
    if (data.addresses) renderAddresses(data.addresses);

    // Orders
    if (data.orders) renderOrders(data.orders);

    // Security
    if (data.security) {
        const lastPasswordChange = document.getElementById('last-password-change');
        if (lastPasswordChange && data.security.lastPasswordChange) {
            lastPasswordChange.textContent = new Date(data.security.lastPasswordChange).toLocaleDateString('it-IT');
        }
        
        const toggle2fa = document.getElementById('toggle-2fa');
        if (toggle2fa) toggle2fa.checked = data.security.twoFactorEnabled;
        
        if (data.security.sessions) renderSessions(data.security.sessions);
    }

    // Preferences
    if (data.preferences) {
        const checkboxes = {
            'email-promo': data.preferences.emailPromo,
            'order-notifications': data.preferences.orderNotifications,
            'newsletter': data.preferences.newsletter,
            'push-notifications': data.preferences.pushNotifications,
            'search-history': data.preferences.searchHistory,
            'analytics-cookies': data.preferences.analyticsCookies
        };

        for (const [id, value] of Object.entries(checkboxes)) {
            const element = document.getElementById(id);
            if (element) element.checked = value;
        }

        const language = document.getElementById('language');
        if (language) language.value = data.preferences.language;

        const currency = document.getElementById('currency');
        if (currency) currency.value = data.preferences.currency;

        const themeRadio = document.querySelector(`input[name="theme"][value="${data.preferences.theme}"]`);
        if (themeRadio) themeRadio.checked = true;
    }
}

function saveUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

function getUserData() {
    const data = localStorage.getItem('userData');
    return data ? JSON.parse(data) : defaultUserData;
}

// ==================== //
// PROFILE NAVIGATION   //
// ==================== //

function initProfileNavigation() {
    const navButtons = document.querySelectorAll('.profile-nav-btn[data-section]');
    const sections = document.querySelectorAll('.profile-section');

    console.log('🔘 Bottoni trovati:', navButtons.length);
    console.log('📑 Sezioni trovate:', sections.length);

    // Imposta prima sezione attiva
    sections.forEach((section, index) => {
        if (index === 0) {
            section.style.display = 'block';
            section.classList.add('active');
        } else {
            section.style.display = 'none';
            section.classList.remove('active');
        }
    });

    // Click handler per bottoni navigazione
    navButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSection = this.getAttribute('data-section');
            console.log('👆 Cliccato:', targetSection);

            // Update bottoni
            navButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Update sezioni
            sections.forEach(section => {
                section.style.display = 'none';
                section.classList.remove('active');
            });

            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.style.display = 'block';
                targetElement.classList.add('active');
            }
        });
    });

    // Logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Sei sicuro di voler uscire?')) {
                localStorage.removeItem('userSession');
                showToast('success', 'Logout effettuato', 'A presto!');
                setTimeout(() => window.location.href = 'index.html', 1500);
            }
        });
    }
}

// ==================== //
// PERSONAL DATA FORM   //
// ==================== //

function initPersonalDataForm() {
    const form = document.getElementById('personal-data-form');
    const resetBtn = document.getElementById('reset-personal');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const userData = getUserData();
            
            userData.nome = document.getElementById('nome')?.value || '';
            userData.cognome = document.getElementById('cognome')?.value || '';
            userData.email = document.getElementById('email')?.value || '';
            userData.telefono = document.getElementById('telefono')?.value || '';
            userData.dataNascita = document.getElementById('data-nascita')?.value || '';
            userData.genere = document.getElementById('genere')?.value || '';
            userData.codiceFiscale = (document.getElementById('codice-fiscale')?.value || '').toUpperCase();

            saveUserData(userData);

            // Update sidebar
            const sidebarUsername = document.getElementById('sidebar-username');
            const sidebarEmail = document.getElementById('sidebar-email');
            if (sidebarUsername) sidebarUsername.textContent = `${userData.nome} ${userData.cognome}`;
            if (sidebarEmail) sidebarEmail.textContent = userData.email;

            showToast('success', 'Dati salvati', 'Le tue informazioni sono state aggiornate');
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            populateUserData(getUserData());
            showToast('info', 'Modifiche annullate', 'I dati sono stati ripristinati');
        });
    }
}

// ==================== //
// AVATAR UPLOAD        //
// ==================== //

function initAvatarUpload() {
    const avatarUpload = document.getElementById('avatar-upload');
    const avatarPreview = document.getElementById('avatar-preview');

    if (avatarUpload && avatarPreview) {
        avatarUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            
            if (file) {
                if (!file.type.startsWith('image/')) {
                    showToast('error', 'Errore', 'Seleziona un file immagine valido');
                    return;
                }

                if (file.size > 5 * 1024 * 1024) {
                    showToast('error', 'Errore', 'L\'immagine non può superare i 5MB');
                    return;
                }

                const reader = new FileReader();
                reader.onload = function(e) {
                    avatarPreview.src = e.target.result;
                    
                    const userData = getUserData();
                    userData.avatar = e.target.result;
                    saveUserData(userData);

                    showToast('success', 'Avatar aggiornato', 'La tua foto profilo è stata cambiata');
                };
                reader.readAsDataURL(file);
            }
        });
    }
}

// ==================== //
// ADDRESS MANAGEMENT   //
// ==================== //

function initAddressManagement() {
    const addAddressBtn = document.getElementById('add-address-btn');
    const addressModal = document.getElementById('address-modal');
    const addressForm = document.getElementById('address-form');
    const closeModalBtn = document.getElementById('close-address-modal');
    const cancelAddressBtn = document.getElementById('cancel-address');

    if (addAddressBtn) {
        addAddressBtn.addEventListener('click', () => openAddressModal());
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeAddressModal);
    }
    
    if (cancelAddressBtn) {
        cancelAddressBtn.addEventListener('click', closeAddressModal);
    }

    if (addressModal) {
        addressModal.addEventListener('click', function(e) {
            if (e.target === addressModal) closeAddressModal();
        });
    }

    if (addressForm) {
        addressForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveAddress();
        });
    }
}

function openAddressModal(addressId = null) {
    const modal = document.getElementById('address-modal');
    const modalTitle = document.getElementById('address-modal-title');
    const form = document.getElementById('address-form');

    if (!modal || !form) return;

    form.reset();
    document.getElementById('address-id').value = '';

    if (addressId) {
        modalTitle.textContent = 'Modifica Indirizzo';
        const userData = getUserData();
        const address = userData.addresses.find(a => a.id === addressId);
        
        if (address) {
            document.getElementById('address-id').value = address.id;
            document.getElementById('address-label').value = address.label;
            document.getElementById('address-nome').value = address.nome;
            document.getElementById('address-cognome').value = address.cognome;
            document.getElementById('address-via').value = address.via;
            document.getElementById('address-cap').value = address.cap;
            document.getElementById('address-citta').value = address.citta;
            document.getElementById('address-provincia').value = address.provincia;
            document.getElementById('address-paese').value = address.paese;
            document.getElementById('address-telefono').value = address.telefono;
            document.getElementById('address-default').checked = address.isDefault;
        }
    } else {
        modalTitle.textContent = 'Nuovo Indirizzo';
        const userData = getUserData();
        document.getElementById('address-nome').value = userData.nome || '';
        document.getElementById('address-cognome').value = userData.cognome || '';
        document.getElementById('address-telefono').value = userData.telefono || '';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAddressModal() {
    const modal = document.getElementById('address-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function saveAddress() {
    const userData = getUserData();
    const addressId = document.getElementById('address-id').value;
    const isDefault = document.getElementById('address-default').checked;

    const addressData = {
        id: addressId ? parseInt(addressId) : Date.now(),
        label: document.getElementById('address-label').value,
        nome: document.getElementById('address-nome').value,
        cognome: document.getElementById('address-cognome').value,
        via: document.getElementById('address-via').value,
        cap: document.getElementById('address-cap').value,
        citta: document.getElementById('address-citta').value,
        provincia: document.getElementById('address-provincia').value.toUpperCase(),
        paese: document.getElementById('address-paese').value,
        telefono: document.getElementById('address-telefono').value,
        isDefault: isDefault
    };

    if (isDefault) {
        userData.addresses.forEach(addr => addr.isDefault = false);
    }

    if (addressId) {
        const index = userData.addresses.findIndex(a => a.id === parseInt(addressId));
        if (index !== -1) userData.addresses[index] = addressData;
        showToast('success', 'Indirizzo aggiornato', 'Le modifiche sono state salvate');
    } else {
        userData.addresses.push(addressData);
        showToast('success', 'Indirizzo aggiunto', 'Il nuovo indirizzo è stato salvato');
    }

    saveUserData(userData);
    renderAddresses(userData.addresses);
    closeAddressModal();
}

function renderAddresses(addresses) {
    const container = document.getElementById('addresses-list');
    if (!container) return;
    
    if (!addresses || addresses.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1; padding: 40px; text-align: center;">
                <i class="ri-map-pin-line" style="font-size: 60px; color: #ccc;"></i>
                <h3>Nessun indirizzo salvato</h3>
                <p>Aggiungi un indirizzo per velocizzare i tuoi acquisti</p>
            </div>
        `;
        return;
    }

    container.innerHTML = addresses.map(address => `
        <div class="address-card ${address.isDefault ? 'default' : ''}" data-id="${address.id}">
            <div>
                <span class="address-label">
                    <i class="ri-${address.label.toLowerCase() === 'casa' ? 'home' : 'building'}-line"></i>
                    ${address.label}
                </span>
                ${address.isDefault ? '<span class="default-badge">Predefinito</span>' : ''}
            </div>
            <div class="address-name">${address.nome} ${address.cognome}</div>
            <div class="address-details">
                ${address.via}<br>
                ${address.cap} ${address.citta} (${address.provincia})<br>
                ${getCountryName(address.paese)}<br>
                Tel: ${address.telefono}
            </div>
            <div class="address-actions">
                <button class="btn-edit" onclick="editAddress(${address.id})">
                    <i class="ri-pencil-line"></i> Modifica
                </button>
                <button class="btn-delete" onclick="deleteAddress(${address.id})">
                    <i class="ri-delete-bin-line"></i> Elimina
                </button>
            </div>
        </div>
    `).join('');
}

function getCountryName(code) {
    const countries = { 'IT': 'Italia', 'CH': 'Svizzera', 'SM': 'San Marino', 'VA': 'Città del Vaticano' };
    return countries[code] || code;
}

function editAddress(addressId) {
    openAddressModal(addressId);
}

function deleteAddress(addressId) {
    if (!confirm('Sei sicuro di voler eliminare questo indirizzo?')) return;

    const userData = getUserData();
    userData.addresses = userData.addresses.filter(a => a.id !== addressId);
    
    saveUserData(userData);
    renderAddresses(userData.addresses);
    showToast('success', 'Indirizzo eliminato', 'L\'indirizzo è stato rimosso');
}

// ==================== //
// ORDERS SECTION       //
// ==================== //

function initOrdersSection() {
    const statusFilter = document.getElementById('order-status-filter');
    const dateFilter = document.getElementById('order-date-filter');

    if (statusFilter) statusFilter.addEventListener('change', filterOrders);
    if (dateFilter) dateFilter.addEventListener('change', filterOrders);
}

function filterOrders() {
    const statusFilter = document.getElementById('order-status-filter')?.value;
    const dateFilter = document.getElementById('order-date-filter')?.value;
    const userData = getUserData();
    
    let filteredOrders = [...(userData.orders || [])];

    if (statusFilter && statusFilter !== 'tutti') {
        filteredOrders = filteredOrders.filter(order => order.status === statusFilter);
    }

    if (dateFilter && dateFilter !== 'tutti') {
        const daysAgo = parseInt(dateFilter);
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - daysAgo);
        filteredOrders = filteredOrders.filter(order => new Date(order.date) >= cutoffDate);
    }

    renderOrders(filteredOrders);
}

function renderOrders(orders) {
    const container = document.getElementById('orders-list');
    const emptyState = document.getElementById('no-orders');

    if (!container) return;

    if (!orders || orders.length === 0) {
        container.style.display = 'none';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    container.style.display = 'flex';
    if (emptyState) emptyState.style.display = 'none';

    orders.sort((a, b) => new Date(b.date) - new Date(a.date));

    container.innerHTML = orders.map(order => `
        <div class="order-card" data-id="${order.id}">
            <div class="order-header">
                <div class="order-info">
                    <div class="order-info-item">
                        <span>Ordine</span>
                        <span>${order.id}</span>
                    </div>
                    <div class="order-info-item">
                        <span>Data</span>
                        <span>${formatDate(order.date)}</span>
                    </div>
                    <div class="order-info-item">
                        <span>Totale</span>
                        <span>€ ${order.total.toFixed(2)}</span>
                    </div>
                </div>
                <span class="order-status ${order.status}">
                    <i class="ri-${getStatusIcon(order.status)}"></i>
                    ${getStatusLabel(order.status)}
                </span>
            </div>
            <div class="order-products">
                ${order.products.map(product => `
                    <img src="${product.image}" alt="${product.name}" class="order-product-thumb" 
                         title="${product.name}" onerror="this.src='https://via.placeholder.com/70x70/eee/999?text=Img'">
                `).join('')}
            </div>
            <div class="order-footer">
                <div class="order-total">Totale: <span>€ ${order.total.toFixed(2)}</span></div>
                <div class="order-actions">
                    <button class="btn-view-order" onclick="viewOrderDetail('${order.id}')">
                        <i class="ri-eye-line"></i> Dettagli
                    </button>
                    ${order.status === 'consegnato' ? `
                        <button class="btn-reorder" onclick="reorder('${order.id}')">
                            <i class="ri-refresh-line"></i> Riordina
                        </button>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' });
}

function getStatusIcon(status) {
    const icons = { 'in-elaborazione': 'time-line', 'spedito': 'truck-line', 'consegnato': 'checkbox-circle-line', 'annullato': 'close-circle-line' };
    return icons[status] || 'information-line';
}

function getStatusLabel(status) {
    const labels = { 'in-elaborazione': 'In Elaborazione', 'spedito': 'Spedito', 'consegnato': 'Consegnato', 'annullato': 'Annullato' };
    return labels[status] || status;
}

function viewOrderDetail(orderId) {
    const userData = getUserData();
    const order = userData.orders.find(o => o.id === orderId);

    if (!order) {
        showToast('error', 'Errore', 'Ordine non trovato');
        return;
    }

    const modal = document.getElementById('order-detail-modal');
    const content = document.getElementById('order-detail-content');
    const orderIdSpan = document.getElementById('order-detail-id');

    if (!modal || !content) return;

    if (orderIdSpan) orderIdSpan.textContent = order.id;

    content.innerHTML = `
        <div style="display: flex; justify-content: space-between; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #eee;">
            <span class="order-status ${order.status}">
                <i class="ri-${getStatusIcon(order.status)}"></i> ${getStatusLabel(order.status)}
            </span>
            <div>
                <p><strong>Data:</strong> ${formatDate(order.date)}</p>
                ${order.trackingNumber ? `<p><strong>Tracking:</strong> ${order.trackingNumber}</p>` : ''}
            </div>
        </div>

        <div style="margin-bottom: 20px;">
            <h3 style="margin-bottom: 10px;"><i class="ri-map-pin-line"></i> Indirizzo di Spedizione</h3>
            <p>${order.shippingAddress}</p>
        </div>

        <div style="margin-bottom: 20px;">
            <h3 style="margin-bottom: 15px;"><i class="ri-shopping-bag-line"></i> Prodotti</h3>
            ${order.products.map(product => `
                <div style="display: flex; align-items: center; gap: 15px; padding: 10px; background: #f8f9fa; border-radius: 8px; margin-bottom: 10px;">
                    <img src="${product.image}" alt="${product.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 6px;" 
                         onerror="this.src='https://via.placeholder.com/60x60/eee/999?text=Img'">
                    <div style="flex: 1;">
                        <h4 style="margin: 0;">${product.name}</h4>
                        <p style="margin: 5px 0 0; color: #666;">Qtà: ${product.quantity}</p>
                    </div>
                    <strong style="color: #6643b5;">€ ${product.price.toFixed(2)}</strong>
                </div>
            `).join('')}
        </div>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span>Subtotale</span>
                <span>€ ${(order.total - 5).toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span>Spedizione</span>
                <span>€ 5.00</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding-top: 10px; border-top: 2px solid #ddd; font-weight: bold; font-size: 1.1rem;">
                <span>Totale</span>
                <span style="color: #6643b5;">€ ${order.total.toFixed(2)}</span>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function reorder(orderId) {
    const userData = getUserData();
    const order = userData.orders.find(o => o.id === orderId);

    if (!order) {
        showToast('error', 'Errore', 'Ordine non trovato');
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    order.products.forEach(product => {
        const existingItem = cart.find(item => item.name === product.name);
        if (existingItem) {
            existingItem.quantity += product.quantity;
        } else {
            cart.push({ ...product });
        }
    });

    localStorage.setItem('cart', JSON.stringify(cart));
    showToast('success', 'Prodotti aggiunti', 'I prodotti sono stati aggiunti al carrello');
}

// ==================== //
// SECURITY SECTION     //
// ==================== //

function initSecuritySection() {
    initPasswordChange();
    initPasswordToggle();
    initPasswordValidation();
    initTwoFactor();
    initLogoutAllDevices();
    initDeleteAccount();
}

function initPasswordChange() {
    const form = document.getElementById('change-password-form');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const newPassword = document.getElementById('new-password')?.value;
            const confirmPassword = document.getElementById('confirm-password')?.value;

            if (newPassword !== confirmPassword) {
                showToast('error', 'Errore', 'Le password non coincidono');
                return;
            }

            if (!isPasswordValid(newPassword)) {
                showToast('error', 'Errore', 'La password non soddisfa i requisiti minimi');
                return;
            }

            const userData = getUserData();
            userData.security.lastPasswordChange = new Date().toISOString().split('T')[0];
            saveUserData(userData);

            const lastChange = document.getElementById('last-password-change');
            if (lastChange) lastChange.textContent = new Date().toLocaleDateString('it-IT');

            form.reset();
            resetPasswordRequirements();
            showToast('success', 'Password cambiata', 'La tua password è stata aggiornata');
        });
    }
}

function initPasswordToggle() {
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', function() {
            const input = document.getElementById(this.dataset.target);
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.className = 'ri-eye-off-line';
            } else {
                input.type = 'password';
                icon.className = 'ri-eye-line';
            }
        });
    });
}

function initPasswordValidation() {
    const newPassword = document.getElementById('new-password');
    
    if (newPassword) {
        newPassword.addEventListener('input', function() {
            validatePasswordRequirements(this.value);
            updatePasswordStrength(this.value);
        });
    }
}

function validatePasswordRequirements(password) {
    const requirements = {
        'req-length': password.length >= 8,
        'req-uppercase': /[A-Z]/.test(password),
        'req-lowercase': /[a-z]/.test(password),
        'req-number': /[0-9]/.test(password),
        'req-special': /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };

    for (const [id, valid] of Object.entries(requirements)) {
        const el = document.getElementById(id);
        if (el) {
            const icon = el.querySelector('i');
            el.classList.toggle('valid', valid);
            if (icon) icon.className = valid ? 'ri-check-line' : 'ri-close-line';
        }
    }
}

function updatePasswordStrength(password) {
    const indicator = document.getElementById('password-strength');
    if (!indicator) return;

    const text = indicator.querySelector('.strength-text');
    let strength = 0;

    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    indicator.className = 'password-strength';
    
    if (password.length === 0) {
        text.textContent = '';
    } else if (strength <= 2) {
        indicator.classList.add('weak');
        text.textContent = 'Debole';
    } else if (strength <= 3) {
        indicator.classList.add('fair');
        text.textContent = 'Discreta';
    } else if (strength <= 4) {
        indicator.classList.add('good');
        text.textContent = 'Buona';
    } else {
        indicator.classList.add('strong');
        text.textContent = 'Forte';
    }
}

function isPasswordValid(password) {
    return password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password);
}

function resetPasswordRequirements() {
    ['req-length', 'req-uppercase', 'req-lowercase', 'req-number', 'req-special'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.classList.remove('valid');
            const icon = el.querySelector('i');
            if (icon) icon.className = 'ri-close-line';
        }
    });

    const indicator = document.getElementById('password-strength');
    if (indicator) {
        indicator.className = 'password-strength';
        const text = indicator.querySelector('.strength-text');
        if (text) text.textContent = '';
    }
}

function initTwoFactor() {
    const toggle = document.getElementById('toggle-2fa');
    if (toggle) {
        toggle.addEventListener('change', function() {
            const userData = getUserData();
            userData.security.twoFactorEnabled = this.checked;
            saveUserData(userData);
            showToast(this.checked ? 'success' : 'info', this.checked ? '2FA Attivata' : '2FA Disattivata', 
                      this.checked ? 'Autenticazione a due fattori attivata' : 'Autenticazione a due fattori disattivata');
        });
    }
}

function renderSessions(sessions) {
    const container = document.getElementById('sessions-list');
    if (!container) return;

    container.innerHTML = sessions.map(session => `
        <div class="session-item ${session.current ? 'current' : ''}">
            <i class="${session.icon}"></i>
            <div class="session-info">
                <h4>${session.device}</h4>
                <p>${session.location} • ${session.lastActive}</p>
            </div>
            ${session.current ? '<span class="current-badge">Sessione corrente</span>' : 
              `<button class="btn-revoke" onclick="revokeSession(${session.id})">Revoca</button>`}
        </div>
    `).join('');
}

function revokeSession(sessionId) {
    if (!confirm('Disconnettere questa sessione?')) return;
    
    const userData = getUserData();
    userData.security.sessions = userData.security.sessions.filter(s => s.id !== sessionId);
    saveUserData(userData);
    renderSessions(userData.security.sessions);
    showToast('success', 'Sessione revocata', 'Dispositivo disconnesso');
}

function initLogoutAllDevices() {
    const btn = document.getElementById('logout-all-devices');
    if (btn) {
        btn.addEventListener('click', function() {
            if (!confirm('Disconnettere tutti i dispositivi?')) return;
            
            const userData = getUserData();
            userData.security.sessions = userData.security.sessions.filter(s => s.current);
            saveUserData(userData);
            renderSessions(userData.security.sessions);
            showToast('success', 'Fatto', 'Tutti gli altri dispositivi disconnessi');
        });
    }
}

function initDeleteAccount() {
    const deleteBtn = document.getElementById('delete-account-btn');
    const modal = document.getElementById('delete-account-modal');
    const closeBtn = document.getElementById('close-delete-modal');
    const cancelBtn = document.getElementById('cancel-delete');
    const confirmBtn = document.getElementById('confirm-delete');
    const confirmText = document.getElementById('delete-confirm-text');

    if (deleteBtn && modal) {
        deleteBtn.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    [closeBtn, cancelBtn].forEach(btn => {
        if (btn) btn.addEventListener('click', closeDeleteModal);
    });

    if (modal) {
        modal.addEventListener('click', e => { if (e.target === modal) closeDeleteModal(); });
    }

    if (confirmText && confirmBtn) {
        confirmText.addEventListener('input', () => {
            confirmBtn.disabled = confirmText.value !== 'ELIMINA';
        });
    }

    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            localStorage.clear();
            showToast('success', 'Account eliminato', 'Ci mancherai!');
            setTimeout(() => window.location.href = 'index.html', 2000);
        });
    }
}

function closeDeleteModal() {
    const modal = document.getElementById('delete-account-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    const text = document.getElementById('delete-confirm-text');
    const pwd = document.getElementById('delete-confirm-password');
    const btn = document.getElementById('confirm-delete');
    if (text) text.value = '';
    if (pwd) pwd.value = '';
    if (btn) btn.disabled = true;
}

// ==================== //
// PREFERENCES SECTION  //
// ==================== //

function initPreferencesSection() {
    const saveBtn = document.getElementById('save-preferences');
    const downloadBtn = document.getElementById('download-data');

    if (saveBtn) saveBtn.addEventListener('click', savePreferences);
    if (downloadBtn) downloadBtn.addEventListener('click', downloadUserData);

    document.querySelectorAll('input[name="theme"]').forEach(radio => {
        radio.addEventListener('change', () => applyTheme(radio.value));
    });

    const pushToggle = document.getElementById('push-notifications');
    if (pushToggle) {
        pushToggle.addEventListener('change', function() {
            if (this.checked && 'Notification' in window) {
                Notification.requestPermission().then(perm => {
                    if (perm !== 'granted') {
                        this.checked = false;
                        showToast('warning', 'Permesso negato', 'Notifiche non attivate');
                    }
                });
            }
        });
    }
}

function savePreferences() {
    const userData = getUserData();
    
    userData.preferences = {
        emailPromo: document.getElementById('email-promo')?.checked || false,
        orderNotifications: document.getElementById('order-notifications')?.checked || false,
        newsletter: document.getElementById('newsletter')?.checked || false,
        pushNotifications: document.getElementById('push-notifications')?.checked || false,
        language: document.getElementById('language')?.value || 'it',
        currency: document.getElementById('currency')?.value || 'EUR',
        theme: document.querySelector('input[name="theme"]:checked')?.value || 'light',
        searchHistory: document.getElementById('search-history')?.checked || false,
        analyticsCookies: document.getElementById('analytics-cookies')?.checked || false
    };

    saveUserData(userData);
    showToast('success', 'Preferenze salvate', 'Impostazioni aggiornate');
}

function applyTheme(theme) {
    if (theme === 'auto') {
        const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    } else {
        document.documentElement.setAttribute('data-theme', theme);
    }
}

function downloadUserData() {
    const data = getUserData();
    delete data.security;
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `just-marizete-dati-${Date.now()}.json`;
    a.click();
    
    showToast('success', 'Download completato', 'Dati scaricati');
}

// ==================== //
// MODALS               //
// ==================== //

function initModals() {
    const orderModal = document.getElementById('order-detail-modal');
    const closeOrderBtn = document.getElementById('close-order-modal');

    if (closeOrderBtn) {
        closeOrderBtn.addEventListener('click', () => {
            orderModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (orderModal) {
        orderModal.addEventListener('click', e => {
            if (e.target === orderModal) {
                orderModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
            });
            document.body.style.overflow = '';
        }
    });
}

// ==================== //
// TOAST NOTIFICATIONS  //
// ==================== //

function showToast(type, title, message) {
    let container = document.getElementById('toast-container');
    
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const icons = {
        success: 'ri-checkbox-circle-fill',
        error: 'ri-error-warning-fill',
        warning: 'ri-alert-fill',
        info: 'ri-information-fill'
    };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="${icons[type] || icons.info}"></i>
        <div class="toast-content">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">
            <i class="ri-close-line"></i>
        </button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100px)';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// ==================== //
// MOBILE MENU          //
// ==================== //

function menuShow() {
    document.querySelector('.mobile-menu')?.classList.toggle('open');
}