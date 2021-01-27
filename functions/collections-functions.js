// For..each methods

const numbers = [15, 16, 17, 18];

// anonymous callback function
numbers.forEach(function(num){
    console.log(num);
})

// anonymous callback function with optional index parameter
numbers.forEach(function(num, idx){
    console.log(`DBL: ${num * 2} - IDX: ${idx}`);
})

// Both of these are equivalent to above
// for (let num of numbers) {
//     console.log(num);
// }

// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// }

// MAP
// Creates a new array with the results of calling a callback function on each individual element

const doubles = numbers.map(function (num) {
    return num * 2;
})

const oddEvenObj = numbers.map(function (num) {
    return {
        num: num,
        isEven: (num % 2 === 0)
    }
})

const abbrevs = ['brb', 'afk', 'brt', 'omw']

// use map to return all caps and . seperated

const upperAbrevs = abbrevs.map(function(item) {
    return item.toUpperCase().split('').join('.');
});


// => Arrow Functions: syntactically compact alternative
// () are optional for a SINGLE parameter function
const squared = (n) => {
    return n * n;
}

// () are required for EMPTY parameter functions
const cubed = n => (Math.pow(n, 3));

// Array.Find

let movies = [
    "The fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
]

const movie = movies.find(movie => {
    return movie.includes('Mrs');
})

const movie2 = movies.find(movie => {
    return movie.indexOf("Mrs") === 0;
})

// Array.Filter
// Returns an array of elements that pass a certain conditional function
const moreNums = [55, 71, 12, 34, 87, 111, 204];

// No parens, no brackets for singular expression
const oddNums = moreNums.filter(n => n % 2 === 1);

// Parens and brackets
const evenNums = moreNums.filter((n) => {
    return n % 2 === 0
});

// No parens on parameter, parents around implicit return 
const bigNums = moreNums.filter(n => (
    n > 50
    ));


// Every and Some, Array methods that return a boolean
// Every will return True if every element passes a condition

const words = ['dog', 'dig', 'log', 'bag', 'wag'];

const allThreeLets = words.every( w => w.length === 3);

const allEndInG = words.every((word) => {
    let last = word.length-1;
    return word[last] === 'g';
})

const someStartWithD = words.some(word => word[0] === 'd');

// SORT

// arr.sort(compareFunc(a, b))
// if compareFunc(a, b) returns < 0 => Sort a before b

// if compareFunc(a, b) returns 0 => Keep a and b in same place

// if compreFunc(a, b) return > 0 => Sort b before a

const prices = [45, 12.50, 10, 124, 98.72, 87];

prices.sort(); // [ 10, 12.5, 124, 45, 87, 98.72 ] 

const sort1 = prices.sort((a, b) => a - b);
    // [ 10, 12.5, 45, 87, 98.72, 124 ]  Smallest to Largest

const sort2 = prices.sort((a, b) => b - a);
    // [ 124, 98.72, 87, 45, 12.5, 10 ]  Largest to Smallest


// REDUCE!!!
// Executes a reducer function on each element in the array, resulting in a single value

// arr.reduce((accumulator, currentValue) => {
//      return accumulator + currentValue;
// })

const simpleNums = [2,3,4,5,6,7,8];

const multiplyNums = simpleNums.reduce((total, currentVal) => {
    return total * currentVal;
})  // 40320


const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const maxGrade = grades.reduce((max, curGrade) => {
    // if (curGrade > max) {
    //     return curGrade;
    // }
    // return max;
    return Math.max(max, curGrade);
})

const minGrade = grades.reduce((min, curGrade) => (Math.min(min, curGrade))
)

// You can specify an initial value

const minGradeInitial = grades.reduce((min, curGrade) => {
    return Math.min(min, curGrade);
}, 25)  // 25 is the initial, but can be any JS object


// Tallying using reduce (cool)

const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'y','n','n', 'n'];

// Initialize with an object 
const results = votes.reduce((tally, currVote) => {
    // Long if/else block

    // if (tally[currVote]) {
    //     tally[currVote]++
    // }
    // else {
    //     tally[currVote] = 1;
    // }

    // Ternery block
    // (tally[currVote]) ? tally[currVote]++ : tally[currVote] = 1;

    // Boolean logic
    tally[currVote] = (tally[currVote] || 0) + 1;
    return tally;
}, {})  // { y: 5, n: 7 }