const swapiURL = 'https://swapi.dev/api/planets/';

const fetchNextPlanets = (url = swapiURL) => {
    return axios.get(url);
}

const printPlanets = ({ data }) => {
    console.log(data);
    for (let planet of data.results) {
        console.log(planet.name);
    }
    return Promise.resolve(data.next);
}

// axios.get(swapiURL)
//     .then(({data}) => {  // destructure the results object and grab the data property as a new object
//         console.log(data);
//         for (let planet of data.results) {
//             console.log(planet.name);
//         }
//         return fetchNextPlanets(data.next);
//     })
//     .then(({ data }) => {
//         console.log(data);
//         for ( let planet of data.results ) {
//             console.log(planet.name);
//         }
//     })
//     .catch((err) => {
//         console.log('In catch callback');
//         console.log(err);
//     })

// refactored for cleanliness

fetchNextPlanets()
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(printPlanets)
    .catch((err) => {
        console.log('Error!!!', err)
    })