const CACHE_NAME = 'tithe-calc-v1';
const ASSETS = [
  'index.html',
  '1000034613.jpg'
];

// Install Service Worker and cache the files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Cache and return requests
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
