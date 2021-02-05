// https://swapi.dev/api/planets/

const prom = fetch('https://swapi.dev/api/planetszzzzz');

prom.then((response) => {
    //console.log(response); // response object, has interesting properties such as status, ok, and a body property
    //console.log(response.json()); // The json method reads the stream to completion, but takes time so it returns a promise as well
    if (response.ok) {
        response.json().then((data) => {
            for (let planet of data.results) {
                console.log(planet.name);
            }
        })
    } else {
        throw new Error(`Status Code Error: ${response.status}`);
    }
    
})
.catch((err) => {  // Generally requires a network failure, won't fire on 4xx or 5xx HTTP status!!!
    console.error(err);
})

fetch('https://swapi.dev/api/planets/')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Status Code Error: ${response.status}`);
        }
        else {
            return response.json();
        }
    })
    .then((data) => {
        console.log('Fetched all planets (first 10)');
        const filmURL = data.results[0].films[0];
        return fetch(filmURL);
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Status Code Error: ${response.status}`);
        }
        else {
            return response.json();
        }
    })
    .then((data) => {
        console.log('Fetched first firm, based off first planet');
        console.log(data.title);
    })
    .catch((error) => {
        console.error('Fetch error: ', error);
    })