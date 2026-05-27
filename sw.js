const CACHE_NAME = 'tithe-calc-v1';
const ASSETS = [
  'index.html',
  '1779836886275.png',
  'manifest.json'
];

// Install and cache local assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve assets locally for instant or offline loading
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
