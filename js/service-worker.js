const CACHE_NAME = 'portfolio-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(() => console.log('Service Worker registrado com sucesso!'))
        .catch(error => console.log('Erro ao registrar o Service Worker:', error));
}