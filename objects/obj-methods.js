// Shorthand properties (ES2015)

// Literal syntax
// const getStats = (arr) => {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((total, curVal) => total + curVal);
//     const avg = sum / arr.length;
//     return {
//         max: max,
//         min: min,
//         sum: sum,
//         avg: avg,
//     }
// }

const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((total, curVal) => total + curVal);
    const avg = sum / arr.length;
    return {
        max,  // just call the variable and a key will be assigned the same name
        min,
        sum,
        avg,
    }
}


// Computed properties

const role = 'host';
const person = 'Drew Carey';
const role2 = 'director';
const person2 = 'Max Power';

// const team = {
//     role: person  // { role: 'Drew Carey' }
// }

// Old way to make a dynamic key
// const team = {};
// team[role] = person  // { host: 'Drew Carey' }

const team = {
    [role]: person,
    [role2]: person2,
}

team; // { host: "Drew Carey", director: "Max Power" }

const addProp = (obj, k, v) => ({...obj, [k]: v });

const fullTeam = addProp(team, "writer", "Bart Simpson");
// { host: "Drew Carey", director: "Max Power", writer: "Bart Simpson" }


// Object Methods

const add = (x, y) => (x + y);
const subtract = (x, y) => { return x - y };
function multiply(x, y) { return x * y };
const divide = function(x, y) { x / y };

const math = {
    numbers: [2,3,4,5,6],
    add,
    subtract,
    multiply,
    divide
}

math.add(math.numbers[0], math.numbers[2]) // 6


// Method shorthand syntax 
const auth = {
    login() {    // This is cleaner :D
        console.log("Logged you in");
    },
    username: 'TommyBoy',
    logout() {  // Don't forget the trailing commas to seperate props
        console.log("Laterz");
    }
}


// THIS
// Understanding THIS fills you with determination

// this referencing the window
function sayHi(){
    console.log("Hi");
    console.log(this);  // this references the browser window object in the global function scope
}

// this referencing the parent object for property access

const singer = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    fullName() {
        // console.log(`${this.first} ${this.last} AKA ${this.nickName}`); // DRY too many this refs
        console.log(this);  // References the 'singer' object
        const { first, last, nickName } = this;
        return (`${first} ${last}, AKA ${nickName}`);
    
    },
    printBio() {
        const fullName = this.fullName();
        console.log(`${fullName} is a singer!`);
    },
    laugh: () => {
        console.log(this);
        console.log(`${this.nickName} says LOL`)
    }
}

// The value of this depends on the invocation context of the function
// it is used it.

const printBio = singer.printBio();

printBio() // this = window object (global scope of the function where this is invoked)

singer.printBio() // this = person object (object method means object scope)


// Arrow functions behave differently with THIS

singer.laugh();  // the value of this will reference the global scope, the window

// Arrow functions for object methods are rarely used because of this behavior