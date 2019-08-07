var express = require('express');
var router   = express.Router();

var CartService     = require("../../services/checkout/cart");

router.get('/getCartProducts', (req, res, next) => {
    new CartService(req, res, next).getCartProducts();
});

router.get('/removeProductFromCart/:product_id', (req, res, next) => {
    new CartService(req, res, next).removeProductFromCart();
});

router.get('/updateQuantity/:product_id', (req, res, next) => {
    new CartService(req, res, next).updateQuantity();
});

router.get('/addProductToCart/:product_id', (req, res, next) => {
    new CartService(req, res, next).addProductToCart();
});

module.exports = router;
