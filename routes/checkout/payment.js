const router             = require('express').Router();
const CustomerMiddleware = require("../../middlewares/customer");
const PaymentService     = require("../../services/checkout/payment");

router.get('/', CustomerMiddleware, (req, res, next) => {
    new PaymentService(req, res, next).getPaymentMethods();
});

router.put('/:payment_method_id', CustomerMiddleware, (req, res, next) => {
    new PaymentService(req, res, next).setPaymentMethod();
});

module.exports = router;
