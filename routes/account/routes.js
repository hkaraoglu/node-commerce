const router         = require('express').Router();
const AddressRoute   = require("./address");
const FavoriteRoute  = require("./favorite");
const OrderRoute     = require("./order");

router.use('/address', AddressRoute);
router.use('/favorite', FavoriteRoute);
router.use('/order', OrderRoute);

module.exports = router;
