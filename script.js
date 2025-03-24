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




let menuNavItems = document.getElementsByClassName('menu-box');
console.log(menuNavItems)
let pizzaHEIGHT = document.querySelector('#pizza');
let pizzaCustomHEIGHT = document.querySelector('#pizzaCustom');
let fastFoodHEIGHT = document.querySelector('#fastFood');
let sosuriHEIGHT = document.querySelector('#sosuri');
let bauturiHEIGHT = document.querySelector('#băuturi');
let gusturiLaBereHEIGHT = document.querySelector('#gusturiLaBere');


window.addEventListener('scroll',()=>{
    //pizzaHEIGHT.getBoundingClientRect().top+window.scrollY;
    const pizzaHeightRect = pizzaHEIGHT.getBoundingClientRect();
    const pizzaCustomHeightRect = pizzaCustomHEIGHT.getBoundingClientRect();
    const fastFoodRect = fastFoodHEIGHT.getBoundingClientRect();
    const sosuriRect = sosuriHEIGHT.getBoundingClientRect();
    const bauturiRect = bauturiHEIGHT.getBoundingClientRect();
    const gusturiLaBereRect = gusturiLaBereHEIGHT.getBoundingClientRect();

    const pizzaHeightTop = pizzaHeightRect.top + window.scrollY;
    const pizzaHeightBottom = pizzaHeightTop + pizzaHeightRect.height;

    const pizzaCustomHeightTop = pizzaCustomHeightRect.top + window.scrollY;
    const pizzaCustomHeightBottom = pizzaCustomHeightTop + pizzaCustomHeightRect.height;

    const fastFoodHeightTop = fastFoodRect.top + window.scrollY;
    const fastFoodHeightBottom = fastFoodHeightTop + fastFoodRect.height;

    const sosuriRectHeightTop = sosuriRect.top + window.scrollY;
    const sosuriRectHeightBottom = sosuriRectHeightTop + sosuriRect.height;

    const bauturiHeightTop = bauturiRect.top + window.scrollY;
    const bauturiHeightBottom = bauturiHeightTop + bauturiRect.height;

    const gusturiLaBereHeightTop = gusturiLaBereRect.top + window.scrollY;
    const gusturiLaBereBottom = gusturiLaBereHeightTop + gusturiLaBereRect.height;

    if (window.scrollY >= pizzaHeightTop && window.scrollY < pizzaHeightBottom) {
        menuNavItems[0].classList.add('link-over');
        for(let i=0; i<6; i++){
            if(i!==0){
                menuNavItems[i].classList.remove('link-over')
            }
        }
    } else if (window.scrollY >= pizzaCustomHeightTop && window.scrollY < pizzaCustomHeightBottom) {
        menuNavItems[1].classList.add('link-over');
        for(let i=0; i<6; i++){
            if(i!==1){
                menuNavItems[i].classList.remove('link-over')
            }
        }
    } else if (window.scrollY >= fastFoodHeightTop && window.scrollY < fastFoodHeightBottom) {
        menuNavItems[2].classList.add('link-over');
        for(let i=0; i<6; i++){
            if(i!==2){
                menuNavItems[i].classList.remove('link-over')
            }
        }
    } else if (window.scrollY >= sosuriRectHeightTop && window.scrollY <= sosuriRectHeightBottom) {
        menuNavItems[3].classList.add('link-over');
        for(let i=0; i<6; i++){
            if(i!==3){
                menuNavItems[i].classList.remove('link-over')
            }
        }
    } else if (window.scrollY >= bauturiHeightTop && window.scrollY <= bauturiHeightBottom) {
        menuNavItems[4].classList.add('link-over');
        for(let i=0; i<6; i++){
            if(i!==4){
                menuNavItems[i].classList.remove('link-over')
            }
        }
    }else if (window.scrollY >= gusturiLaBereHeightTop && window.scrollY <= gusturiLaBereBottom) {
        menuNavItems[5].classList.add('link-over');
        for(let i=0; i<6; i++){
            if(i!==5){
                menuNavItems[i].classList.remove('link-over')
            }
        }
    }
    
})