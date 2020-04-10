import { getCart, addToCart } from '../shopping-cart/cart-api.js';
import { addTenOptions } from '../common/utils.js';
import { removeProduct } from '../admin/remove-product.js';


export default function renderProducts(product, display, container) {
    //create an li element
    const productDisplay = document.createElement('li');

    //add classList for product category
    productDisplay.classList.add(product.category);
    productDisplay.classList.add('product');

    //add img with src and alt properties (alt = description)
    const productImg = document.createElement('img');
    productImg.src = product.image;
    productImg.alt = product.description;
    productImg.classList.add('product--image');

    //create header with Name
    const productName = document.createElement('h3');
    productName.textContent = product.name;

    //add category in h4
    const productCategory = document.createElement('h4');
    productCategory.textContent = product.category;

    //add price in h4
    const productPrice = document.createElement('h4');
    productPrice.textContent = `$ ${product.price}`;

    if (display === 'inventory') {

            //add 10 select drop down options
        const productQuantity = addTenOptions(product.id);

        //create a button with value = id and textContent for button
        const productAdd = document.createElement('button');
        productAdd.textContent = 'Add To Cart';
        productAdd.value = product.id;
        productAdd.addEventListener('click', () => {
            //Check if there is a cart in LocalStorage
            const stringCart = getCart();
            let tempCart = [];
            //If not in storage create an empty array []
            //If there is a cart in localStorage turn into an array using JSON.parse
            if (stringCart) {
                tempCart = JSON.parse(stringCart);
            }
            //set quantity equal to the matching id selected dropdown
            const quantity = document.querySelector(`select[id=${CSS.escape(product.id)}] option:checked`).value;
            
            addToCart(tempCart, product.id, quantity);

            //localStorage set value for cart with new cart array by using JSON.stringify
            localStorage.setItem('CART', JSON.stringify(tempCart));

            //Create alertMessage for plural or not based on quantity 
            const alertMessage = quantity > 1 ? `${quantity} ${product.name}s added to cart` : `${quantity} ${product.name} added to cart`;
            alert(alertMessage);            
        });

        //append these child elements to li
        productDisplay.append(productImg, productName, productCategory, productPrice, productQuantity, productAdd);

    } else if (display === 'admin') {
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove Product';
        removeButton.value = product.id;
        //append these child elements to li
        productDisplay.append(productImg, productName, productCategory, productPrice, removeButton);

        removeButton.addEventListener('click', () => {
            removeProduct(product, container);
        });

    } else {
        throw 'Need a display to be specified';
    }

    
    //return the li
    return productDisplay;
}