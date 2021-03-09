const express = require('express');

const router = express.Router();

router.get('/admin/products', (req, res) => {
    res.send('Products page');
});

router.get('/admin/products/new', (req, res) => {
    res.send('New products page');
});

module.exports = router;
