const express = require('express');
const { validationResult } = require('express-validator');

const usersRepo = require('../../repositories/users');
const signupTemplate = require('../../views/admin/auth/signup');
const signinTemplate = require('../../views/admin/auth/signin');
const {
    requireEmail,
    requirePassword,
    requirePasswordConfirmation,
    requireEmailExists,
    requireValidPasswordForUser,
} = require('./validators');

const router = express.Router();

// setup a route handler for a get on the root
router.get('/signup', (req, res) => res.send(signupTemplate({ req })));

// setup a route handler for posting the sign up form data to
router.post(
    '/signup',
    [requireEmail, requirePassword, requirePasswordConfirmation],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.send(signupTemplate({ req, errors }));
        }

        const { email, password } = req.body;
        const dbUser = await usersRepo.create({ email, password });

        // Store the ID of that user inside the users cookie
        req.session.userId = dbUser.id;

        return res.send(`Account created with id: ${dbUser.id}`);
    },
);

router.get('/signout', (req, res) => {
    req.session = null; // Clear out the cookie data
    res.send('You are logged out');
});

router.get('/signin', (req, res) => {
    res.send(signinTemplate({}));
});

router.post('/signin', [requireEmailExists, requireValidPasswordForUser], async (req, res) => {
    const { email } = req.body;
    const existingUser = await usersRepo.getOneBy({ email });
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.send(signinTemplate({ errors }));
    }
    // issue session cookie
    req.session.userId = existingUser.id;

    // issue response confirming login
    return res.send('You are signed in');
});

module.exports = router;
