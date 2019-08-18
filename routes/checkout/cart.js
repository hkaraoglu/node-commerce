const router = require('express').Router();
const CustomerMiddleware = require("../../middlewares/customer");
const CartService     = require("../../services/checkout/cart");

router.get('/getCartProducts', CustomerMiddleware, (req, res, next) => {
    new CartService(req, res, next).getCartProducts();
});

router.get('/removeProductFromCart/:product_id', CustomerMiddleware, (req, res, next) => {
    new CartService(req, res, next).removeProductFromCart();
});

router.get('/updateQuantity/:product_id', CustomerMiddleware, (req, res, next) => {
    new CartService(req, res, next).updateQuantity();
});

router.get('/addProductToCart/:product_id', CustomerMiddleware, (req, res, next) => {
    new CartService(req, res, next).addProductToCart();
});

module.exports = router;
