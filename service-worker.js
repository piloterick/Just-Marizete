const CACHE_NAME = 'just-marizete-v1';

// ✅ Usa solo i file che esistono davvero
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './products-data.js',
    './manifest.json',
    './sources/images/icons/icon-192x192.png',
    './sources/images/icons/icon-512x512.png'
];

// Installazione
self.addEventListener('install', event => {
    console.log('📦 Service Worker: Installazione...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('📦 Service Worker: Caching files...');
                // ✅ Usa addAll con catch per evitare errori
                return cache.addAll(ASSETS_TO_CACHE).catch(err => {
                    console.log('⚠️ Alcuni file non trovati:', err);
                });
            })
            .then(() => self.skipWaiting())
    );
});

// Attivazione
self.addEventListener('activate', event => {
    console.log('✅ Service Worker: Attivato!');
    
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('🗑️ Eliminando vecchia cache:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Fetch
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return fetch(event.request);
            })
            .catch(() => {
                return caches.match('./index.html');
            })
    );
});