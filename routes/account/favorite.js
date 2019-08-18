const router = require('express').Router();
const CustomerMiddleware = require("../../middlewares/customer");
const FavoriteService    = require("../../services/account/favorite");

router.get('/getFavoriteProducts', CustomerMiddleware, (req, res, next) => {
    new FavoriteService(req, res, next).getFavoriteProducts();
});

router.get('/removeProductFromFavorites/:product_id', CustomerMiddleware, (req, res, next) => {
    new FavoriteService(req, res, next).removeProductFromFavorites();
});

router.get('/addProductToFavorites/:product_id', CustomerMiddleware, (req, res, next) => {
    new FavoriteService(req, res, next).addProductToFavorites();
});

module.exports = router;
