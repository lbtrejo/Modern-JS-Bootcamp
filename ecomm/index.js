const express = require('express');

const app = express();

// setup a route handler for a get on the root
app.get('/', (request, response) => {
    // normally noted as req and res
    response.send(`
        <div>
            <form method="POST" >
                <input name="email" placeholder="email" />
                <input name="password" placeholder="password" />
                <input name="passwordConfirmation" placeholder="password confirmation" />
                <button>Sign Up</button>
            </form>
        </div>
    `);
});

// setup a route handler for posting the sign up form data to
app.post('/', (req, res) => {
    req.on('data', (data) => {
        const parsed = data.toString('utf8').split('&');
        const formData = {}; // initialize a formData object
        for (const pair of parsed) {
            // iterate over the parsed data array and create key:value pairs to add to formData
            const [key, value] = pair.split('=');
            formData[key] = value;
        }
        console.log(formData);
    });
    res.send('Account Created!');
});

app.listen(3000, () => {
    console.log('Listening');
});
