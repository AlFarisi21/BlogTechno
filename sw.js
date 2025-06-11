// Event listener untuk fase instalasi Service Worker
self.addEventListener("install", async event => {
  // Buka (atau buat) cache dengan nama "pwa-assets"
  const cache = await caches.open("pwa-assets");

  // Simpan (cache) semua resource berikut saat service worker pertama kali diinstal
  cache.addAll([
    "/",                  // Halaman utama
    "app.js",             // File JavaScript utama
    "index.html",         // Halaman index
    "detail.html",        // Halaman detail 1
    "detail2.html",       // Halaman detail 2
    "detail3.html",       // Halaman detail 3
    "detail4.html",       // Halaman detail 4
    "logoblog(1).png"     // Gambar/logo yang digunakan
  ]);
});


// Event listener untuk setiap permintaan fetch (misalnya saat user membuka halaman atau memuat file)
self.addEventListener("fetch", event => {
  event.respondWith(
    // Periksa apakah permintaan tersebut ada di cache
    caches.match(event.request).then(cachedResponse => {
      // Jika ada di cache, kembalikan versi cache
      // Jika tidak ada, lakukan fetch ke jaringan (online)
      return cachedResponse || fetch(event.request);
    })
  );
});
