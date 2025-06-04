// Service Worker for Video Caching and Performance Optimization
const CACHE_VERSION = '1.3'; // Update this when deploying new versions
const CACHE_NAME = `pfsg-static-cache-v${CACHE_VERSION}`;
const VIDEO_CACHE_NAME = `pfsg-video-files-v${CACHE_VERSION}`;

// Resources to cache immediately
const STATIC_RESOURCES = [
  '/images/hero-bg.jpg',
  '/images/logo_pfsg.png'
];

// Install event - cache static resources
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_RESOURCES))
      .then(() => {
        console.log('Service Worker installed');
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Delete any cache that doesn't match current version
            if (!cacheName.includes(CACHE_VERSION)) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Old caches cleared');
        return self.clients.claim();
      })
  );
});

// Fetch event - simple network-first for HTML, cache-first for assets
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Network-first for HTML pages to get fresh content
  if (event.request.headers.get('accept')?.includes('text/html') ||
      event.request.url.endsWith('.html') ||
      event.request.url.endsWith('/')) {

    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Handle video requests with caching
  if (event.request.url.includes('background-video.mp4')) {
    event.respondWith(
      caches.open(VIDEO_CACHE_NAME)
        .then((cache) => {
          return cache.match(event.request)
            .then((cachedResponse) => {
              if (cachedResponse) {
                return cachedResponse;
              }

              return fetch(event.request)
                .then((response) => {
                  if (response.status === 200) {
                    cache.put(event.request, response.clone());
                  }
                  return response;
                })
                .catch(() => new Response('', { status: 200 }));
            });
        })
    );
    return;
  }

  // Cache-first for static assets
  if (event.request.url.includes('/images/') ||
      event.request.url.includes('/assets/') ||
      event.request.url.endsWith('.css') ||
      event.request.url.endsWith('.js')) {

    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          return fetch(event.request)
            .then((response) => {
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseClone);
              });
              return response;
            });
        })
    );
    return;
  }

  // Default: just fetch
  event.respondWith(fetch(event.request));
});

// Handle messages from the main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PRELOAD_VIDEO') {
    caches.open(VIDEO_CACHE_NAME)
      .then((cache) => {
        return cache.add('/images/background-video.mp4');
      })
      .then(() => {
        event.ports[0].postMessage({ success: true });
      })
      .catch((error) => {
        event.ports[0].postMessage({ success: false, error });
      });
  }
});
