import renderProducts from '../products/render-products.js';

const test = QUnit.test;

test('Test for casio calculator watch', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = '<li class="Watch product"><img src="../assets/002-casio-calc-watch.jpg" alt="Watch with built in calculator" class="product--image"><h3>Casio Calculator Watch</h3><h4>Watch</h4><h4>$ 17</h4><button value="CA53W-1">Add To Cart</button></li>'
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
    const expected = '<li class="Games product"><img src="../assets/004-game-boy.jpg" alt="Portable video console" class="product--image"><h3>Nintendo Game Boy</h3><h4>Games</h4><h4>$ 1</h4><button value="004">Add To Cart</button></li>'
    ;
    const object = {    
        id: '004',
        name: 'Nintendo Game Boy',
        image: '../assets/004-game-boy.jpg',
        description: 'Portable video console',
        category: 'Games',
        price: 1.00,
        cost: 0.55
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProducts(object);
    const outerHTMLActual = actual.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(outerHTMLActual, expected);
});
