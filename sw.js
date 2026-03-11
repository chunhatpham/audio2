self.addEventListener('install', (e) => {
    console.log('[Service Worker] Đã cài đặt');
});

self.addEventListener('fetch', (e) => {
    // Để trống để pass điều kiện PWA
});
