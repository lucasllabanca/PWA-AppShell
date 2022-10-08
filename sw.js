self.addEventListener('install', () => {
    console.log('[Service Worker] installing service worker');
    self.skipWaiting(); //no need to wait
});

self.addEventListener('activate', () => {
    console.log('[Service Worker] Activating service worker!');
    return self.clients.claim(); //forces all tabs use this solution
});

self.addEventListener('fetch', (event) => {
    console.log('[Service Worker] Fetch event worker', event.request.url);
    event.respondWith(fetch(event.request.url));
});
