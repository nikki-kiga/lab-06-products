import products from '../data/products.js';
import cart from '../data/cart.js';
import renderLineItem from './render-line-item.js';
import { findById, calcOrderTotal } from '../common/utils.js';

const cartTable = document.getElementById('cart-body');
const orderTotalCell = document.getElementById('order-total-dest');

cart.forEach(item => {
    //find the matching product
    const product = findById(products, item.id);

    //call and receive returned dom
    const cartRow = renderLineItem(item, product);

    //attach to cart container
    cartTable.append(cartRow);
});

const orderTotal = calcOrderTotal(cart, products);
orderTotalCell.textContent = orderTotal;
