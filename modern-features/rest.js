// Rest
// Uses similar notation to spread (...), but indicates a variable number of arguments

// MDN Def: The rest parameter syntax allows a function to accept 
// an indefinite number of arguments as an array, providing a way 
// to represent variadic functions in JavaScript.

// Old style: The arguments object
// arguments is an Array-like object available in every function

// Loop through the arguments object for variable parameters
function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}

sumAll(2, 3, 4); // 9
sumAll(6, 2, 1, 6); // 15

// Limitations of the arg object

// Arguments object is not a REAL array, have to convert first before usage
// Arguments includes all args, no way to collect remaining variable args
// Arguments object does not work in => functions

function sum(...nums){  // Collection all REMAINING args into nums array
    console.log(nums);
    return nums.reduce((total, curVal) => {
        return total += curVal;
    })
}

function fullName(first, last, ...titles) {
    console.log('first:', first);
    console.log('last: ', last);
    console.log('titles: ', titles);
}

fullName("Levi", "Johnson", "III", "Esquire");

const multiply = (...nums) => (
    nums.reduce((total, curVal) => total * curVal)
);