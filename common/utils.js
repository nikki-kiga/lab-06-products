import products from '../data/products.js';
import renderProducts from '../products/render-products.js';

export function getProducts() {
    let productsString = localStorage.getItem('PRODUCTS');

    if (!productsString) {
        localStorage.setItem('PRODUCTS', JSON.stringify(products));
        productsString = localStorage.getItem('PRODUCTS');
    }
    return JSON.parse(productsString);
}

//Given the display case renders each product
export function renderEachProduct(display, container) {
    const products = getProducts();

    //Render each product and add to product container
    products.forEach((product) => {
        const rendered = renderProducts(product, display);
        container.appendChild(rendered);
    });
    
}

//Takes an array and an id and returns if it finds a matching id within the array
//Curious to see if I can do a binary search for this function!
export function findById(array, id) {
    let found = null;
    array.forEach(item => {
        if (item.id === id) {
            found = item;
        }
    });
    return found;
}


/*--------------------------------- Order Helper Functions----------------------------------------*/
export function calcLineItem(quantity, price) {
    return Math.round(Number(quantity) * Number(price) * 100) / 100;
}

export function formatPrice(price) {
    return `$${Number(price).toFixed(2)}`;
}

export function calcOrderTotal(cart, products) {
    let orderTotal = 0;
    cart.forEach(item => {
        const product = findById(products, item.id);
        const lineTotal = calcLineItem(item.quantity, product.price);
        orderTotal += lineTotal;
    });

    return formatPrice(orderTotal);
}

//Should try and change this to a forEach function
export function addTenOptions(id) {
    const productQuantity = document.createElement('select');
    productQuantity.id = id;

    for (let i = 1; i < 11; i++) {
        const option = document.createElement('option');
        option.textContent = i;
        option.value = i;
        productQuantity.append(option);
    }
    return productQuantity;
}