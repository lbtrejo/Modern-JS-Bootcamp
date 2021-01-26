// Functions in Detail

// Scope : variable "visibility"
// The location where a variable is defined dictates where it can be accessed

// Function Scope
function helpMe(){
    let msg = "I'm on fire";
    console.log(msg);
}

// console.log(msg); // MSG is undefined here, it is out of scope

let bird = "duck";

function birdWatch(){
    let bird = "chicken";
    console.log(bird) // logs chicken
}

console.log(bird) // logs duck

// Block scope

if (true) {
    let animal = 'eel';  // LET and CONST are BLOCK scoped
    var fish = 'tuna';  // vars are global scoped if not function scoped
    console.log(fish);  // logs tuna
    console.log(animal) // logs eel
}
// console.log(animal); // undefined
console.log(fish);  // also logs tuna

// Lexical scope
// Nested functions are lexically bound to their parent functions
// Child functions can access parents
// Parent functions cannot access child variables

function outer() {
    let movie = "Amadeus";

    function inner() {
        console.log(movie.toUpperCase());
    }
    inner();
}

// Function expressions
const square = function (num) {
    return num * num;
}
// Works because functions are Objects :)
square(7); // 49

const plus = function (x, y) {
    return x+y;
}
console.log(plus(23,24))


// Higher order functions

function add(x, y) {
    return x + y;
}

const subtract = function (x, y){
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

const divide = function (x, y){
    return x / y;
}

const operations = [add, subtract, multiply, divide];

operations[1](9, 2); // 7

for (let func of operations){
    let result = func(30, 5);
    console.log(result);
}

const thing = {
    doSomething: multiply
}

// Higher order functions
// Functions that operate on/with other functions.  They can:
// Accept other functions as args
// Return a function

// Function "factory"
function multiplyBy(num) {
    return function (x) {
        return x * num;
    }
}

// Products of the "factory"
const triple = multiplyBy(3);
const double = multiplyBy(2);
const halve = multiplyBy(0.5);

// Another higher order function example of return functions
// Factory
function makeBetweenFunc(min, max) {
    return function(num) {
        return (num >= min && num <= max)
    }
}
// Products
const isChild = makeBetweenFunc(0, 18);
const isInNineties = makeBetweenFunc(1990, 2000);
const isNiceWeather = makeBetweenFunc(60, 79);


// Callback functions
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function

function grumpus () {
    console.log("Go away");
}

setTimeout(grumpus, 3000);  // Callback fn grumpus called after 3 seconds

setTimeout(function(){  // Same deal, this time the fn is anonymous
    console.log("Anonymous function")}, 4000
); 
// Anonymous functions are useful for one time use code that won't need to be called again


// Hoisting
console.log(animal); // undefined
var animal = 'Tapir'; // Variable declarations get "hoisted" to the top of the file
console.log(animal); // Tapir

// How the above actually works
// var animal;
// console.log(animal);
// animal = 'Tapir';
// console.log(animal);

// LET and CONST are not hoisted to avoid this odd behavior

// function declarations are HOISTED
hoot();
function hoot(){
    console.log("HOOO HOOO");
}

// function expressions are different
// The variable name is available to be called, but the value is undefined until the function code is declared
// The above is true for VAR, but LET/CONST hoisting rules override
