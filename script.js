let darkBackground = document.getElementsByClassName('popup-dark-bg');
let menuBurger = document.getElementsByClassName('showMenu');
let menu = document.getElementsByClassName('menu-popup');
let exitMenu = document.getElementsByClassName('closeMenu');


menuBurger[0].addEventListener('click',()=>{
    menu[0].classList.remove('hideMenu');
    menu[0].classList.add('showMenu');
    menu[0].style.display = 'flex';
    darkBackground[0].classList.remove('hide');
    darkBackground[0].classList.add('show');
    darkBackground[0].style.display = 'block';
    document.body.classList.add('stop-scroll');
})
exitMenu[0].addEventListener('click',()=>{
    menu[0].classList.add('hideMenu');
    menu[0].classList.remove('showMenu');
    darkBackground[0].classList.add('hide');
    darkBackground[0].classList.remove('show');
    document.body.classList.remove('stop-scroll');
})