var express = require('express');
var router = express.Router();

var AccountRoute      = require("./routes/account/routes");
var CheckoutRoute     = require("./routes/checkout/routes");
//var ProductRoute      = require("./routes/product/routes");

router.use('/account', AccountRoute);
router.use('/checkout', CheckoutRoute);
//app.use('/product', ProductRoute);

module.exports = router;
