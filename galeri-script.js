// Mengambil elemen HTML
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

// Loop untuk setiap item galeri
galleryItems.forEach(item => {
    item.addEventListener("click", () => {
        // Ambil gambar dan teks dari item yang diklik
        const img = item.querySelector("img");
        const caption = item.querySelector(".overlay span").textContent;
        
        // Tampilkan lightbox
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
        captionText.textContent = caption;
    });
});

// Fungsi untuk menutup lightbox saat tombol X diklik
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Fungsi untuk menutup lightbox saat area kosong di luar foto diklik
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});