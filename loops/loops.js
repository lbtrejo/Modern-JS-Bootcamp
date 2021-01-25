// For loops

// for ([initExp]; [endCondition]; [interationExp]) { code to be looped }

for (let i = 0; i < 10; i++) {
    console.log(`Loop #: ${i+1}`);
};

// Generate the first 20 perfect squares

for (let x = 1; x <= 20; x++) {
    console.log(`Perfect square #${x}: ${Math.pow(x, 2)}`);
}

// Infinite loops :(
// tl;dr Make sure the ending condition can be met
// Be careful using ! in comparison conditionals, it can go badly.

// Loops over strings/arrays
const animals = ["lions", "tigers", "bears"];

for (let z = 0; z < animals.length; z++) {
    console.log(z, animals[z]);
}

const examScores = [98, 77, 84, 91, 57, 66];

for (let s = 0; s < examScores.length; s++) {
    console.log(s, examScores[s]);
}

const myStudents = [
    {
        firstName : "Zeus",
        grade : 86
    },
    {
        firstName : "Artemis",
        grade : 97
    },
    {
        firstName : "Hera",
        grade : 72
    },
    {
        firstName : "Apollo",
        grade : 90
    }
];

for (let g = 0; g < myStudents.length; g++) {
    let student = myStudents[g];
    console.log(`${student.firstName} scored: ${student.grade}`)
}

// Nested loops
// for (let a = 1; a<= 10; a++){
//     console.log("Outer loop:", a);
//     for (let b = 10; b >= 0; b -= 2) {
//         console.log("    Inner loop: ", b);
//     }
// }

// 2048 score from board

const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
];

//  Outer loop to combin the sum of the rows
//  Inner loop to sum the row itself
let total = 0;
for (let y = 0; y < gameBoard.length; y++){
    let row = gameBoard[y];
    let rowTotal = 0;
    for (let z = 0; z < row.length; z++) {
        let value = row[z];
        rowTotal += value;
    }
    total += rowTotal;
    console.log(row);
    console.log(rowTotal);
}

console.log(`Final score: ${total}`);

// While loops
// If you are uncertain of how many loops are needed but have a firm ending condition

const target = Math.floor(Math.random() * 10) + 1;
let guess = Math.floor(Math.random() * 10) + 1;

console.log();
console.log("Target: " + target);

while (target !== guess) {
    if (guess > target) {
        console.log("Guess: " + guess)
        console.log("Go lower");
    }
    else {
        console.log("Guess: " + guess)
        console.log("Go higher");
    }
    guess = Math.floor(Math.random() * 10) + 1;
}
console.log("Winner! Guess: " + guess);

// BREAK;
// breaks a loop condition in the block which the loop is scoped
// Uncommon in for loops, 

// FOR..OF : nice iterable loops
let subreddits = ["politics", "pics", "nfl", "nba"];

for (let sub of subreddits) {
    console.log(sub);
}


// Objects are not interable

const movieReviews = {
    Arrival : 9.5,
    Alien : 9,
    Amelie : 8,
    "In Bruges" : 9,
    Amadeus : 10,
    "Kill Bill" : 8,
    "Little Miss Sunshine" : 8.5,
    Coraline : 7.5
}

// Object.keys(Object) and Object.values(Object) can be used to
// generate arrays that can be interated over

for (let movie of Object.keys(movieReviews)){ 
    console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);
let totalRating = 0;
for (let rating of ratings) {
    totalRating += rating;
}
let avgRating = totalRating/movieReviews.length
console.log(avgRating);


// FOR .. IN   loop
// for (variable in object) { statement }
// Loops over the keys/properties in an object.

const jeopardyWinnings = {
    regularPlay : 2522700,
    watsonChallenge : 300000,
    tournamentOfChampions : 500000,
    battleOfTheDecades : 100000
}

for (let prop in jeopardyWinnings) {
    console.log(prop);
    console.log(jeopardyWinnings[prop]);
}

// Arrays are Objects and can use FOR..IN, but it isn't terribly useful
// The keys will be the indices, the values the elements.