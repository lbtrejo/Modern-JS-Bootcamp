const express = require('express');
const cartsRepo = require('../repositories/carts');

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

    res.send('product added to cart');
});

// Receive a get request to show all items in a cart

// Receive a post request to delete an item from a cart

module.exports = router;
