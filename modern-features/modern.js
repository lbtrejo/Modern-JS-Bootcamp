// Default function parameters

const multiply = (x, y = 1) => {   // y = 1 denotes a default value
    // if (typeof y === 'undefined') {  // typeof always returns a string!
    //     y = 1;
    // }
    // y = typeof y === 'undefined' ? 1 : y; // ternery of above if block
    return x * y;
}

const greet = (person, greeting = 'Hi') => {
    return `${greeting}, ${person}!`;
}

// Default parameters should be added on later parameters
// multiply(x=1, y) // This is poor design, y can be undefined
// multiply(x, y = 2) // Better, the first parameter shouldn't have a default

// Spread (...)
// Think EXPANDED.  Expanding an interable.

// Spread in function calls
// Spread arrays literals
// Spread object literals

// For function calls, spreads an interable into an argument for each item
const numbers = [23, 65, 18, 96, 55]

console.log(Math.max(...numbers));
// equivalent to Math.max(23, 65, 18, 96, 55)

let str = "BENDER";

const giveMeSix = (a, b, c, d, e, f) => {
    console.log(str)
    console.log('a: ', a);
    console.log('b: ', b);
    console.log('c: ', c);
    console.log('d: ', d);
    console.log('e: ', e);
    console.log('f: ', f);
}

giveMeSix(...str);


// Spread in Array Literals
// Works like concat, but with advantages
const cats = ['lions', 'tigers', 'cheetahs'];
const canines = ['dogs', 'wolves', 'hyenas'];
const birds = ['parrots', 'sparrows', 'ravens'];

// reordering is easier
const quadrupeds = [...cats, ...canines];
// Custom items can be added easily
const vertebrates = [...birds, ...canines, ...cats, 'horses'];

// Spread commonly used to copy arrays
const copyCats = [...cats];

copyCats != cats && copyCats !== cats // References are different!

// Strings are iterables, so spread can be used on strings
// (..."stringisiterable")

// Spread in Object literals

const feline = {
    legs: 4,
    family: 'Felidae'
}

const canine = {
    family: 'Caninae',
    furry: true
}

const dog = {
    ...canine, // brings the above object properties into this object and adds to it
    isPet: true,
    adorable: false
}

const houseCat = {
    ...feline,
    isGrumpy: true,
    personality: 'unpredictable'
}

const catDog = {
    ...feline,
    ...canine
}
// { legs: 4, family: "Caninae", furry: true }
// Both objects have a family, ORDER MATTERS

const catDogClone = {
    ...catDog
}

catDogClone !== catDog // DIFFERENT REFERENCES

// Spreading an array into an object
// {...[4,5,6]}
// 

const random = [...'hello', {
    ...catDog
}]  // [ "h", "e", "l", "l", "o", {…} ]

