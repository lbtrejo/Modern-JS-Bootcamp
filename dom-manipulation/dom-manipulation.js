const allLis = document.querySelectorAll('li');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// for (let i = 0; i < allLis.length; i++) {
//     allLis[i].innerText = 'WE ARE THE CHAMPIONS';
// }

// allLis.forEach((li, idx) => {
//     const color = colors[idx];
//     li.style.color = color;
// });

// Select a group, loop, manipulate each loop.

// Changing styles using JavaScript

// Style property only contains styles that have been set inline

const h1 = document.querySelector('h1');
const li = document.querySelector('li');

h1.style; // EMPTY because no styles are set inline HTML

// h1.style.color = 'orchid'; // sets the inline style to be orchid

// h1.style.background-color = 'green';  // This will not work.  CSS properties are kebab-case
// - is not a valid identifier character in JS, so all styles become camelCased;

// h1.style.backgroundColor = 'green'; // This works.

// Inline styles override class based styling.
// This is the forEach loop above functions and overrides the teal styling of the classes.

let styles = getComputedStyle(li);

styles.color; // returns teal as set by the special class on the element

const compStyles = getComputedStyle(h1);

compStyles.color;  // returns what is actually going on for the page

// getComputedStyle returns a massive object for every computed CSS style that is being applied to an element

// Manipulating classes 

const todo = document.querySelector('#todos .todo'); // Grabs the first todo classed element in the #todos parent

// Create a class to be added when the 'x' button is clicked
// done class has been added for this purpose. There are a couple of ways to add the class 

//todo.getAttribute('class');  // returns todo

// todo.setAttribute('class', 'done') // replaces todo with done, not ideal

// todo.setAttribute('class', 'done todo'); // also not ideal, hard coding two props, but if there are 5 classes, this would be a bad practice

todo.classList.remove('done');  // removes the 'done' class

todo.classList.add('done'); // add, duh

todo.classList.toggle('done');  // add if removed and vice versa.
// returns 'true' if added and 'false' if removed, neat!

// the 'classlist' property has quite a few useful methods

const newH2 = document.createElement('h2');  //Adds a blank h2 element

newH2.innerText = 'I like animals!';

const section = document.querySelector('section'); //

section.appendChild(newH2);

// new unsplash img 
// https://images.unsplash.com/photo-1612038032672-b94a10ce7ebd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80

const newImg = document.createElement('img');

newImg.src = 'https://images.unsplash.com/photo-1612038032672-b94a10ce7ebd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';

document.body.appendChild(newImg);

newImg.classList.toggle('image');

const newLink = document.createElement('a');

newLink.innerText = 'Click Me';
newLink.href = 'https://www.youtube.com/watch?v=S5_4wPW6jJQ';

const firstP = document.querySelector('p');

firstP.appendChild(newLink);