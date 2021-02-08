// https://swapi.dev/api/planets/

const prom = fetch('https://swapi.dev/api/planets');

const checkStatusAndParse = (response) => {
    console.log(response);
    if (!response.ok) {
        throw new Error(`Status Code Error: ${response.status}`);
    }
    else {
        return response.json();
    }
}

const printPlanets = (data) => {
    console.log('Loaded 10 planets...');
    for (let planet of data.results) {
        console.log(planet.name);
    }
    return Promise.resolve(data.next);  // Easily return a resolved promise so the next then callback can function properly
}

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
    return fetch(url);
};

// Proper refactor after moving redundant code into functions returning promises

// prom.then(checkStatusAndParse)
fetchNextPlanets()
    .then(checkStatusAndParse)
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(checkStatusAndParse)
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(checkStatusAndParse)
    .then(printPlanets)
.catch((err) => {
    console.log('Something went wrong with fetch');
    console.log(err);
})

// fetch('https://swapi.dev/api/planets/')
//     .then((response) => {
//         return checkStatusAndParse(response);
//     })
//     .then((data) => {
//         console.log('Fetched all planets (first 10)');
//         // console.log(data);
//         for (let planet of data.results) {
//             console.log(planet.name);
//         }
//         const nextURL = data.next;
//         const filmURL = data.results[0].films[0];
//         return fetch(nextURL);
//         // return fetch(filmURL);
//     })
//     .then((response) => {
//         return checkStatusAndParse(response);
//     })
//     .then((data) => {
//         // console.log('Fetched first firm, based off first planet');
//         console.log('Fetched next 10 planets')
//         // console.log(data.title);
//         for (let planet of data.results) {
//             console.log(planet.name);
//         }
//     })
//     .catch((error) => {
//         console.error('Fetch error: ', error);
//     })