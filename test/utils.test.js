// IMPORT MODULES under test here:
// import example from '../src/example.js';

import { findById, calcLineItem } from '../common/utils.js';

const test = QUnit.test;

test('Test for IN the array for findByID', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 'test2';
    const array = [{ 
        id: '011',
        name: 'test1'
    }, {
        id: '001',
        name: 'test2'
    }, {
        id: '0011',
        name: 'test3'
    }
    ];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(array, array[1].id);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(actual.name, expected);
});

test('Test for NOT in he array for findByID', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = null;
    const array = [{ 
        id: '011',
        name: 'test1'
    }, {
        id: '001',
        name: 'test2'
    }, {
        id: '0011',
        name: 'test3'
    }
    ];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(array, '009');

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(actual, expected);
});

test('Test for 27.12 calcLineItem', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 27.12;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcLineItem(9.04, 3);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(actual, expected);
});