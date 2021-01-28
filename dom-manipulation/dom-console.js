const h1 = document.querySelector('h1');
const ul = document.querySelector('ul');
const p = document.querySelector('#main');
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const a = document.querySelector('a');
const img = document.querySelector('img');
const range = document.querySelector('input[type="range"]');
const firstLI = document.querySelector('li');

h1.innerText; // "My webpage"
ul.innerText; // "First thing\nSecond Thing\nThird Thing"

ul.innerText = 'IM A BIG UL' //  Removes all of the li elements and assoc text, leaves just new text

document.body.innerText;  // Shows all text showing in the page

h1.textContent; // another method to return the full text of an element
                // Major diff: text content returns spacing and all text, see script tag below


p.innerText; // "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi aliquam, iure asperiores quo nemo sequi sint, sit, adipisci quam non reprehenderit laborum eos mollitia architecto atque? Saepe corrupti vero sit."

p.textContent;  // "Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                // Animi aliquam, iure asperiores quo nemo sequi sint, sit, 
                //     adipisci quam non reprehenderit laborum eos mollitia architecto atque? 
                // Saepe corrupti vero sit.
                // console.log(\"Dont @ me\")
                // "

form.innerText; // "  "

form.innerHTML; // "
                // <input type=\"text\" placeholder=\"bear name\">
                // <input type=\"password\" placeholder=\"password\">
                // <input type=\"submit\">
                // "

h1.innerHTML += 'is cool';


// Value, src, href, and get/set Attribute


inputs[0].value;  // taco

inputs[2].value; // "on" for the checkbox
inputs[2].checked; // true if checked, false otherwise

inputs[1].placeholder; // 'password'
inputs[1].placeholder = 'Enter a password'; // Updated placeholder text

a.href; // returns the link embedded in the anchor tag
a.href = 'https://google.com';

img.src; // the src link to our image file
img.src = 'http://path.to.new.image.file.com/'; 


range.getAttribute('max'); // 500
range.getAttribute('type'); // "range"

range.setAttribute('type', 'radio'); // Straightforwards

// Finding parent, children, or sibling elements