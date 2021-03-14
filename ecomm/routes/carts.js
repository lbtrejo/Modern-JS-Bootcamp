const express = require('express');
const cartsRepo = require('../repositories/carts');
const productsRepo = require('../repositories/products');
const cartShowTemplate = require('../views/carts/show');

const router = express.Router();

// Receive a post request to add an item to a cart
router.post('/cart/products', async (req, res) => {
    let cart;
    // Figure out the cart
    if (!req.session.cartId) {
        // Create a cart
        cart = await cartsRepo.create({ items: [] });

        // Store the cartId in the session
        req.session.cartId = cart.id;
    } else {
        // Get the cart from the repo
        cart = await cartsRepo.getOne(req.session.cartId);
    }

    const existingItem = cart.items.find((item) => item.id === req.body.productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.items.push({ id: req.body.productId, quantity: 1 });
    }

    await cartsRepo.update(cart.id, { items: cart.items });

    return res.redirect('/cart');
});

// Receive a get request to show all items in a cart
router.get('/cart', async (req, res) => {
    if (!req.session.cartId) {
        return res.redirect('/');
    }

    const cart = await cartsRepo.getOne(req.session.cartId);

    // eslint-disable-next-line no-restricted-syntax
    for (const item of cart.items) {
        // item: { id, quantity}
        // eslint-disable-next-line no-await-in-loop
        const product = await productsRepo.getOne(item.id);

        // temporarily add product to card for passing to carts template
        item.product = product;
    }

    return res.send(cartShowTemplate({ items: cart.items }));
});

// Receive a post request to delete an item from a cart
router.post('/cart/products/delete', async (req, res) => {
    const { itemId } = req.body;
    const cart = await cartsRepo.getOne(req.session.cartId);
    const items = cart.items.filter((item) => item.id !== itemId);

    await cartsRepo.update(cart.id, { items });

    return res.redirect('/cart');
});

module.exports = router;
