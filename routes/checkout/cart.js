const router = require('express').Router();
const CustomerMiddleware = require("../../middlewares/customer");
const CartService     = require("../../services/checkout/cart");

/**
 * Returns cart of a customer.
 * @route GET /checkout/cart
 * @group  - Cart
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.get('/', CustomerMiddleware, (req, res, next) => {
    new CartService(req, res, next).getCartProducts();
});

/**
 * Deletes a product from customer cart.
 * @route DELETE /checkout/cart/{product_id}
 * @group  - Cart
 * @param {string} product_id.path.required - Product ID of product
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:product_id', CustomerMiddleware, (req, res, next) => {
    new CartService(req, res, next).removeProductFromCart();
});

/**
 * Updates a product of customer cart.
 * @route PUT /checkout/cart/{product_id}
 * @group  - Cart
 * @param {string} product_id.path.required - Product ID of product
 * @param {integer} quantity.query.required - New quantity of product
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.put('/:product_id', CustomerMiddleware, (req, res, next) => {
    new CartService(req, res, next).updateQuantity();
});

/**
 * Adds a product to customer cart.
 * @route POST /checkout/cart/{product_id}
 * @group  - Cart
 * @param {string} product_id.path.required - Product ID of product
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.post('/:product_id', CustomerMiddleware, (req, res, next) => {
    new CartService(req, res, next).addProductToCart();
});

module.exports = router;
