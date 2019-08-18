const router        = require('express').Router();
const CartRoute     = require("./cart");
const PaymentRoute  = require("./payment");

router.use('/cart', CartRoute);
router.use('/payment', PaymentRoute);

module.exports = router;
