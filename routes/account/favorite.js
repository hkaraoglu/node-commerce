var express = require('express');
var router   = express.Router();

var FavoriteService     = require("../../services/account/favorite");

router.get('/getFavoriteProducts', (req, res, next) => {
    new FavoriteService(req, res, next).getFavoriteProducts();
});

router.get('/removeProductFromFavorites/:product_id', (req, res, next) => {
    new FavoriteService(req, res, next).removeProductFromFavorites();
});

router.get('/addProductToFavorites/:product_id', (req, res, next) => {
    new FavoriteService(req, res, next).addProductToFavorites();
});

module.exports = router;
