// Functions

// Chunk of code that can be referred back to at a later point
// Reusable and modular

// function funcName() { code }

function rollDie(){
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Roll: ${roll}`);
    // return roll;
}

function throwDice(numRolls){
    for (let i = 0; i < numRolls; i++){
        rollDie();
    }
}

// Functions with arguments
// function funcName(argument) { code that uses argument in some way }

function greet(name) {
    console.log(`Hi ${name}!`);
}

// Multiple argument functions
function sum(x, y) {
    return x + y;
}

// The return can only be a single value
// Return will exit the function at that point
// Multiple return statements can exist, only 1 will ever run

function containsPurple(arr) {
    for (let color of arr) {
        if((color.toLowerCase() === 'purple') || 
        (color.toLowerCase() === 'magenta')) {
            return true;
        }
    }
    return false;
}

// Write a isValidPassword function
// 2 args, username and password
// Password must: 
// - 8 characters
// - no spaces
// - no username

function isValidPassword(username, password) {
    // if ((password.length < 8) ||
    //     (password.indexOf(' ') !== -1) || 
    //     (password.indexOf(username) !== -1)) {
    //     return false;
    // }
    // else {
    //     return true;
    // }

    // Vastly more efficent version
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const hasUsername = password.indexOf(username) !== -1;
    return !tooShort && !hasSpace && !hasUsername;
}

// Write a function to find the average of an array of numbers

function arrAverage(arr){
    let sum = 0;
    for (let num of arr){
        sum += num;
    }
    return sum / arr.length;
}

// Write a function to determine if a sentence is a pangram
// contains every single letter

function isPangram(sentence){
    // const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    //                 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    //                 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // for (let letter of letters){
    //     if (sentence.toLowerCase().indexOf(letter) === -1) {
    //         return false;
    //     }
    // }
    // return true;

    let lowerCased = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (!lowerCased.includes(char)){
            return false;
        }
    }
    return true;
}

// Function to return a playing card

function pick(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard() {
    const suits = ['clubs', 'spades', 'diamonds', 'hearts'];
    const values = [
        'A',
        'K',
        'Q',
        'J',
        '10',
        '9',
        '8',
        '7',
        '6',
        '5',
        '4',
        '3',
        '2'
    ];
    // My first attempt (works)
    // const randomSuit = Math.floor(Math.random() * suits.length)
    // const randomVal = Math.floor(Math.random()* values.length)

    // return { value: values[randomVal], suit: suits[randomSuit] };

    // After adding a pick helper function
    return { value: pick(values), suit: pick(suits)};
}