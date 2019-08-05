var express = require('express');
var router  = express.Router();

var AddressRoute     = require("./address");
var FavoriteRoute    = require("./favorite");
var OrderRoute       = require("./order");

router.use('/address', AddressRoute);
router.use('/favorite', FavoriteRoute);
router.use('/order', OrderRoute);

module.exports = router;
