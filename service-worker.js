// Disabled service worker – passes everything through to the network

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
