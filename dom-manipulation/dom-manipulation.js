const allLis = document.querySelectorAll('li');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// for (let i = 0; i < allLis.length; i++) {
//     allLis[i].innerText = 'WE ARE THE CHAMPIONS';
// }

allLis.forEach((li, idx) => {
    const color = colors[idx];
    li.style.color = color;
});

// Select a group, loop, manipulate each loop.

// Changing styles using JavaScript

// Style property only contains styles that have been set inline

const h1 = document.querySelector('h1');

h1.style; // EMPTY because no styles are set inline HTML

h1.style.color = 'orchid'; // sets the inline style to be orchid

// h1.style.background-color = 'green';  // This will not work.  CSS properties are kebab-case
// - is not a valid identifier character in JS, so all styles become camelCased;

h1.style.backgroundColor = 'green'; // This works.

// Inline styles override class based styling.
// This is the forEach loop above functions and overrides the teal styling of the classes.