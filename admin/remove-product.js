import { getProducts, findById } from '../common/utils';

export function removeProduct(productRemove) {
    
    const products = getProducts();
    //check if the productRemove is in products
    const productExists = findById(products, productRemove);

    if (productExists) {
        const editedProducts = [];
        products.forEach(product => {
            if (product.id !== productExists.id) {
                editedProducts.push(product);
            }
        });
        localStorage.setItem('PRODUCTS', JSON.stringify(editedProducts));
    } else {
        alert('This product is not in the product list');
    }
}