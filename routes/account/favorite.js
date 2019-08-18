const router = require('express').Router();
const CustomerMiddleware = require("../../middlewares/customer");
const FavoriteService    = require("../../services/account/favorite");

router.get('/', CustomerMiddleware, (req, res, next) => {
    new FavoriteService(req, res, next).getFavoriteProducts();
});

router.delete('/:product_id', CustomerMiddleware, (req, res, next) => {
    new FavoriteService(req, res, next).removeProductFromFavorites();
});

router.post('/:product_id', CustomerMiddleware, (req, res, next) => {
    new FavoriteService(req, res, next).addProductToFavorites();
});

module.exports = router;
