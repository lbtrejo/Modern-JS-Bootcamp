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

const moveX = (element, amount, delay, onSuccess, onFailure) => {
        setTimeout(() => {
            const bodyBoundary = document.body.clientWidth;
            const currRight = element.getBoundingClientRect().right;
            const currLeft = element.getBoundingClientRect().left;

            if (currRight + amount > bodyBoundary) {
                onFailure();
            }
            else {
                element.style.transform = `translateX(${amount + currLeft}px)`
                onSuccess();
            }
    }, delay)
};

// moveX(btn, 100, 1000, function(){
//     moveX(btn, 100, 1000, function(){
//         moveX(btn, 100, 1000, function(){
//             moveX(btn, 100, 1000, function(){
//                 moveX(btn, 1000, 1000);
//             });
//         });
//     });
// })

moveX(btn, 100, 1000, () => {
    // success
    moveX(btn, 400, 1000, () => {
        // success
        moveX(btn, 1000, 1000, () => {
            // success
            console.log('Really?');
        }, () => {
            // failure
            alert('Cannot move further');
        })
    }, () => {
        // failure
        alert('Cannot move further');
    })
}, () => {
    // failure
    alert('Cannot move further');
})

// A promise is an object representing the eventual completion or failure of an asyunchronous operation

