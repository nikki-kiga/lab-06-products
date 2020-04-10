import renderProducts from './render-products.js';
import { getProducts, renderEachProduct } from '../common/utils.js';

const productsContainer = document.getElementById('container-products');

renderEachProduct('inventory', productsContainer);