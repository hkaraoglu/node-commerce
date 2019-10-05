const router = require('express').Router();
const CustomerMiddleware = require("../../middlewares/customer");
const FavoriteService    = require("../../services/account/favorite");

/**
 * Returns favorite products list of a customer.
 * @route GET /account/favorite
 * @group  - Favorite
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.get('/', CustomerMiddleware, (req, res, next) => {
    new FavoriteService(req, res, next).getFavoriteProducts();
});

/**
 * Delete a favorite product from customer favorite products list.
 * @route DELETE /account/favorite/{favorite_id}
 * @param {string} favorite_id.path.required - Product ID of product
 * @group  - Favorite
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:product_id', CustomerMiddleware, (req, res, next) => {
    new FavoriteService(req, res, next).removeProductFromFavorites();
});

/**
 * Add a product to customer's favorite products list.
 * @route POST /account/favorite/{address_id}
 * @group  - Favorite
 * @param {string} favorite_id.path.required - Product ID of product
 * @returns {object} 200 - Detail of product
 * @returns {Error}  default - Unexpected error
 */
router.post('/:product_id', CustomerMiddleware, (req, res, next) => {
    new FavoriteService(req, res, next).addProductToFavorites();
});

module.exports = router;
