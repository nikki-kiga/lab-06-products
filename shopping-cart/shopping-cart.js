import products from '../data/products.js';
import cart from '../data/cart.js';
import renderLineItem from './render-line-item.js';
import { findById } from '../common/utils.js';

//for each item in cart, find product and generate dom, attach to cart container

const cartTable = document.getElementById('cart-body');

cart.forEach(item => {
    //find the matching product
    const product = findById(products, item.id);

    //call and receive returned dom
    const cartRow = renderLineItem(item, product);

    //attach to cart container
    cartTable.append(cartRow);
});