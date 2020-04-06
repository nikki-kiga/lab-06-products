/*
Object Structure

Id - that uniquely identifies product
Name - user frienly name of the product
Image - image file name for the image (should live in assets)
Description - a longer description of the product
Category - the category this product belongs to (limit to one)
Price - the price the user will pay
*/

const casioBabyG = {
    id: '001',
    name: 'Casio Baby-G',
    image: '',
    description: 'Popular watch during the 90s',
    category: 'Watch',
    price: 1.00,
    cost: 0.55
};

const casioCalculator = {
    id: 'CA53W-1',
    name: 'Casio Calculator Watch',
    image: '',
    description: 'Watch with built in calculator',
    category: 'Watch',
    price: 17.00,
    cost: 11.95
};

const tamagotchi = {
    id: '003',
    name: 'Tamagotchi Generation One',
    image: '',
    description: 'A handheld digital character on a keychain',
    category: 'Keychain',
    price: 1.00,
    cost: 0.55
};

const gameBoy = {
    id: '004',
    name: 'Nintendo Game Boy',
    image: '',
    description: 'Portable video console',
    category: 'Games',
    price: 1.00,
    cost: 0.55
};

const ringToss = {
    id: '005',
    name: 'Waterful Ring Toss',
    image: '',
    description: '',
    category: 'Games',
    price: 1.00,
    cost: 0.55
};

const walkman = {
    id: '006',
    name: 'Sony Sports Walkman',
    image: '',
    description: 'Portable tape deck player',
    category: 'Music',
    price: 1.00,
    cost: 0.55
};

const palmPilot = {
    id: '007',
    name: 'Palm Pilot',
    image: '',
    description: 'Personal digital assistant ',
    category: '',
    price: 1.00,
    cost: 0.55
};
const products = [
    casioBabyG,
    casioCalculator,
    tamagotchi,
    gameBoy,
    ringToss,
    walkman,
    palmPilot
];
export default products;