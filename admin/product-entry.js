import products from '../data/products.js';

const entryForm = document.getElementById('product-entry');

//Initialize Products with products
localStorage.setItem('PRODUCTS', JSON.stringify(products));


//When the add product form is submitted
entryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const entryData = new FormData(entryForm);

    const newProduct = {
        id: Math.ceil(Math.random() * 10000),
        name: entryData.get('form-product-name'),
        image: entryData.get('form-product-image'),
        description: entryData.get('form-product-desc'),
        category: entryData.get('form-product-category'),
        price: entryData.get('form-product-price'),
        cost: entryData.get('form-product-cost')
    };

    console.log(newProduct);

    //Call add product

});

