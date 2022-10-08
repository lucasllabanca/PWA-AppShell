self.addEventListener('install', () => {
    console.log('[Service Worker] installing service worker');
    self.skipWaiting(); //no need to wait
});

self.addEventListener('activate', () => {
    console.log('[Service Worker] Activating service worker!');
    return self.clients.claim(); //forces all tabs use this solution
});
