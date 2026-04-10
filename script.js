// script.js

document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('typing-name');
    const descElement = document.getElementById('fade-desc');
    const nameText = "Muhammad Ramanda Hidayat";
    let index = 0;

    // 1. Pastikan opacity diatur ke 1 saat animasi mulai
    nameElement.style.opacity = "1";

    function typeEffect() {
        if (index < nameText.length) {
            // Mengisi teks satu per satu
            nameElement.innerHTML += nameText.charAt(index);
            nameElement.classList.add('typing-cursor');
            index++;
            setTimeout(typeEffect, 100); 
        } else {
            nameElement.classList.remove('typing-cursor');
            // 2. Munculkan deskripsi
            descElement.classList.add('fade-in-up');
            descElement.style.opacity = "1"; // Paksa muncul
        }
    }

    // Kosongkan teks bawaan HTML dulu supaya tidak tumpang tindih
    nameElement.innerHTML = "";
    
    // Jalankan efek
    setTimeout(typeEffect, 500);

    // --- LOGIKA MENU & MODAL (Tetap sama) ---
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
});