
import renderLineItem from '../shopping-cart/render-line-item.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('Test for rendering line item for walkman', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = '<tr class="cart-item"><td class="align-left">Sony Sports Walkman</td><td>2</td><td>$139.99</td><td class="line-item-total">$279.98</td></tr>'
    ;
    const lineItem = {
        id: '006',
        quantity: 2
    };

    const product = {
        id: '006',
        name: 'Sony Sports Walkman',
        image: '../assets/006-sony-walkman.jpg',
        description: 'Portable tape deck player',
        category: 'Device',
        price: 139.99,
        cost: 82.50
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderLineItem(lineItem, product);
    const html = dom.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});