
import renderLineItem from './render-line-item.js';
import { findById, calcOrderTotal, getProducts } from '../common/utils.js';
import { getCart, clearCart } from './cart-api.js';

const products = getProducts();

const cartTable = document.getElementById('cart-body');
const orderTotalCell = document.getElementById('order-total-dest');
const placeOrder = document.getElementById('submit-order');

//Nab the cart from localStorage as a string
const stringCart = getCart();

//If there are things in the cart then render the cart
if (stringCart) {
    const cart = JSON.parse(stringCart);
    cart.forEach(item => {
        //find the matching product
        const product = findById(products, item.id);
        
        //call and receive returned dom
        const cartRow = renderLineItem(item, product);
    
        //attach to cart container
        cartTable.appendChild(cartRow);
    });
    const orderTotal = calcOrderTotal(cart, products);
    orderTotalCell.textContent = orderTotal;
    placeOrder.addEventListener('click', () => {
        //display alert with contents of cart JSON.stringify(cart, true, 2)
        alert(`Cart Contents: ${JSON.stringify(cart, true, 2)}`);
        
        //Clears cart from localStorage
        clearCart();

        //Redirect user back to home page
        window.location.href = '../';
    });
} else {
    
    //Disable the place order button since cart is empty
    placeOrder.disabled = true;
}

