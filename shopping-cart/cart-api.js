//Returns a json string for the cart
import { findById } from '../common/utils.js';

export function getCart() {
    return localStorage.getItem('CART');
}

export function addToCart(cart, productID, quantity) {
    let itemMatch = findById(cart, productID); //or should I use product.id

    //if product is not in cart, add product to cart
    if (!itemMatch) {
        itemMatch = {
            id: productID,
            quantity: quantity
        };
        cart.push(itemMatch);
    } else {
        itemMatch.quantity += quantity;
    }

}

export function clearCart() {
    localStorage.removeItem('CART');
}