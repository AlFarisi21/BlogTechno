// Panggil fungsi registerSW() saat halaman dimuat
registerSW();

// Fungsi untuk mendaftarkan Service Worker
async function registerSW() {
  // Periksa apakah browser mendukung API serviceWorker
  if ('serviceWorker' in navigator) {
    try {
      // Coba daftarkan file service worker "sw.js"
      const registration = await navigator.serviceWorker.register("sw.js");       
      
      // Jika berhasil, kamu bisa tambahkan pesan sukses di sini jika perlu
      // showResult("Service Worker registered successfully!");

    } catch (error) {
      // Jika terjadi error saat registrasi, tampilkan pesan error
      showResult("Error while registering: " + error.message);
    }    
  } else {
    // Jika browser tidak mendukung serviceWorker, beri tahu pengguna
    showResult("Service workers API not available");
  }
}; 

// Fungsi untuk menampilkan hasil ke elemen HTML <output>
function showResult(text) {
  // Ambil elemen <output> dari dokumen
  const output = document.querySelector("output");

  // Pastikan elemen <output> ditemukan sebelum mencoba mengubah isinya
  if (output) {
    output.innerHTML = text; // Tampilkan teks ke dalam elemen
  } else {
    console.error("Elemen <output> tidak ditemukan di HTML");
  }
}
