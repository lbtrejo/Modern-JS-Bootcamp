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
const makeDogPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            console.log(rand);
            (rand < 0.5) ? resolve() : reject();
        }, 5000)
    });
}

// const willGetDog = new Promise((resolve, reject) => {
//     // reject();
//     // resolve();
//     setTimeout(() => {
//         const rand = Math.random();
//         console.log(rand);
//         (rand < 0.5) ? resolve() : reject();
//     }, 5000)
// });

makeDogPromise()
    .then(() => {
    console.log('YAS we got a dog!');
})
    .catch(() => {
    console.log('Boo, no dog :(');
})