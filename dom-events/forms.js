const form = document.querySelector('#signupForm');
const creditCardInput = document.querySelector('#cc');
const termsCheck = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

// form.addEventListener('submit', function(e) {
//     // alert('Form submitted');
//     e.preventDefault();
//     console.log(e);
//     console.log('cc', creditCardInput.value);
//     // console.log('terms', termsCheck.value);  // returns on 
//     console.log('terms', termsCheck.checked); // returns boolean
//     console.log('veggie', veggieSelect.value);
// })


// Input and change events

// input events update on every single input
// change events only work on text field loses focus (blurring) or a return is hit in the field

// real time input data being kept in a JS object
const formData = {};

for (let input of [creditCardInput, termsCheck, veggieSelect]) {
    input.addEventListener('input', ({ target }) => {
        const { name, type, value, checked } = target;
        // console.log(name) // checking to use the name to the formData object
        formData[name] = type === 'checkbox' ? checked : value;
        console.log(formData);
    })
    
}

// creditCardInput.addEventListener('input', (e) => {
//     console.log(e);
//     formData['cc'] = e.target.value;
// })

// veggieSelect.addEventListener('input', (e) => {
//     console.log(e);
//     formData['veggie'] = e.target.value;
// })

// terms.addEventListener('input', (e) => {
//     console.log(e);
//     formData['agreeToTerms'] = e.target.checked;
// })

// combine the 3 above into a single listener