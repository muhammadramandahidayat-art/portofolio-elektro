// script.js
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const certModal = document.getElementById('certModal');

// Toggle Mobile Menu
btn.addEventListener('click', () => menu.classList.toggle('hidden'));

document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => menu.classList.add('hidden'));
});

// Modal Functions
function openCertModal() {
    certModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeCertModal() {
    certModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
certModal.addEventListener('click', (e) => {
    if (e.target === certModal) closeCertModal();
});