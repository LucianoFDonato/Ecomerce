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
function deleteProduct() {
    const deleteProductBtn = document.querySelector('.cart-modal__delete');

    deleteProductBtn.addEventListener('click', () => {
        productConteiner.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
        lastValue = 0;
        cartNotification.innerText = lastValue;
    })

}

// Cambiar imagenes al tocar btn flecha.
const imageContainer = document.querySelector('.gallery__image-container');
const previousBtn = document.querySelector('.gallery__previous');
const nextBtn = document.querySelector('.gallery__next');
let imgIndex = 1;
const imageUrls = [
    'imagenes/gafas1.jpg',
    'imagenes/gafas2.jpg',
    'imagenes/gafas3.jpg',
    'imagenes/gafas4.jpg',
]

nextBtn.addEventListener('click', ()=>{
    changeNextImage(imageContainer);
})
previousBtn.addEventListener('click', ()=>{
    changePreviousImage(imageContainer);
})



// Funciones.

function drawProductInModal() {
    productConteiner.innerHTML = `
        <div class="cart-modal__checkout-container">
                    <div class="cart-modal__details-container">
                        <img class="cart-modal__image" src="imagenes/gafas1.jpg" alt="">
                        <div>
                            <p class="cart-modal__product">Autumn limited edition</p>
                            <p class="cart-modal__price">$125.00 x0 <span>$.00</span></p>
                        </div>
                        <img class="cart-modal__delete" src="imagenes/delete.png" alt="delete">
    
                    </div>
                    <button class="cart-modal__checkout">Checkout</button>`;
    deleteProduct()
    let priceModal = document.querySelector('.cart-modal__price');
    priceModal.innerHTML = `$125.00 x${lastValue} <span>$${lastValue*125}.00</span>`;
}

function changeNextImage(imgContainer){
    if(imgIndex == 4){
        imgIndex = 1;
    }
    imgIndex++;
    imgContainer.style.backgroundImage = `url('imagenes/gafas${imgIndex}.jpg')`
}
function changePreviousImage(imgContainer){
    if(imgIndex == 1){
        imgIndex = 4;
    }
    imgIndex--;
    imgContainer.style.backgroundImage = `url('imagenes/gafas${imgIndex}.jpg')`
}