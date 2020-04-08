// IMPORT MODULES under test here:
// import example from '../src/example.js';

import { findById, calcLineItem, calcOrderTotal } from '../common/utils.js';

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

test('Test for calcOrderTotal', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const cart = [{
        id: '001',
        quantity: 3
    }, {
        id: '004',
        quantity: 2
    }, {
        id: '006',
        quantity: 1
    }];

    const casioBabyG = {
        id: '001',
        name: 'Casio Baby-G',
        image: '../assets/001-casio-baby-g.jpg',
        description: 'Popular watch during the 90s',
        category: 'Watch',
        price: 1.00,
        cost: 0.55
    };
    
    const casioCalculator = {
        id: 'CA53W-1',
        name: 'Casio Calculator Watch',
        image: '../assets/002-casio-calc-watch.jpg',
        description: 'Watch with built in calculator',
        category: 'Watch',
        price: 17.00,
        cost: 11.95
    };
    
    const tamagotchi = {
        id: '003',
        name: 'Tamagotchi Generation One',
        image: '../assets/003-tamagotchi.jpg',
        description: 'A handheld digital character on a keychain',
        category: 'Games',
        price: 1.00,
        cost: 0.55
    };
    
    const gameBoy = {
        id: '004',
        name: 'Nintendo Game Boy',
        image: '../assets/004-game-boy.jpg',
        description: 'Portable video console',
        category: 'Games',
        price: 1.00,
        cost: 0.55
    };
    
    const talkboy = {
        id: '005',
        name: 'Talkboy',
        image: '../assets/005-talkboy.jpg',
        description: 'Handheld voice recorder',
        category: 'Device',
        price: 1.00,
        cost: 0.55
    };
    
    const walkman = {
        id: '006',
        name: 'Sony Sports Walkman',
        image: '../assets/006-sony-walkman.jpg',
        description: 'Portable tape deck player',
        category: 'Device',
        price: 139.99,
        cost: 82.50
    };
    
    const palmPilot = {
        id: '007',
        name: 'Palm Pilot',
        image: '../assets/007-palm-pilot.jpg',
        description: 'Personal digital assistant ',
        category: 'Device',
        price: 1.00,
        cost: 0.55
    };

    const products = [
        casioBabyG,
        casioCalculator,
        tamagotchi,
        gameBoy,
        talkboy,
        walkman,
        palmPilot
    ];

    const expected = '$144.99';
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcOrderTotal(cart, products);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(actual, expected);
});