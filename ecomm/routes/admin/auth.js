const express = require('express');

const { handleErrors } = require('./middlewares');
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

router.get('/signup', (req, res) => res.send(signupTemplate({ req })));

router.post(
    '/signup',
    [requireEmail, requirePassword, requirePasswordConfirmation],
    handleErrors(signupTemplate),
    async (req, res) => {
        const { email, password } = req.body;
        const dbUser = await usersRepo.create({ email, password });

        req.session.userId = dbUser.id;
        return res.redirect('/admin/products');
    },
);

router.get('/signout', (req, res) => {
    req.session = null; // Clear out the cookie data
    res.send('You are logged out');
});

router.get('/signin', (req, res) => {
    res.send(signinTemplate({}));
});

router.post(
    '/signin',
    [requireEmailExists, requireValidPasswordForUser],
    handleErrors(signinTemplate),
    async (req, res) => {
        const { email } = req.body;
        const existingUser = await usersRepo.getOneBy({ email });

        req.session.userId = existingUser.id;

        return res.redirect('/admin/products');
    },
);

module.exports = router;
