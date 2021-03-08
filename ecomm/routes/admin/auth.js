const express = require('express');
const usersRepo = require('../../repositories/users');
const signupTemplate = require('../../views/admin/auth/signup');
const signinTemplate = require('../../views/admin/auth/signin');

const router = express.Router();

// setup a route handler for a get on the root
router.get('/signup', (req, res) => {
    // normally noted as req and res
    res.send(signupTemplate({ req }));
});

// setup a route handler for posting the sign up form data to
router.post('/signup', async (req, res) => {
    const { email, password, passwordConfirmation } = req.body;
    const existingUser = await usersRepo.getOneBy({ email });

    if (existingUser) {
        return res.send('Email in use');
    }
    if (password !== passwordConfirmation) {
        return res.send('Passwords do not match');
    }

    // Create a user in the repo for the new user
    const dbUser = await usersRepo.create({ email, password });

    // Store the ID of that user inside the users cookie
    req.session.userId = dbUser.id; // Added by cookie session

    return res.send(`Account created with id: ${dbUser.id}`);
});

router.get('/signout', (req, res) => {
    req.session = null; // Clear out the cookie data
    res.send('You are logged out');
});

router.get('/signin', (req, res) => {
    res.send(signinTemplate());
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await usersRepo.getOneBy({ email });

    if (!existingUser) {
        // email isn't valid
        return res.send('Email not found');
    }

    const validPassword = await usersRepo.comparePasswords(existingUser.password, password);
    // verify passwords match
    if (!validPassword) {
        return res.send('Invalid password');
    }
    // issue session cookie
    req.session.userId = existingUser.id;

    // issue response confirming login
    return res.send('You are signed in');
});

module.exports = router;
