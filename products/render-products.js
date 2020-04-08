import { getCart, addToCart } from '../shopping-cart/cart-api.js';

export default function renderProducts(product) {
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
        //Check if there is an existing product match (use findById)
        // let itemMatch = findById(tempCart, product.id); //or should I use product.id

        // //if product is not in cart, add product to cart
        // if (!itemMatch) {
        //     itemMatch = {
        //         id: product.id,
        //         quantity: 1
        //     };
        //     tempCart.push(itemMatch);
        // } else {
        //     itemMatch.quantity++;
        // }
        addToCart(tempCart, product.id, 1);

        //localStorage set value for cart with new cart array by using JSON.stringify
        localStorage.setItem('CART', JSON.stringify(tempCart));
        alert(`1 ${product.name} added to cart`);
    });


    //append these child elements to li
    productDisplay.append(productImg, productName, productCategory, productPrice, productAdd);
    
    //return the li
    return productDisplay;
}