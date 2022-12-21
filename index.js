// Cambio de cantidad de articulos ingresado por el usuario.

let minusBtn = document.querySelector('.input__minus');
let masBtn = document.querySelector('.input__mas');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

masBtn.addEventListener('click', () => {
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log('userInputNumber');
})
minusBtn.addEventListener('click', () => {
    userInputNumber--;
    if (userInputNumber <= 0) {
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log('userInputNumber');
})

// Agregar numero al carrito al presionar sobre el boton Add to cart.

const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', () => {
    lastValue = lastValue + userInputNumber;

    cartNotification.innerText = lastValue;
    cartNotification.style.display = "block";
    drawProductInModal();
    priceModal.innerHTML = `$125.00 x${lastValue} <span>$${lastValue*125}.00</span>`;
})

// Mostrando modal del carrito.

const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
let priceModal = document.querySelector('.cart-modal__price');
const productConteiner = document.querySelector('.cart-modal__checkout-container');


cartIconBtn.addEventListener('click', () => {
    cartModal.classList.toggle('show');

    if (lastValue == 0) {
        drawProductInModal();
    }
})

// Borrar contenido del carrito.
function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');

deleteProductBtn.addEventListener('click', () => {
    productConteiner.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    lastValue = 0;
    cartNotification.innerText = lastValue;
})

}


// Funciones.

function drawProductInModal() {
    productConteiner.innerHTML = `
        <div class="cart-modal__checkout-container">
                    <div class="cart-modal__details-container">
                        <img class="cart-modal__image" src="imagenes/gafas.png" alt="">
                        <div>
                            <p class="cart-modal__product">Autumn limited edition</p>
                            <p class="cart-modal__price">$125.00 x0 <span>$.00</span></p>
                        </div>
                        <img class="cart-modal__delete" src="imagenes/delete.png" alt="delete">
    
                    </div>
                    <button class="cart-modal__checkout">Checkout</button>`;
                    deleteProduct()
}