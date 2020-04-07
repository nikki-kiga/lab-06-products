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

    //append these child elements to li
    productDisplay.append(productImg, productName, productCategory, productPrice, productAdd);
    
    //return the li
    return productDisplay;
}