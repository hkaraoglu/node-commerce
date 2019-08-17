var express = require('express');
var router   = express.Router();

var PaymentService     = require("../../services/checkout/payment");

router.get('/getPaymentMethods', (req, res, next) => {
    new PaymentService(req, res, next).getPaymentMethods();
});

module.exports = router;
