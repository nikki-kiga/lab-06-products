//Assumes that the static products are stored in localStorage and does not currently validate if the product already exists in store
export function addProduct(newProduct) {
    const currentString = localStorage.getItem('PRODUCTS');

    let products = [];

    //if there's an existing string
    if (currentString) {
        products = JSON.parse(currentString);
    }

    //either way add the newProduct to the products (assumes form validation)
    products.push(newProduct);

    //set products to the new stringified product list
    localStorage.setItem('PRODUCTS', JSON.stringify(products));
}