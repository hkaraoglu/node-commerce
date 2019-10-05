const router             = require('express').Router();
const CustomerMiddleware = require("../../middlewares/customer");
const PaymentService     = require("../../services/checkout/payment");

/**
 * Returns payment list.
 * @route GET /checkout/payment
 * @group  - Payment
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.get('/', CustomerMiddleware, (req, res, next) => {
    new PaymentService(req, res, next).getPaymentMethods();
});

/**
 * Sets a payment method for customer checkout
 * @route PUT /checkout/payment/{payment_method_id}
 * @group  - Payment
 * @param {string} payment_method_id.path.required - Payment method ID
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.put('/:payment_method_id', CustomerMiddleware, (req, res, next) => {
    new PaymentService(req, res, next).setPaymentMethod();
});

module.exports = router;
