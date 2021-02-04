const btn = document.querySelector('button');

// setTimeout(() => {
//     btn.style.transform = `translateX(100px)`;
//     setTimeout(() => {
//         btn.style.transform = `translateX(200px)`;
//         setTimeout(() => {
//             btn.style.transform = `translateX(300px)`;
//             setTimeout(() => {
//                 btn.style.transform = `translateX(400px)`;
//                 setTimeout(() => {
//                     btn.style.transform = `translateX(500px)`;
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000)

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//         setTimeout(() => {
//             const bodyBoundary = document.body.clientWidth;
//             const currRight = element.getBoundingClientRect().right;
//             const currLeft = element.getBoundingClientRect().left;

//             if (currRight + amount > bodyBoundary) {
//                 onFailure();
//             }
//             else {
//                 element.style.transform = `translateX(${amount + currLeft}px)`
//                 onSuccess();
//             }
//     }, delay)
// };

// moveX(btn, 100, 1000, function(){
//     moveX(btn, 100, 1000, function(){
//         moveX(btn, 100, 1000, function(){
//             moveX(btn, 100, 1000, function(){
//                 moveX(btn, 1000, 1000);
//             });
//         });
//     });
// })

// moveX(btn, 100, 1000, () => {
//     // success
//     moveX(btn, 400, 1000, () => {
//         // success
//         moveX(btn, 1000, 1000, () => {
//             // success
//             console.log('Really?');
//         }, () => {
//             // failure
//             alert('Cannot move further');
//         })
//     }, () => {
//         // failure
//         alert('Cannot move further');
//     })
// }, () => {
//     // failure
//     alert('Cannot move further');
// })

// A promise is an object representing the eventual completion or failure of an asyunchronous operation

// Refactoring above to utilize promise chaining

const moveX = (element, amount, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bodyBoundary = document.body.clientWidth;
            const currRight = element.getBoundingClientRect().right;
            const currLeft = element.getBoundingClientRect().left;
    
            if (currRight + amount > bodyBoundary) {
                reject({ bodyBoundary, currRight, amount});
            }
            else {
                element.style.transform = `translateX(${amount + currLeft}px)`;
                resolve();
            }
        }, delay);
    })
};

// moveX(btn, 300, 1000)
//     .then(() => {
//         console.log('button moved');
//         return moveX(btn, 300, 1000);
//     })
//     .then(() => {
//         console.log('button moved again')
//         return moveX(btn, 300, 1000);
//     })
//     .then(() => {
//         console.log('button moved again')
//         return moveX(btn, 300, 1000);
//     })
//     .then(() => {
//         console.log('button moved again')
//         return moveX(btn, 300, 1000);
//     })
//     .then(() => {
//         console.log('button moved again')
//         return moveX(btn, 300, 1000);
//     })
//     .catch((err) => {
//         console.error('Out of space, cannot move');
//     })

// Making more efficient with IMPLICIT return
    moveX(btn, 300, 1000)
    .then(() => moveX(btn, 300, 1000))
    .then(() => moveX(btn, 300, 1000))
    .then(() => moveX(btn, 300, 1000))
    .then(() => moveX(btn, 300, 1000))
    .then(() => moveX(btn, 300, 1000))
    .catch(({ bodyBoundary, currRight, amount }) => {
        console.error('Out of space, cannot move');
        console.log(`Body is ${bodyBoundary}px wide.`);
        console.log(`Element is at ${currRight}, ${amount}px is too large!`)
    })