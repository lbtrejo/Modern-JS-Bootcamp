// Examples for section 5: Arrays

let students = [];
let colors = ["green", "red", "orange"];
let lottoNums = [19, 22, 56, 42, 37, 48];
let stuff = [true, 70, "cat", null];

let arrLiteral = new Array(1,2,3,4,5,6); // not preferred due to length

let list = ["milk", "potatoes", "meat"];

list[1]; // "potatoes"
list.length // 3
list[2] = "steak";
list; // ["milk, "potatoes", "steak"]


// Array method examples

let topSongs = [
    "Pull harder",
    "Voices",
    "Chop Suey",
    "Defenders"
];

topSongs.push("Airplanes");

topSongs; // ["Pull harder", "Voices", "Chop Suey", "Defenders", "Airplanes"]

topSongs.pop(); // [ "Pull harder", "Voices", "Chop Suey", "Defenders" ]

topSongs.unshift("Reptile"); // [ "Reptile", "Pull harder", "Voices", "Chop Suey", "Defenders" ]
// returns the new length of the array

topSongs.shift();  // [ "Pull harder", "Voices", "Chop Suey", "Defenders" ]

// Unshifting multiples example

let multiplesExample = [1,2,3,4];
multiplesExample.unshift(0, 5);

multiplesExample; // [0,5,1,2,3,4]

// slice examples

let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];

let swimmers = animals.slice(0, 3); // ["shark", "salmon", whale"]

let mammals = animals.slice(2,4); // ["whale", "bear"];

let reptiles = animals.slice(4,6); // ["lizard", "reptile"];
            // animals.slice(4) - does the same as above

let quadrupeds = animals.slice(-3); // ["bear", "lizard", "tortoise"]
            // animals.slice(-3, -1) = ["bear", "lizard"]

let copy = animals.slice(); // shallow copy, immutable data is good

// splice method examples
// splice(startIdx, deleteCount, itemsToInsert);

animals.splice(1,0,"octopus");
console.log(animals); // [ "shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise" ]

animals.splice(3,2);
console.log(animals); // [ "shark", "octopus", "salmon", "lizard", "tortoise" ]

animals.splice(3,0, "snake", "frog");
console.log(animals); // [ "shark", "octopus", "salmon", "snake", "frog", "lizard", "tortoise" ]

// sort
// updates the array IN PLACE and sorts it, returning the sorted array as well

// default sort converts to strings then sorts by unicode values
// Learn more about sort functions to unlock sorts usefulness

