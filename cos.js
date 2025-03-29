visibileTotal.forEach((total)=>{
    if(localStorage.getItem('totalProducsCost') !== null){
        total.textContent = localStorage.getItem('totalProducsCost');
    } else {
        total.textContent = 0;
    }
})
let cosMainContainer = document.querySelector('.cos-content-left-side');

cosMainContainer.innerHTML = localStorage.getItem('HTMLinjection')
//localStorage.clear();
console.log(localStorage.getItem('totalProducsCost'))
let TOTALPRICE = document.querySelector('.total-de-lei-comanda');
if((localStorage.getItem('totalProducsCost') === 0) && (localStorage.getItem('totalProducsCost') === null)){
    TOTALPRICE.textContent = 0;
}else if (localStorage.getItem('totalProducsCost') > 0){
    TOTALPRICE.textContent = Number(localStorage.getItem('totalProducsCost')) + 30;
}

let cosDelete = document.querySelectorAll('.deleteOption');
let basket = document.querySelector('.basket-number');

cosDelete.forEach((element)=>{
    element.addEventListener('click',()=>{
        let deleteMoneyQuantity = element.parentElement.parentElement.children[1].children[0].children[0].children[0].textContent;
        let provizoriu = localStorage.getItem('totalProducsCost');
        localStorage.setItem('totalProducsCost',(localStorage.getItem('totalProducsCost'))-deleteMoneyQuantity);
        basket.textContent = provizoriu - deleteMoneyQuantity;
        element.parentElement.parentElement.parentElement.remove();
        localStorage.setItem('HTMLinjection',cosMainContainer.innerHTML)

        
        
        
        if((localStorage.getItem('totalProducsCost') == 0) || (localStorage.getItem('totalProducsCost') === null)){
            TOTALPRICE.textContent = 0;
            basket.textContent = 0;
        } else{
            TOTALPRICE.textContent = Number(localStorage.getItem('totalProducsCost')) + 30;
        }
    })
})