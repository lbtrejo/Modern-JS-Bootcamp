const sayings = [
    "literally",
    "simpleton",
    "YOLOSWAG",
    "420NoScope",
    "I can't even"
];

// First attempt, setTimeout behavior is odd, prints them all at once

// const pickOne = (arr) => {
//     const randVal = Math.floor(Math.random() * arr.length);
//     console.log(arr[randVal]);
// }

// for (let i = 0; i < 10; i++) {
//     setTimeout(pickOne(sayings), 3000);
// }

// Guided solution using setInterval

const annoyer = {
    phrases: sayings,
    pickPhrase() {
        const {phrases} = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx];
    },
    start() {
        // console.log(this);  // this references the annoyer object scope
        // const that = this;  // Making a variable to reference the previous this scope
        // setInterval(function() {
        //     console.log('asdfadf');
        //     console.log(this); // this references the WINDOW scope, window is where setInterval is invoked
        // }, 1500);  // Usage of an arrow function can bypass this behavior since arrow function dont have a this of their own, they reference the invoked parent scope of this
        this.timerId = setInterval(() => {  // we need to set an ID to clear in stop()
            console.log(this.pickPhrase());
        }, 2000)

    },
    stop() {
        clearInterval(this.timerId); 
    }
}