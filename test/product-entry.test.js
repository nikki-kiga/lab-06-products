import { addProduct } from '../admin/add-product.js';

const test = QUnit.test;

QUnit.module('Product Entry');

test('Test for adding a product to existing localStorage', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = '[{"id":"001","name":"Casio Baby-G","image":"../assets/001-casio-baby-g.jpg","description":"Popular watch during the 90s","category":"Watch","price":87.99,"cost":45.5},{"id":"CA53W-1","name":"Casio Calculator Watch","image":"../assets/002-casio-calc-watch.jpg","description":"Watch with built in calculator","category":"Watch","price":17,"cost":11.95},{"id":"003","name":"Tamagotchi Generation One","image":"../assets/003-tamagotchi.jpg","description":"A handheld digital character on a keychain","category":"Games","price":33,"cost":19.99},{"id":"004","name":"Nintendo Game Boy","image":"../assets/004-game-boy.jpg","description":"Portable video console","category":"Games","price":89,"cost":67},{"id":"005","name":"Talkboy","image":"../assets/005-talkboy.jpg","description":"Handheld voice recorder","category":"Device","price":24.99,"cost":19.9},{"id":"006","name":"Sony Sports Walkman","image":"../assets/006-sony-walkman.jpg","description":"Portable tape deck player","category":"Device","price":139.99,"cost":82.5},{"id":"007","name":"Palm Pilot","image":"../assets/007-palm-pilot.jpg","description":"Personal digital assistant ","category":"Device","price":19.99,"cost":10.33},{"id":"111","name":"Test","image":"","description":"Testing if this works","category":"Test","price":99.99,"cost":11.11}]'
    ;
    const newProduct = {
        id: '111',
        name: 'Test',
        image: '',
        description: 'Testing if this works',
        category: 'Test',
        price: 99.99,
        cost: 11.11
    };

    const casioBabyG = {
        id: '001',
        name: 'Casio Baby-G',
        image: '../assets/001-casio-baby-g.jpg',
        description: 'Popular watch during the 90s',
        category: 'Watch',
        price: 87.99,
        cost: 45.50
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
        price: 33.00,
        cost: 19.99
    };
    
    const gameBoy = {
        id: '004',
        name: 'Nintendo Game Boy',
        image: '../assets/004-game-boy.jpg',
        description: 'Portable video console',
        category: 'Games',
        price: 89.00,
        cost: 67.00
    };
    
    const talkboy = {
        id: '005',
        name: 'Talkboy',
        image: '../assets/005-talkboy.jpg',
        description: 'Handheld voice recorder',
        category: 'Device',
        price: 24.99,
        cost: 19.90
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
        price: 19.99,
        cost: 10.33
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

    localStorage.removeItem('PRODUCTS');
    localStorage.setItem('PRODUCTS', JSON.stringify(products));

    //Act 
    // Call the function you're testing and set the result to a const
    addProduct(newProduct);
    const actual = localStorage.getItem('PRODUCTS');

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(actual, expected);
});