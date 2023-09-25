function popUpCart() {
    const cartButton = document.querySelector('#cart-button');
    const cartPage = document.querySelector('#cart-page');

    cartButton.addEventListener('click', function (e) {
        e.preventDefault;
        cartPage.classList.toggle('active');
    });
}

popUpCart();