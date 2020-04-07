import products from '../data/products.js';
import renderProducts from './render-products.js';

const productsContainer = document.getElementById('container-products');

//Render each product and add to product container
products.forEach((product) => {
    const rendered = renderProducts(product);
    productsContainer.appendChild(rendered);
});