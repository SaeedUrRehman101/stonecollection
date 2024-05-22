document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('#cart-icon');
    const cart = document.querySelector('.cart');
    const closeCart = document.querySelector('.close-cart');
    const buyButton = document.querySelector('.bttn-buy');

    // Open Cart
    cartIcon.addEventListener('click', () => {
        cart.classList.add('active');
    });

    // Close Cart
    closeCart.addEventListener('click', () => {
        cart.classList.remove('active');
    });

    // Remove Items From Cart
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('cart-remove')) {
            event.target.parentElement.remove();
            updateTotal();
        }
    });

    // Buy Now Button Click
    buyButton.addEventListener('click', () => {
        const cartItems = document.querySelectorAll('.cart-box');
        if (cartItems.length === 0) {
            alert('There are no items in your cart.');
        } else {
            alert('Your purchase is complete! Thank you for shopping with us.');
        }
    });

    // Update Total
    function updateTotal() {
        let total = 0;
        const cartBoxes = document.querySelectorAll('.cart-box');
        cartBoxes.forEach(cartBox => {
            const priceElement = cartBox.querySelector('.cart-price');
            const quantityElement = cartBox.querySelector('.cart-quantity');
            const price = parseFloat(priceElement.textContent.replace('$', ''));
            const quantity = quantityElement.value;
            total += price * quantity;
        });

        document.querySelector('.total-price').textContent = `$${total.toFixed(2)}`;
    }

    // Quantity Changes
    document.addEventListener('change', (event) => {
        if (event.target.classList.contains('cart-quantity')) {
            if (event.target.value <= 0) {
                event.target.value = 1;
            }
            updateTotal();
        }
    });

    updateTotal();
});
