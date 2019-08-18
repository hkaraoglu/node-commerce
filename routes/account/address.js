const router = require('express').Router();
const CustomerMiddleware = require("../../middlewares/customer");
const AddressService     = require("../../services/account/address");

router.get('/getAddressList', CustomerMiddleware, (req, res, next) => {
    new AddressService(req, res, next).getAddressList();
});

router.get('/getAddressDetail/:address_id', CustomerMiddleware, (req, res, next) => {
    new AddressService(req, res, next).getAddressDetail();
});

router.get('/deleteAddress/:address_id', CustomerMiddleware, (req, res, next) => {
    new AddressService(req, res, next).deleteAddress();
});

router.post('/addAddress', CustomerMiddleware, (req, res, next) => {
    new AddressService(req, res, next).addAddress();
});

router.post('/updateAddress', CustomerMiddleware, (req, res, next) => {
    new AddressService(req, res, next).updateAddress();
});

module.exports = router;
