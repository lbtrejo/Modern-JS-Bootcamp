const express = require('express');
const { validationResult } = require('express-validator');
const multer = require('multer');

const productsRepo = require('../../repositories/products');
const productsNewTemplate = require('../../views/admin/products/new');
const { requireTitle, requirePrice } = require('./validators');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get('/admin/products', (req, res) => {
    res.send('Products page');
});

router.get('/admin/products/new', (req, res) => {
    res.send(productsNewTemplate({}));
});

router.post(
    '/admin/products/new',
    [requireTitle, requirePrice],
    upload.single('image'),
    async (req, res) => {
        const errors = validationResult(req);

        console.log(req.file);

        if (!errors.isEmpty()) {
            return res.send(productsNewTemplate({ errors }));
        }

        const { title, price } = req.body;
        const dbProduct = await productsRepo.create({ title, price });

        return res.send(`Product created with title: ${dbProduct.title} and id: ${dbProduct.id}`);
    },
);

module.exports = router;
