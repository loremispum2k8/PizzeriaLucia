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
let visibileTotal = document.querySelectorAll('.basket-number');
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
let newImage;

let FINAL_ADD_BUTTON_COMANDA = document.querySelector('.finalAddBtn');


let titluComandaCONTENT
let greutateComandaCONTENT 
let incredienteComandaCONTENT
let sizeCONTENT;

adaugaButton.forEach((button)=>{
    button.addEventListener('click',()=>{
        titluComandaCONTENT = button.parentElement.children[0].children[0].textContent;
        greutateComandaCONTENT =  button.parentElement.children[0].children[1].textContent;
        incredienteComandaCONTENT = button.parentElement.children[0].children[2].textContent;
        //COS IMAGE
        newImage = button.parentElement.parentElement.children[0].getAttribute('src');
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
                pretUniversal.textContent = INDIVIDUAL_TOTAL_PRICE * QUANTITY;
                sizeCONTENT = option.parentElement.children[1].textContent;
                console.log(sizeCONTENT)
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




//ADD //ADD //ADD 
if(localStorage.getItem('totalProducsCost') === null){
    localStorage.setItem('HTMLinjection', '');
}
butonComanda.addEventListener('click',()=>{
    if(buttonKey === 1){

        //PRICE
        const pastTotalPrice = Number(localStorage.getItem('totalProducsCost'));
        console.log('Price: ',Number(INDIVIDUAL_TOTAL_PRICE));
        console.log('Quantity', Number(QUANTITY));
        console.log('Individual total: ',Number(INDIVIDUAL_TOTAL_PRICE) * Number(QUANTITY))
        console.log('Past: ',pastTotalPrice)
        console.log('New: ',Number(INDIVIDUAL_TOTAL_PRICE) * Number(QUANTITY) + pastTotalPrice)
        localStorage.setItem('totalProducsCost', Number(INDIVIDUAL_TOTAL_PRICE) * Number(QUANTITY) + pastTotalPrice);
        visibileTotal.forEach((total)=>{
            total.textContent = localStorage.getItem('totalProducsCost')
        })

                //INJECTION

                function createOption(){
                    let outerHtmlContainer = document.createElement('div');
                    
                    let optionContainer = document.createElement('div'); optionContainer.classList.add('cos-option');
                    let optionImage = document.createElement('img'); optionImage.classList.add('cos-image'); optionImage.setAttribute('alt', 'imagine produs'); optionImage.setAttribute('src',newImage); optionContainer.appendChild(optionImage);
                    if(optionImage.getAttribute('src').includes('bauturiMici')){
                        optionImage.classList.add('cos-drink-image')
                    }
                    if(optionImage.getAttribute('src').includes('gustăriLaBere')){
                        optionImage.classList.add('cos-drink-image')
                    }

                    let optionRightContainer = document.createElement('div'); optionRightContainer.classList.add('cos-option-right-container'); optionContainer.appendChild(optionRightContainer);
                    
                    let optionTop = document.createElement('div'); optionTop.classList.add('cos-option-top'); optionRightContainer.appendChild(optionTop);
                    let optionText = document.createElement('div'); optionText.classList.add('cos-option-text'); optionTop.appendChild(optionText);
                    let optionTitle = document.createElement('div'); optionTitle.classList.add('cos-option-title'); optionTitle.textContent = titluComandaCONTENT; optionText.appendChild(optionTitle);
                    let optionWrapper = document.createElement('p'); optionWrapper.classList.add('cos-wrapper'); optionText.appendChild(optionWrapper);
                    //let wrapperSpan = document.createElement('span'); wrapperSpan.classList.add('cos-greutate'); /***/ optionWrapper.appendChild(wrapperSpan);
                    //let lineSpan = document.createElement('span'); lineSpan.textContent = ' - '; optionWrapper.appendChild(lineSpan);
                    let optionSize = document.createElement('span'); optionSize.classList.add('cos-size');  optionSize.textContent = sizeCONTENT; optionWrapper.appendChild(optionSize);
                    let optionSvg = document.createElement('svg'); optionSvg.classList.add('deleteOption'); optionSvg.setAttribute('xmlns','http://www.w3.org/2000/svg'); optionSvg.setAttribute('width','24'); optionSvg.setAttribute('height','24'); optionSvg.setAttribute('viewBox','0 0 24 24'); optionTop.appendChild(optionSvg)
                    let SvgPath = document.createElement('path'); SvgPath.setAttribute('fill','none'); SvgPath.setAttribute('fill','none'); SvgPath.setAttribute('stroke','currentColor'); SvgPath.setAttribute('stroke-linecap','round'); SvgPath.setAttribute('stroke-linejoin','round'); SvgPath.setAttribute('stroke-width','2'); SvgPath.setAttribute('d','m7 7l10 10M7 17L17 7'); optionSvg.appendChild(SvgPath)
                    
                    let optionBottom = document.createElement('div'); optionBottom.classList.add('cos-option-bottom'); optionRightContainer.appendChild(optionBottom);
                    let cosOptionDown = document.createElement('div'); cosOptionDown.classList.add('cos-option-down'); optionBottom.appendChild(cosOptionDown);
                    let cosLeiContainer = document.createElement('div'); cosLeiContainer.classList.add('cos-lei-container'); cosOptionDown.appendChild(cosLeiContainer);
                    let COS_INDIVIDUAL_PRICE = document.createElement('h2'); COS_INDIVIDUAL_PRICE.classList.add('COS-INDIVIDUAL-PRICE'); COS_INDIVIDUAL_PRICE.textContent = String(Number(INDIVIDUAL_TOTAL_PRICE) * Number(QUANTITY)); cosLeiContainer.appendChild(COS_INDIVIDUAL_PRICE);
                    let lei = document.createElement('h2'); lei.classList.add('lei'); lei.textContent = 'lei'; cosLeiContainer.appendChild(lei);
        
                    let cos_quantiy_Container = document.createElement('div'); cos_quantiy_Container.classList.add('cos-quantiy-Container'); optionBottom.appendChild(cos_quantiy_Container);
                    //let svgLowerDiv = document.createElement('div'); svgLowerDiv.classList.add('svg-class'); svgLowerDiv.classList.add('cosLowerQuantity'); cos_quantiy_Container.appendChild(svgLowerDiv);
                    //let svgLow = document.createElement('svg'); svgLow.setAttribute('xmlns','http://www.w3.org/2000/svg'); svgLow.setAttribute('width','20'); svgLow.setAttribute('height','20'); svgLow.setAttribute('viewBox','0 0 24 24'); svgLowerDiv.appendChild(svgLow);
                    //let svgLowPATH = document.createElement('path'); svgLowPATH.setAttribute('fill','currentColor'); svgLowPATH.setAttribute('d','M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2'); svgLow.appendChild(svgLowPATH);
                    let CANTITATE_UNIVERSALA = document.createElement('p'); CANTITATE_UNIVERSALA.classList.add('CANTITATE_UNIVERSALA'); CANTITATE_UNIVERSALA.textContent = QUANTITY; cos_quantiy_Container.appendChild(CANTITATE_UNIVERSALA);
                    //let svgGrowDiv = document.createElement('div'); svgGrowDiv.classList.add('svg-class'); svgGrowDiv.classList.add('cosGrowQuantity'); cos_quantiy_Container.appendChild(svgGrowDiv);
                    //let svgGrow = document.createElement('svg'); svgGrow.setAttribute('xmlns','http://www.w3.org/2000/svg'); svgGrow.setAttribute('width','20'); svgGrow.setAttribute('height','20'); svgGrow.setAttribute('viewBox','0 0 24 24'); svgGrowDiv.appendChild(svgGrow);
                    //let svgGrowPATH = document.createElement('path'); svgGrowPATH.setAttribute('fill','currentColor'); svgGrowPATH.setAttribute('d','M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2'); svgGrow.appendChild(svgGrowPATH)
                    
                    outerHtmlContainer.appendChild(optionContainer)
                    return  outerHtmlContainer.innerHTML;
                }
        
                if(localStorage.getItem('totalProducsCost') === null){
                    localStorage.setItem('HTMLinjection', '');
                } else {
                    localStorage.setItem('HTMLinjection', (localStorage.getItem('HTMLinjection') + createOption()));
                }
                
                console.log(localStorage.getItem('HTMLinjection'))
        
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
    }
})
visibileTotal.forEach((total)=>{
    if(localStorage.getItem('totalProducsCost') !== null){
        total.textContent = localStorage.getItem('totalProducsCost');
    } else {
        total.textContent = 0;
    }
})

//ADD //ADD //ADD 
                                //localStorage.clear();