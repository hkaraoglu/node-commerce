var express = require('express');
var router  = express.Router();

var AddressRoute      = require("./address");
var FavoriteRoute      = require("./favorite");

router.use('/address', AddressRoute);
router.use('/favorite', FavoriteRoute);

module.exports = router;
