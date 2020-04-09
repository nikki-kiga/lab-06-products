import renderProducts from '../products/render-products.js';

const test = QUnit.test;

QUnit.module('Render Products');

test('Test for casio calculator watch', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = '<li class="Watch product"><img src="../assets/002-casio-calc-watch.jpg" alt="Watch with built in calculator" class="product--image"><h3>Casio Calculator Watch</h3><h4>Watch</h4><h4>$ 17</h4><select id="CA53W-1"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select><button value="CA53W-1">Add To Cart</button></li>'
    ;
    const object = {    
        id: 'CA53W-1',
        name: 'Casio Calculator Watch',
        image: '../assets/002-casio-calc-watch.jpg',
        description: 'Watch with built in calculator',
        category: 'Watch',
        price: 17.00,
        cost: 11.95
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProducts(object);
    const outerHTMLActual = actual.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(outerHTMLActual, expected);
});

test('Test for casio game boy', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = '<li class="Games product"><img src="../assets/004-game-boy.jpg" alt="Portable video console" class="product--image"><h3>Nintendo Game Boy</h3><h4>Games</h4><h4>$ 89</h4><select id="004"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select><button value="004">Add To Cart</button></li>'
    ;
    const object = {    
        id: '004',
        name: 'Nintendo Game Boy',
        image: '../assets/004-game-boy.jpg',
        description: 'Portable video console',
        category: 'Games',
        price: 89.00,
        cost: 67.00
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProducts(object);
    const outerHTMLActual = actual.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(outerHTMLActual, expected);
});
