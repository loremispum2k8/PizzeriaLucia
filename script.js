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

    const pizzaHeightTop = pizzaHeightRect.top + window.scrollY - 120;
    const pizzaHeightBottom = pizzaHeightTop + pizzaHeightRect.height;

    const pizzaCustomHeightTop = pizzaCustomHeightRect.top + window.scrollY - 120;
    const pizzaCustomHeightBottom = pizzaCustomHeightTop + pizzaCustomHeightRect.height;

    const fastFoodHeightTop = fastFoodRect.top+ window.scrollY - 120;
    const fastFoodHeightBottom = fastFoodHeightTop + fastFoodRect.height;

    const sosuriRectHeightTop = sosuriRect.top + window.scrollY - 120;
    const sosuriRectHeightBottom = sosuriRectHeightTop + sosuriRect.height;

    const bauturiHeightTop = bauturiRect.top + window.scrollY - 120;
    const bauturiHeightBottom = bauturiHeightTop + bauturiRect.height - 120;

    const gusturiLaBereHeightTop = gusturiLaBereRect.top + window.scrollY - 120;
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
    } else if (window.scrollY >= sosuriRectHeightTop && window.scrollY < sosuriRectHeightBottom) {
        menuNavItems[3].classList.add('link-over');
        for(let i=0; i<6; i++){
            if(i!==3){
                menuNavItems[i].classList.remove('link-over')
            }
        }
    } else if (window.scrollY >= bauturiHeightTop && window.scrollY < bauturiHeightBottom) {
        menuNavItems[4].classList.add('link-over');
        for(let i=0; i<6; i++){
            if(i!==4){
                menuNavItems[i].classList.remove('link-over')
            }
        }
    }else if (window.scrollY >= gusturiLaBereHeightTop && window.scrollY < gusturiLaBereBottom) {
        menuNavItems[5].classList.add('link-over');
        for(let i=0; i<6; i++){
            if(i!==5){
                menuNavItems[i].classList.remove('link-over')
            }
        }
    }
})




let comandaPopUp = document.querySelector('.comanda-popup-container')
let exitComandaPopUp = document.querySelector('.exitComanda');
let adaugaButton = document.querySelectorAll('.addButton');

let titluComanda = document.querySelector('.comanda-title');
let greutateComanda = document.querySelector('.comanda-greutate');
let incredienteComanda = document.querySelector('.comanda-incrediente');
let pretUniversal = document.querySelector('.PRET_UNIVERSAL');
let butonComanda = document.querySelector('.finalAddBtn');
let optiuniContainerComanda = document.querySelector('.optiuni-container');
let quantityComanda = document.querySelector('.CANTITATE_UNIVERSALA');
let optionsCount;

let buttonKey = 0;

let PRICE_OF_ONE;
let QUANTITY = 1;
let INDIVIDUAL_TOTAL_PRICE;

let growQuantity = document.querySelector('.growQuantity')
let lowerQuantity = document.querySelector('.lowerQuantity')

growQuantity.addEventListener('click',()=>{
    QUANTITY++;
    quantityComanda.textContent = QUANTITY;
    if(buttonKey === 1){
        pretUniversal.textContent = INDIVIDUAL_TOTAL_PRICE * QUANTITY;
    }
})
lowerQuantity.addEventListener('click',()=>{
    if( QUANTITY > 1){
        QUANTITY--;
        quantityComanda.textContent = QUANTITY;
        if(buttonKey === 1){
            pretUniversal.textContent = INDIVIDUAL_TOTAL_PRICE * QUANTITY;
        }
    }
})

let newOption;
let newInput;
let newLabel;
let newPrice;
let newLei;


let FINAL_ADD_BUTTON_COMANDA = document.querySelector('.finalAddBtn')

adaugaButton.forEach((button)=>{
    button.addEventListener('click',()=>{
        let titluComandaCONTENT = button.parentElement.children[0].children[0].textContent;
        let greutateComandaCONTENT =  button.parentElement.children[0].children[1].textContent;
        let incredienteComandaCONTENT = button.parentElement.children[0].children[2].textContent
        optionsCount = button.parentElement.children[1].children.length;
        for(let i=0;i<optionsCount;i++){
            let optionSizeComandaCONTENT = button.parentElement.children[1].children[i].children[0].textContent.split('').slice(0,-1).join('').toLowerCase();
            let optionPriceComandaCONTENT = button.parentElement.children[1].children[i].children[1].textContent.split('').slice(0,-4).join('').toLocaleLowerCase();

            newOption = document.createElement('div'); newOption.classList.add('optiune');
            newInput = document.createElement('input'); newInput.setAttribute('type','radio'); newInput.setAttribute('id',optionSizeComandaCONTENT); newInput.setAttribute('name','optiune'); newInput.classList.add('detectorForQuery')
            newLabel = document.createElement('label'); newLabel.setAttribute('for', optionSizeComandaCONTENT); newLabel.textContent = button.parentElement.children[1].children[i].children[0].textContent;
            newPrice = document.createElement('p'); newPrice.classList.add('pret'); newPrice.textContent = optionPriceComandaCONTENT
            newLei = document.createElement('p'); newLei.classList.add('comanda-lei'); newLei.textContent = 'lei';
            newOption.appendChild(newInput);
            newOption.appendChild(newLabel);
            newOption.appendChild(newPrice);
            newOption.appendChild(newLei);

            optiuniContainerComanda.appendChild(newOption);
        }

        let possibleOptions = document.querySelectorAll('.detectorForQuery');
        possibleOptions.forEach((option)=>{
            option.addEventListener('click',()=>{
                buttonKey = 1;
                FINAL_ADD_BUTTON_COMANDA.classList.add('comanda-submit-button-active')
                FINAL_ADD_BUTTON_COMANDA.classList.remove('comanda-submit-button-inactive')
                INDIVIDUAL_TOTAL_PRICE = option.parentElement.children[2].textContent;
                QUANTITY =  quantityComanda.textContent;
                console.log(INDIVIDUAL_TOTAL_PRICE);
                console.log(QUANTITY)
                pretUniversal.textContent = INDIVIDUAL_TOTAL_PRICE * QUANTITY;
            })
        })

        titluComanda.textContent = titluComandaCONTENT;
        greutateComanda.textContent = greutateComandaCONTENT;
        incredienteComanda.textContent = incredienteComandaCONTENT;

        comandaPopUp.style.display='flex';
        comandaPopUp.classList.remove('HIDE_COMANDA');
        comandaPopUp.classList.add('SHOW_COMANDA');
        document.body.classList.add('stop-scroll');
    })
})

exitComandaPopUp.addEventListener('click',()=>{
    comandaPopUp.classList.remove('SHOW_COMANDA');
    comandaPopUp.classList.add('HIDE_COMANDA');
    document.body.classList.remove('stop-scroll');
    optiuniContainerComanda.innerHTML='';
    QUANTITY = 1;
    quantityComanda.textContent = QUANTITY;
    FINAL_ADD_BUTTON_COMANDA.classList.add('comanda-submit-button-inactive')
    FINAL_ADD_BUTTON_COMANDA.classList.remove('comanda-submit-button-active');
    QUANTITY = 0;
    INDIVIDUAL_TOTAL_PRICE = 0;
    pretUniversal.textContent = 0;
})