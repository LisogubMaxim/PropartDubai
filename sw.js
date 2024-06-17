// const CACHE_NAME = 'ProPart';
// const urlsToCache = [
//   '/',
// ];

// self.addEventListener('install', event => {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(cache => cache.addAll(urlsToCache))
//   );
// });

// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request)
//       .then(response => {
//         // Cache hit - return response
//         if (response) {
//           return response;
//         }

//         // Clone the request
//         const fetchRequest = event.request.clone();

//         // Make network request and cache response
//         return fetch(fetchRequest).then(response => {
//           // Check if we received a valid response
//           if (!response || response.status !== 200 || response.type !== 'basic') {
//             return response;
//           }

//           // Clone the response
//           const responseToCache = response.clone();

//           caches.open(CACHE_NAME)
//             .then(cache => {
//               cache.put(event.request, responseToCache);
//             });

//           return response;
//         });
//       })
//   );
// });
