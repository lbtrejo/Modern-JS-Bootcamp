// JavaScript Objects

// Objects are collections of properties
// Stored as key:value pairs
// Accessed by referencing the key name for the object.

// Data in a strict order (race results) should be stored in an array
// Data in a loose order with a common thread will likely be an object

// Objects are a REFERENCE type variable, only the reference is stored.
// The data contained in the object is mutable, the reference should not be (use CONST)

// Creating objects = Curly braces 

const fitbitData = {
    totalSteps: 231596,
    totalMiles: 123.8,
    avgCalorieBurn: 3596,
    workoutsThisWeek: "3 of 7",
    avgGoodSleep: "6:41"
};

console.log(fitbitData);

console.log(fitbitData.totalMiles);
console.log(fitbitData.avgCalorieBurn);

// All keys are converted and stored as Strings *EXCEPT FOR SYMBOLS*

const numbers = {
    100: "one hundred",
    16: "sixteen",
    "76 trombones": "great song"
};

// console.log(numbers.100)  // errors
console.log(numbers[100]) // works as expected, 100 converted to string in the brackets
console.log(numbers["76 trombones"]);  // works as expected, quotes are required

const palette = {
    red: "#eb4d4b",
    yellow: "#f9ca24",
    blue: "#30336b"
}

let mysteryColor = "blue"

// console.log(palette[red])  // This fails, key was not properly quoted
console.log(palette["blue"]);  // works as expected
console.log(palette[mysteryColor]); // also works
// console.log(palette.mysteryColor);  // does not work, undefined

console.log(palette["yel" + "low"]); // works, brackets evaluated first
