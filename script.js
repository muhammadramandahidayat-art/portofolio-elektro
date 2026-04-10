// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Elemen untuk Animasi
    const nameElement = document.getElementById('typing-name');
    const descElement = document.getElementById('fade-desc');
    const nameText = "Muhammad Ramanda Hidayat";
    let index = 0;

    // 2. Elemen untuk Navigasi & Modal
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    const certModal = document.getElementById('certModal');

    // --- FUNGSI ANIMASI MENGETIK ---
    function typeEffect() {
        if (index < nameText.length) {
            nameElement.innerHTML += nameText.charAt(index);
            nameElement.classList.add('typing-cursor');
            index++;
            setTimeout(typeEffect, 100); 
        } else {
            nameElement.classList.remove('typing-cursor');
            descElement.classList.add('fade-in-up');
        }
    }

    // Jalankan efek mengetik setelah 500ms
    setTimeout(typeEffect, 500);

    // --- LOGIKA MOBILE MENU ---
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => menu.classList.add('hidden'));
    });

    // --- LOGIKA MODAL ---
    // Note: Fungsi open dan close didefinisikan secara global agar bisa dipanggil dari atribut onclick di HTML
    window.openCertModal = function() {
        certModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    window.closeCertModal = function() {
        certModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    // Tutup modal jika klik di luar area gambar
    certModal.addEventListener('click', (e) => {
        if (e.target === certModal) closeCertModal();
    });
});