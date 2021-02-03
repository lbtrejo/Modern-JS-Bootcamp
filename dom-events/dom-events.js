// const btn = document.querySelector('button');

// btn.onclick = function () {
//     console.log('Click me!');
// }

// btn.onclick = function () {
//     console.log('Click 2');
// }

// The above work but the 2nd one would override the first because onclick is simply an
// object property on the btn object. 

// btn.addEventListener('click', () => {
//     alert('Clicked!  Gross.');
// });

// btn.addEventListener('click', function () {
//     console.log('2nd thing');
// })

// btn.addEventListener('mouseover', () => {
//     btn.innerText = 'Stop touching me';
// })

// btn.addEventListener('mouseout', () => {
//     btn.innerText = 'Click Me';
// })

// window.addEventListener('scroll', function() {
//     console.log('Stop scrolling');
// })

// lulz
// btn.addEventListener('mouseover', function () {
//     const randHgt = Math.floor(Math.random() * window.innerHeight);
//     const randWdt = Math.floor(Math.random() * window.innerWidth);
//     btn.style.top = `${randHgt}px`;
//     btn.style.left = `${randWdt}px`;
// })

// // window.screen returns an object showing the full dimensions of the screen, not useful for this example but good to know.

// // if the user manages to click
// btn.addEventListener('click', function () {
//     btn.innerText = 'You got me!';
//     document.body.style.backgroundColor = 'green';
// })

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const container = document.querySelector('#boxes');

const h1 = document.querySelector('h1');

const printColor = function () {
    
    // console.log(this);
    // console.log(this.style.backgroundColor);
    h1.style.color = this.style.backgroundColor;
}

for (let color of colors) {
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = color;
    colorDiv.classList.add('box');
    container.append(colorDiv);
    colorDiv.addEventListener('click', printColor);
}

h1.addEventListener('mouseover', function () {
    console.log(this.innerText);
})