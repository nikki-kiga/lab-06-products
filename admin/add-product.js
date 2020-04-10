import { getProducts } from '../common/utils.js';

//Assumes that the static products are stored in localStorage and does not currently validate if the product already exists in store
export function addProduct(newProduct) {

    const products = getProducts();

    //either way add the newProduct to the products (assumes form validation)
    products.push(newProduct);

    //set products to the new stringified product list
    localStorage.setItem('PRODUCTS', JSON.stringify(products));
}