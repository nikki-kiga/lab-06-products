import { calcLineItem, formatPrice } from '../common/utils.js';

export default function renderLineItem(lineItem, product) {
    const row = document.createElement('tr');
    row.classList.add('cart-item');

    //Create namecell and add data
    const nameCell = document.createElement('td');
    nameCell.textContent = product.name;
    nameCell.classList.add('align-left');

    //create quantitycell and add data
    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;

    //add quantity data and add data
    const priceCell = document.createElement('td');
    priceCell.textContent = formatPrice(product.price);

    //create totalcell
    const totalCell = document.createElement('td');
    const rowTotal = calcLineItem(product.price, lineItem.quantity);
    totalCell.textContent = formatPrice(rowTotal);
    totalCell.classList.add('line-item-total');

    //append all to the table row
    row.append(nameCell, quantityCell, priceCell, totalCell);

    //return the table row
    return row;
    
}