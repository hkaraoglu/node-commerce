var express = require('express');
var router  = express.Router();

var CartRoute     = require("./cart");
var PaymentRoute     = require("./payment");

router.use('/cart', CartRoute);
router.use('/payment', PaymentRoute);

module.exports = router;
