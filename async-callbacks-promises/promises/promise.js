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

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // const rand = Math.random();
            const pages = {
                '/users' : [
                    { id : 1, username: 'Bilbo' },
                    { id : 5, username: 'Esmeralda' }
                ],
                '/about': 'This is the about page'
            }
            const data = pages[url];
            if (data) {
                resolve({ status: 200, data });
            } 
            else {
                reject({status: 404});
            } ;
        }, 2000)
    })
}

const logResolved = (res) => {
    console.log('Request worked');
    console.log('Status code: ', res.status);
    console.log('Data: ', res.data);
}

const logFailed = (res) => {
    console.log('Request failed');
    console.log(res.status);
}

fakeRequest('/users')
    .then((res) => {
        logResolved(res);
    })
    .catch((res) => {
        logFailed(res);
    })

fakeRequest('/dogs')
    .then((res) => {
        logResolved(res);
    })
    .catch((res) => {
        logFailed(res);
    })