// alert("This is an alert!");

if (1 === 1){
    console.log("it's true!")
}

// example 2

let rating = 3;

if (rating === 3) {
    console.log("You are a superstar!");
}


// Example 3
let number = 38;

if (number % 2 !== 0){
    console.log("Odd number")
}


// Nested conditional example
let password = "hellokitty"

if(password.length >= 6){
    if(password.indexOf(' ') === -1){
        console.log("Valid password");
    }
    else {
        console.log("Password is long enough, but cannot contain spaces");
    }
}
else {
    console.log("Password must be longer!");
}


// Truthy/Falsy example

let mystery = 5;

if (mystery) {
    console.log("Truthy");
}
else {
    console.log("Falsy");
}

// Using logical operators to make a more efficient password checker

let newPassword = 'chickenGal';

if (newPassword.length >= 8 && (newPassword.indexOf(" ") === -1)) {
    console.log("Valid password");
} 
else {
    console.log("Invalid password");
}

// Another logical AND example

let num = 3;

if (num >= 1 && num <= 10) {
    console.log("Number is between 1 and 10")
}

// logical OR exampel

let age = 78;

if(age < 6 || age >= 65) {
    console.log(`Your age is: ${age}`);
    console.log("You get in free!");
}
else {
    console.log(`Your age is: ${age}`);
    console.log("You must pay :(");
}


// Logical NOT example
let loggedInUser;

if (!loggedInUser) {
    console.error("Get out of here!")
}

let flavor = "sandia";

if (flavor !== "grape" && flavor !== "cherry") {
    console.log("We do not have that flavor.");
}

if(!(flavor === "grape" || flavor === "cherry")) {
    console.log("We still don't have that flavor")
}

// Switch examples

let day = 3;

switch(day){
    case 1: 
        console.log("Monday");
        break;
    case 2: 
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
        break;
    case 7: 
        console.log("Sunday");
        break;
    default: 
        console.log("INVALID day");
}


// ternary example

let value = 4;
value === 7 ? console.log("Lucky") : console.log("Too bad!");


// Real world ternary

let status = "offline";
let color = status === "offline" ? "red" : "green";
console.log(`Status is : ${status}`);
console.log(`Color is : ${color}`);