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



let normalNavigationBar = document.querySelector('.page-navigation-desktop');
let transparentNavigationBar = document.querySelector('.whitenav');

window.addEventListener('scroll',()=>{
    if(window.innerWidth >= 1100){
        if(window.scrollY > 0){
            transparentNavigationBar.classList.add('HIDE_NAV');
            transparentNavigationBar.classList.remove('SHOW_NAV');
            normalNavigationBar.classList.add('SHOW_NAV');
            transparentNavigationBar.style.display = 'none';
            normalNavigationBar.style.display = 'flex';
            normalNavigationBar.classList.remove('HIDE_NAV');
        } else {
            normalNavigationBar.classList.remove('SHOW_NAV');
            normalNavigationBar.classList.add('HIDE_NAV');
            normalNavigationBar.style.display = 'none';
            transparentNavigationBar.classList.add('SHOW_NAV');
            transparentNavigationBar.classList.remove('HIDE_NAV');
            transparentNavigationBar.style.display = 'flex';
        }
    }
})



let headerDots = document.getElementsByClassName('dot');
let headerOption = document.getElementsByClassName('header-option');


for(let i = 0; i<headerDots.length; i++){
    headerDots[i].addEventListener('click',()=>{

        console.log(i)
        if(!(headerDots[i].classList.contains('bigDot'))){
            headerDots[i].classList.add('bigDot');
            headerOption[i].classList.remove('hide-option')
            headerOption[i].classList.add('SHOW_HEADER');
            headerOption[i].classList.remove('HIDE_HEADER');
            headerOption[i].style.display = 'flex';

            for(let j = 0; j<headerDots.length; j++){
                if(j !== i){
                    headerDots[j].classList.remove('bigDot');
                    headerOption[j].classList.remove('SHOW_HEADER');
                    headerOption[j].classList.add('HIDE_HEADER');
                    headerOption[j].style.display = 'none';
                    headerOption[j].classList.add('hide-option')
                }
            }
        }
    })
}