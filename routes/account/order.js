var express = require('express');
var router   = express.Router();

var OrderService     = require("../../services/account/order");

router.get('/getOrderDetail/:order_id', (req, res, next) => {
    new OrderService(req, res, next).getOrderDetail();
});

router.get('/getOrderList/', (req, res, next) => {
    new OrderService(req, res, next).getOrderList();
});

router.get('/cancelOrder/:order_id', (req, res, next) => {
    new OrderService(req, res, next).cancelOrder();
});



module.exports = router;

