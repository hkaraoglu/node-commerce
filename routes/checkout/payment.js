const router             = require('express').Router();
const CustomerMiddleware = require("../../middlewares/customer");
const PaymentService     = require("../../services/checkout/payment");

router.get('/getPaymentMethods', CustomerMiddleware, (req, res, next) => {
    new PaymentService(req, res, next).getPaymentMethods();
});

module.exports = router;
