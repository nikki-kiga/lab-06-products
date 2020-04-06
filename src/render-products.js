export default function renderProducts(product) {


    //create an li element
    const productDisplay = document.createElement('li');

    //add classList for product category
    productDisplay.classList.add(product.category);

    //create header with Name
    const productName = document.createElement('h3');
    productName.textContent = product.name;

    //add img with src and alt properties (alt = description)
    const productImg = document.createElement('img');
    productImg.src = product.image;
    productImg.alt = product.description;

    //add category in h4
    const productCategory = document.createElement('h4');
    productCategory.textContent = product.category;

    //add price in h4
    const productPrice = document.createElement('h4');
    productPrice.value = product.price;

    //create a button with value = id and textContent for button
    const productAdd = document.createElement('button');
    productAdd.textContent = 'Add To Cart';
    productAdd.value = product.id;

    //append these child elements to li
    productDisplay.append(productName, productImg, productCategory, productPrice, productAdd);
    
    //return the li
    return productDisplay;
}