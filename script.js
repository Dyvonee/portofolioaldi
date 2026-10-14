// 1. Efek Mouse Parallax 3D di Hero Section
document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;
    const layers = document.querySelectorAll(".layer");

    layers.forEach(layer => {
        const speed = layer.getAttribute("data-speed");
        layer.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px) rotateX(${y}deg) rotateY(${-x}deg)`;
    });
});

// 2. Efek 3D Tilt Universal untuk Semua Kartu (.tilt-card)
const cards = document.querySelectorAll(".tilt-card");

cards.forEach(card => {
    const cardContent = card.querySelector(".card-content");

    // Efek saat kursor bergerak di atas elemen
    card.addEventListener("mousemove", (e) => {
        const cardRect = card.getBoundingClientRect();
        
        const cardWidth = cardRect.width;
        const cardHeight = cardRect.height;
        const centerX = cardRect.left + cardWidth / 2;
        const centerY = cardRect.top + cardHeight / 2;
        
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        // Derajat kemiringan (Bisa diubah, 20 untuk proyek kecil, 10 untuk kartu lebar seperti About)
        let tiltFactor = cardWidth > 500 ? 10 : 20; 
        
        const rotateX = (mouseY / (cardHeight / 2)) * -tiltFactor;
        const rotateY = (mouseX / (cardWidth / 2)) * tiltFactor;

        cardContent.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        cardContent.style.boxShadow = `${-mouseX / 5}px ${-mouseY / 5}px 30px rgba(0, 255, 136, 0.2)`;
    });

    // Mengembalikan ke posisi semula saat kursor keluar
    card.addEventListener("mouseleave", () => {
        cardContent.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
        cardContent.style.transition = "transform 0.5s ease, box-shadow 0.5s ease";
        cardContent.style.boxShadow = "0 20px 40px rgba(0,0,0,0.5)";
    });

    // Hapus transisi pelan saat mouse mulai masuk (agar responsif)
    card.addEventListener("mouseenter", () => {
        cardContent.style.transition = "none";
    });
});