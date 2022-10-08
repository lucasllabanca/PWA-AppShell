self.addEventListener('install', () => {
    console.log('[Service Worker] installing service worker...');
    self.skipWaiting();
});
