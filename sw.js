const staticCache = 'app-shell-v1';

const assetsToCache = ['offline.html'];

async function cacheStaticAssets() {
    const cache = await caches.open(staticCache);
    return cache.addAll(assetsToCache);
}

self.addEventListener('install', (event) => {
    console.log('[Service Worker] installing service worker');
    event.waitUntil(cacheStaticAssets());
    self.skipWaiting(); //no need to wait on close open tabs
});

self.addEventListener('activate', () => {
    console.log('[Service Worker] Activating service worker!');
    return self.clients.claim(); //forces all tabs use this solution
});

self.addEventListener('fetch', (event) => {
    console.log('[Service Worker] Fetch event worker', event.request.url);
    event.respondWith(fetch(event.request.url));
});
