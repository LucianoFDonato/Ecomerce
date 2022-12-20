// Cambio de cantidad de articulos ingresado por el usuario.

let minusBtn = document.querySelector('.input__minus');
let masBtn = document.querySelector('.input__mas');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

masBtn.addEventListener('click', ()=> {
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log('userInputNumber');
})
minusBtn.addEventListener('click', ()=> {
    userInputNumber--;
    if(userInputNumber <= 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log('userInputNumber');
})

// Agregar numero al carrito al presionar sobre el boton Add to cart.

const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');

addToCartBtn.addEventListener('click', ()=>{

    let lastValue = cartNotification.innerText;

    cartNotification.innerText = userInputNumber;
    cartNotification.style.display = "block";
})