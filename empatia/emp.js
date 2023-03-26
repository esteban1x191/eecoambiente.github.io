const menuBtn = document.querySelector('.hamburguer');
const mobileMenu = document.querySelector('.mobile-menu');
mobileMenu.classList.toggle('show');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});
