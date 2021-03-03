const express = require('express');
const bodyParser = require('body-parser');
const usersRepo = require('./repositories/users');

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
app.post('/', async (req, res) => {
    const { email, password, passwordConfirmation } = req.body;
    const existingUser = await usersRepo.getOneBy({ email });

    if (existingUser) {
        return res.send('Email in use');
    }
    if (password !== passwordConfirmation) {
        return res.send('Passwords do not match');
    }
    await usersRepo.create({ email, password });
    const dbUser = await usersRepo.getOneBy({ email });
    res.send(`Account created with id: ${dbUser.id}`);
});

app.listen(3000, () => {
    console.log('Listening');
});
