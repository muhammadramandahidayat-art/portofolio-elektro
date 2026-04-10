// script.js
document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('typing-name');
    const descElement = document.getElementById('fade-desc');
    const nameText = "Muhammad Ramanda Hidayat";
    let index = 0;

    // Paksa elemen nama terlihat (tapi kosong)
    nameElement.style.opacity = "1";
    nameElement.innerHTML = "";

    function typeEffect() {
        if (index < nameText.length) {
            nameElement.innerHTML += nameText.charAt(index);
            nameElement.classList.add('typing-cursor');
            index++;
            setTimeout(typeEffect, 100); 
        } else {
            nameElement.classList.remove('typing-cursor');
            // Munculkan deskripsi setelah nama selesai diketik
            descElement.classList.add('fade-in-up');
        }
    }

    // Mulai animasi
    setTimeout(typeEffect, 500);

    // --- LOGIKA MENU & MODAL ---
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    const certModal = document.getElementById('certModal');

    btn.onclick = () => menu.classList.toggle('hidden');
    
    window.openCertModal = () => {
        certModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    window.closeCertModal = () => {
        certModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    certModal.onclick = (e) => {
        if (e.target === certModal) closeCertModal();
    };
});