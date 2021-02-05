// const willGetDog = new Promise((resolve, reject) => {
//     // reject();
//     // resolve();
//     const rand = Math.random();
//     console.log(rand);
//     (rand < 0.5) ? resolve() : reject();
// });

// willGetDog.then(() => {
//     console.log('YAS we got a dog!');
// })
// .catch(() => {
//     console.log('Boo, no dog :(');
// })

// Have a function RETURN a promise!
// const makeDogPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const rand = Math.random();
//             console.log(rand);
//             (rand < 0.5) ? resolve() : reject();
//         }, 5000)
//     });
// }

// const willGetDog = new Promise((resolve, reject) => {
//     // reject();
//     // resolve();
//     setTimeout(() => {
//         const rand = Math.random();
//         console.log(rand);
//         (rand < 0.5) ? resolve() : reject();
//     }, 5000)
// });

// makeDogPromise()
//     .then(() => {
//     console.log('YAS we got a dog!');
// })
//     .catch(() => {
//     console.log('Boo, no dog :(');
// })

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // const rand = Math.random();
//             const pages = {
//                 '/users' : [
//                     { id : 1, username: 'Bilbo' },
//                     { id : 5, username: 'Esmeralda' }
//                 ],
//                 '/users/1' : {
//                     id: 1,
//                     username: 'Bilbo',
//                     upvotes: 360,
//                     city: 'Lisbon',
//                     topPostId: 472312
//                 },
//                 '/users/5' : {
//                     id: 5,
//                     username: 'Esmeralda',
//                     upvotes: 571,
//                     city: 'Honolulu'
//                 },
//                 '/posts/472312': {
//                     id : 472312,
//                     title: 'Ladies & Gentlemen, may I introduce my pet pig "Hamlet"'
//                 },
//                 '/about': 'This is the about page'
//             }
//             const data = pages[url];
//             if (data) {
//                 resolve({ status: 200, data });
//             } 
//             else {
//                 reject({status: 404});
//             } ;
//         }, 2000)
//     })
// }

// const logResolved = (res) => {
//     console.log('Request worked');
//     console.log('Status code: ', res.status);
//     console.log('Data: ', res.data);
// }

// const logFailed = (res) => {
//     console.log('Request failed');
//     console.log(res.status);
// }

// fakeRequest('/users')
//     .then((res) => {
//         logResolved(res);
//     })
//     .catch((res) => {
//         logFailed(res);
//     })

// fakeRequest('/dogs')
//     .then((res) => {
//         logResolved(res);
//     })
//     .catch((res) => {
//         logFailed(res);
//     })

// Promise nesting, not a great solution but works
// The answer is promise chaining
// fakeRequest('/users')
//     .then((res) => {
//         const id = res.data[0].id;
//         fakeRequest(`/users/${id}`)
//             .then((res) => {
//                 console.log(res);
//                 const post = res.data.topPostId;
//                 fakeRequest(`/posts/${post}`)
//                     .then((res) => {
//                         console.log(res);
//                     })
//             })
//     })
//     .catch((err) => {
//         console.log('Oh no!', err);
//     });

// Glorious promise chaining
// fakeRequest('/users')
//     .then((res) => {
//         console.log(res);
//         const id = res.data[0].id;
//         return fakeRequest(`/users/${id}`)
//     })
//     .then((res) => {
//         console.log(res);
//         const post = res.data.topPostId;
//         return fakeRequest(`/posts/${post}`)
//     })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {  // this catch block applies to all previous then chains
//         console.log('Oh no...', err)
//     })

// Old school XMLHttpRequests

const firstReq = new XMLHttpRequest();

firstReq.addEventListener('load', function () {  // Assign a load callback
    console.log('IT WORKED!!!');
    const data = JSON.parse(this.responseText);
    // for (let planet of data.results) {
    //     console.log(planet.name)
    // }
    console.log(data.results[0].films[0])
    const filmURL = data.results[0].films[0];
    const filmReq = new XMLHttpRequest();
    filmReq.addEventListener('load', function () {
        console.log('Second Request Worked');
        const filmData = JSON.parse(this.responseText);
        console.log(filmData);
    })
    filmReq.addEventListener('error', function (e) {
        console.log('ERROR!', e)
    })
    filmReq.open('GET', filmURL);
    filmReq.send();
});

firstReq.addEventListener('error', () => { // Assign an error callback
    console.log('Error!!!');
});

firstReq.open('GET', 'https://swapi.dev/api/planets/') // Tell the object what to call and how
firstReq.send();  // Make the call

console.log('Request Sent');
