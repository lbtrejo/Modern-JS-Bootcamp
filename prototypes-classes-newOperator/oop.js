// function hex(r, g, b) {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// }

// function rbg(r, g, b) {
//     return `rgb(${r}, ${g}, ${b})`;
// }

// // factory function, makes and returns an object every time it is called

// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const {r, g, b} = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     }
//     color.hex = function () {
//         const {r, g, b} = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     return color;
// }

// const firstColor = makeColor(123, 234, 45);
// const secondColor = makeColor(0, 255, 0);

// firstColor.hex(); // "#7bea2d"
// firstColor.rgb(); // "rgb(123, 234, 45)"

// firstColor.hex === secondColor.hex // returns FALSE, since each function is defined on the color object and have different reference values


// Factory functions do their job, but they are not the ideal approach for creating objects.
// Enter, contrustor functions

// replaces the makeColor function above

// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     console.log(this);
// }

// // Define the rgb method on the prototype object INSTEAD of each object instance
// Color.prototype.rgb = function () {
//     const {r, g, b} = this;
//     return `rgb(${r}, ${g}, ${b})`;
// }

// Color.prototype.hex = function () {
//     const {r, g, b} = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// Color.prototype rgba = function (a = 1.0) {
//     const {r, g, b } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// }

// Color(255, 0 , 0); // undefined, 'this' refers to the window object

// // The 'new' operator

// // Creates a blank, plain JavaScript Object;
// // Links (seats the constructor of) this object to another object;
// // Passes the newly created object from Step 1 as the this context;
// // Returns this if the function doesn't return its own object.

// const color1 = new Color(255, 30, 50);  // returns the new color object!
// const color2 = new Color(0, 30, 0);  // returns the new color object!

// color1.hex === color2.hex // returns TRUE, the function is set at the prototype level so each method references the same exact function

// Defining the prototype object and methods separately is still a bit clunky
// Enter the Class keyword

class Color {
    constructor(r, g, b, name) {
        console.log('Inside constructor');
        console.log(r, g, b);
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    greet() {
        console.log(`Hello from ${this.name}`);
    }
    hex() {
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    innerRGB() {
        const {r, g, b} = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }
}

// The class keyword and constructor function are REQUIRED!!!!!

const c1 = new Color(255, 67, 89, 'tomato');