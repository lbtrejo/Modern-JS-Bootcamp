const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

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
    console.log(req.body);
    res.send('Account Created!!!');
});

app.listen(3000, () => {
    console.log('Listening');
});
