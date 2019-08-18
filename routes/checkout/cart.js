const router = require('express').Router();
const CustomerMiddleware = require("../../middlewares/customer");
const CartService     = require("../../services/checkout/cart");

router.get('/', CustomerMiddleware, (req, res, next) => {
    new CartService(req, res, next).getCartProducts();
});

router.delete('/:product_id', CustomerMiddleware, (req, res, next) => {
    new CartService(req, res, next).removeProductFromCart();
});

router.put('/:product_id', CustomerMiddleware, (req, res, next) => {
    new CartService(req, res, next).updateQuantity();
});

router.post('/:product_id', CustomerMiddleware, (req, res, next) => {
    new CartService(req, res, next).addProductToCart();
});

module.exports = router;
