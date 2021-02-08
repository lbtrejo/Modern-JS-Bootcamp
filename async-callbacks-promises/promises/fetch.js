// https://swapi.dev/api/planets/

const prom = fetch('https://swapi.dev/api/planets');

prom.then((response) => {
    //console.log(response); // response object, has interesting properties such as status, ok, and a body property
    //console.log(response.json()); // The json method reads the stream to completion, but takes time so it returns a promise as well
    if (!response.ok) {
        throw new Error(`Status Code Error: ${response.status}`);
        // response.json().then((data) => {
        //     console.log(data);
        //     for (let planet of data.results) {
        //         console.log(planet.name);
        //     }
        // })
    }
    return response.json();
})
.then((data) => {
    // console.log(data);
    // for (let planet of data.results) {
        // console.log(planet);
        // console.log(planet.name);
    // }
    const filmURL = data.results[0].films[0];
    return fetch(filmURL);
})
.then((response) => {
    if (!response.ok) {
        throw new Error(`Status Code Error: ${response.status}`);
    }
    return response.json();
})
.then((data) => {
    console.log('Fetched first film based off first planet');
    console.log(data.title);
})
.catch((err) => {  // Generally requires a network failure, won't fire on 4xx or 5xx HTTP status!!!
    console.error(err);
})

const checkStatusAndParse = (response) => {
    console.log(response);
    if (!response.ok) {
        throw new Error(`Status Code Error: ${response.status}`);
    }
    else {
        return response.json();
    }
}

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