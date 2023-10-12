let menu = document.querySelector('.nav-menu');
let menuBtn = document.querySelector('.header-icon');
let menuBtnIcon = document.querySelector('.header-icon i');

menuBtnIcon.addEventListener('click', function () {
    if (menuBtnIcon.classList.contains('fa-bars')) {
        menu.style.left = '0';
        menuBtnIcon.className = 'fa fa-times';
    } else {
        menu.style.left = '-240px'
        menuBtnIcon.className = 'fa fa-bars';
    }
});