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
        productConteiner.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    }else{
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
const buttonGallery = document.querySelector('.gallery__button');
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

// Mostrar el modal de imagenes cuando hago el click en la imagen principal.
const modalImage = document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close');

buttonGallery.addEventListener('click', ()=>{
    modalImage.style.display = "grid";
})

closeModalBtn.addEventListener('click', ()=>{
    modalImage.style.display = "none";    
})

// Cambiar las imagenes principales.
let thumbnails = document.querySelectorAll('.gallery__thumbnails');

thumbnails = [...thumbnails]

thumbnails.forEach(thumbnail => {
   thumbnail.addEventListener('click', event=>{
        console.log(event.target.id)
        imageContainer.style.backgroundImage = `url('imagenes/gafas${event.target.id}.jpg')`
   })
})

// Cambiar las imagenes principales en el modal.
let thumbnailsModal = document.querySelectorAll('.modal-gallery__thumbnail');
const modalImageContainer = document.querySelector('.modal-gallery__image_conteiner');

thumbnailsModal = [...thumbnailsModal]

thumbnailsModal.forEach(thumbnail =>{
    thumbnail.addEventListener('click', event=>{
        console.log(event.target.id.slice(-1))
        modalImageContainer.style.backgroundImage = `url('imagenes/gafas${event.target.id.slice(-1)}.jpg')`
    })
})

// Cambiar imagenes del modal con las flechas.
const previousModalBtn = document.querySelector('.modal-gallery__previous');
const nextModalBtn = document.querySelector('.modal-gallery__next');

nextModalBtn.addEventListener('click', ()=>{
    changeNextImage(modalImageContainer);
})
previousModalBtn.addEventListener('click', ()=>{
    changePreviousImage(modalImageContainer);
})

// Mostrar menu hamburguesa.
const hamburgerMenu = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar__background');
const closeModalNavbar = document.querySelector('.modal-navbar__close-icon');


modalNavbar.style.display = 'none'

hamburgerMenu.addEventListener('click', ()=>{
    console.log('abrir modal');
    modalNavbar.style.display = 'block';

});

closeModalNavbar.addEventListener('click', ()=>{
    modalNavbar.style.display = 'none';
});



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
        imgIndex = 0;
    }
    imgIndex++;
    imgContainer.style.backgroundImage = `url('imagenes/gafas${imgIndex}.jpg')`
}
function changePreviousImage(imgContainer){
    if(imgIndex == 1){
        imgIndex = 5;
    }
    imgIndex--;
    imgContainer.style.backgroundImage = `url('imagenes/gafas${imgIndex}.jpg')`
}

