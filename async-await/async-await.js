// The async keyword

// function greet() {
//     return 'Hello!';
// }

async function greet() {
        return 'Hello!';
}

// greet().then((val) => {
//     console.log('Promise resolved with: ', val);
// })

async function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw 'X and Y must be numbers';  // throw an error to cause a rejected promise return
    }
    return x + y;  // otherwise the default return is a resolved promise
}

//add(2, 4) // return 6 in a resolved promise

//add('x', 8) // throws our custom error in a rejected promise

// The await keyword

// function getPlanets() {
//     return axios.get('https://swapi.dev/api/planets/')
// }

// getPlanets().then((res) => {
//     console.log(res.data);
// })

// async function getPlanets() {
//     // const res = await axios.get('https://swapi.dev/api/planets/');
//     const res = await axios.get('https://swapi.dev/api/planetszzzz/');
//     console.log(res.data);  // only runs once the previous line is complete
// }

// // async function
// // getPlanets();
// getPlanets().catch((err) => {
//     console.log('In catch: ', err)
// })

async function getPlanets() {
    try {
        const res = await axios.get('https://swapi.dev/api/planets/');
        console.log(res.data);
    }
    catch (err) {
        console.log('In catch: ', err);
    }
}

// getPlanets();

// updated moveX function from previous promises

const moveX = (element, amount, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bodyBoundary = document.body.clientWidth;
            const elRight = element.getBoundingClientRect().right;
            const currLeft = element.getBoundingClientRect().left;

            if(elRight + amount > bodyBoundary) {
                reject({ bodyBoundary, elRight, amount });
            }
            else {
                element.style.transform = `translateX(${currLeft + amount}px)`;
                resolve();
            }
        }, delay);
    });
}

const btn = document.querySelector('button');

async function animateRight(el, amt) {
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
}

animateRight(btn, 100).catch((err) => {
    console.log('Error!!!', err);
    animateRight(btn, -100)
});