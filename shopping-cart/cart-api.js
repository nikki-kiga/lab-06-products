//Returns a json string for the cart
import { findById } from '../common/utils.js';

export function getCart() {
    return localStorage.getItem('CART');
}

export function addToCart(cart, productID, quantity) {
    //Find matching product in cart based on productID
    let itemMatch = findById(cart, productID);

    //If product is not in cart, add product to cart
    if (!itemMatch) {
        itemMatch = {
            id: productID,
            quantity: quantity
        };
        cart.push(itemMatch);
    } else {
        //If product already exists in cart increase quantity
        itemMatch.quantity += quantity;
        //Give alert for new quantity in cart?
    }

}

//Remove the cart from local storage with .removeItem
export function clearCart() {
    localStorage.removeItem('CART');
}