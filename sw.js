
self.addEventListener("install", async event => {
  const cache = await caches.open("pwa-assets");
  // it stores all resources on first SW install
  cache.addAll([
    "/", 
    "app.js",
    "index.html",
    "detail.html", 
    "detail2.html", 
    "detail3.html", 
    "detail4.html", 
    "logoblog(1).png"
    ]); 
});
 
self.addEventListener("fetch", event => {
   event.respondWith(
     caches.match(event.request).then(cachedResponse => {
	   // It can update the cache to serve updated content on the next request
         return cachedResponse || fetch(event.request);
     }
   )
  )
});

