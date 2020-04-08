import products from '../data/products.js';
// import cart from '../data/cart.js'; //take this out once it's working
import renderLineItem from './render-line-item.js';
import { findById, calcOrderTotal } from '../common/utils.js';

const cartTable = document.getElementById('cart-body');
const orderTotalCell = document.getElementById('order-total-dest');

const cart = JSON.parse(localStorage.getItem('CART'));

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
