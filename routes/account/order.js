const router = require('express').Router();
const CustomerMiddleware = require("../../middlewares/customer");
const OrderService     = require("../../services/account/order");

router.get('/getOrderDetail/:order_id', CustomerMiddleware, (req, res, next) => {
    new OrderService(req, res, next).getOrderDetail();
});

router.get('/getOrderList/', CustomerMiddleware, (req, res, next) => {
    new OrderService(req, res, next).getOrderList();
});

router.get('/cancelOrder/:order_id', CustomerMiddleware, (req, res, next) => {
    new OrderService(req, res, next).cancelOrder();
});

module.exports = router;
