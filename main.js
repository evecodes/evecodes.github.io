const hamburgerMenu = document.querySelector(".hamburger-menu")
const navToggle = document.querySelector(".menu-parts");
const stripHorz = document.querySelector(".hamburger-stripe");

hamburgerMenu.addEventListener('click', e => {
    navToggle.classList.toggle('menu-active');
    stripHorz.classList.toggle('stripe-active');
    stripHorz.classList.toggle('hamburger-stripe');
});