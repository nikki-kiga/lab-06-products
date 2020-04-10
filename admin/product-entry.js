
import { addProduct } from './add-product.js';
import { renderEachProduct } from '../common/utils.js';

const entryForm = document.getElementById('product-entry');
const productsContainer = document.getElementById('container-products');

//When the add product form is submitted
entryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const entryData = new FormData(entryForm);

    let imgPath = '';

    const imgEntry = entryData.get('image');

    if (imgEntry.startsWith('http')) {
        imgPath = imgEntry;
    } else {
        imgPath = '../assets/' + imgEntry;
    }

    const newProduct = {
        id: Math.ceil(Math.random() * 10000),
        name: entryData.get('name'),
        image: imgPath,
        description: entryData.get('desc'),
        category: entryData.get('category'),
        price: entryData.get('price'),
        cost: entryData.get('cost')
    };

    addProduct(newProduct);

    //Reset the form
    entryForm.reset();

});

renderEachProduct('admin', productsContainer);