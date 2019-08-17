const express = require('express');
const router = express.Router();

const AccountRoute      = require("./routes/account/routes");
const AuthRoute         = require("./routes/auth/routes");
const CheckoutRoute     = require("./routes/checkout/routes");

router.use('/account', AccountRoute);
router.use('/checkout', CheckoutRoute);
router.use('/auth', AuthRoute);

module.exports = router;
