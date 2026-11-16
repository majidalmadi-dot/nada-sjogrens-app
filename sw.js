const CACHE = 'nada-sjogrens-v1'; // bump on every release
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).catch(() => {}));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (r.mode === 'navigate') {
    e.respondWith(fetch(r).catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(r).then((c) => c || fetch(r).catch(() => c)));
});
