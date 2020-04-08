export function findById(array, id) {
    let found = null;
    array.forEach(item => {
        if (item.id === id) {
            found = item;
        }
    });
    return found;
}
//Curious to see if I can do a binary search for the above function!

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