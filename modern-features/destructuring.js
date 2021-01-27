// Destructuring
// Short, clean way to "unpack" (destructure)
// - values from Arrays
// - properties from Objects

// Destructuring Arrays

const raceResults = [
    'Eliud Kipchoge',
    'Feyisa Lilesa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward'
];

// const gold = raceResults[0]
// const silver = raceResults[1]
// const bronze = raceResults[2]

const [gold, silver, bronze] = raceResults; // same as 17-19
const [, , third, fourth] = raceResults; // skipping elements
const [winner, second, ...others] = raceResults; // rest to collect remainin


// Destructuring objects
const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golden Heart of Kenya"
}

// const {first, last, time} = runner;

// first; // "Eliud"
// last; // "Kipchoge"
// time; // undefined - time is not a KEY in the runner Obj

// Variable assigned to prop value
const {
    country: nation, 
    title: honorific
} = runner;

nation; // "Kenya"
honorific; // "Elder of the Order of the Golden Heart of Kenya"

const {
    first,
    last,
    ...other
} = runner;

first; //
last; // 
other; // { country: "Kenya", title: "Elder of the Order of the Golden Heart of Kenya" }


//  Nested destructuring

const results = [{
        first: "Eliud",
        last: "Kipchoge",
        country: "Kenya"
    },
    {
        first: "Feyisa",
        last: "Lilesa",
        country: "Ethiopia"
    },
    {
        first: "Galen",
        last: "Rupp",
        country: "United States"
    }
]

const [{first: goldWinner}, {country}] = results;  

country; // "Ethiopia"
goldWinner; // "Eliud"

// Same as above ^
// const [, silverMedal] = results;
// const {country} = silverMedal;


// Destructuring parameters

// const print = person => {
//     const {
//         first,
//         last,
//         title
//     } = person;
//     console.log(`${first} ${last}, ${title}`)
// }; 

// print(runner);
// Eliud Kipchoge, Elder of the Order of the Golden Heart of Kenya

// Destructure the param from above
const print = ({first, last, title}) => {
    console.log(`${first} ${last}, ${title}`)
}

const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json'
];

function parseResponse([protocol, statusCode, contentType]){
    console.log(`Status: ${statusCode}`);
};