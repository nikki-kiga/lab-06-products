import { getProducts, findById, renderEachProduct } from '../common/utils.js';


export function removeProduct(productRemove, container) {
    
    const products = getProducts();
    //check if the productRemove is in products
    const productExists = findById(products, productRemove.id);

    if (productExists) {
        const editedProducts = [];
        products.forEach(product => {
            if (product.id !== productExists.id) {
                editedProducts.push(product);
            }
        });
        localStorage.setItem('PRODUCTS', JSON.stringify(editedProducts));
        alert('The product was removed');
        //Clear the innerHTML of the container before re-rednering with the updated list of products
        container.innerHTML = '';
        renderEachProduct('admin', container);

    } else {
        alert('This product is not in the product list');
    }
}