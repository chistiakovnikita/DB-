const hamburgerBatton = document.querySelector('.header__hamburger');
const headerMobile = document.querySelector('.header__nav-mobile');
const overlay = document.querySelector('.overlay')

function headerMobileOpen() {
    headerMobile.classList.toggle('header__nav-mobile--active');
    overlay.classList.toggle('overlay--active');
}



hamburgerBatton.addEventListener('click', headerMobileOpen);
overlay.addEventListener('click', headerMobileOpen);
