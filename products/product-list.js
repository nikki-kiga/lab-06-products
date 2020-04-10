import renderProducts from './render-products.js';
import { getProducts } from '../common/utils.js';

const productsContainer = document.getElementById('container-products');
const products = getProducts();

//Render each product and add to product container
products.forEach((product) => {
    const rendered = renderProducts(product);
    productsContainer.appendChild(rendered);
});