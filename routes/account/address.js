const router = require('express').Router();
const CustomerMiddleware = require("../../middlewares/customer");
const AddressService     = require("../../services/account/address");

router.get('/', CustomerMiddleware, (req, res, next)  => {
    new AddressService(req, res, next).getAddressList();
});

router.get('/:address_id', CustomerMiddleware, (req, res, next) => {
    new AddressService(req, res, next).getAddressDetail();
});

router.delete('/:address_id', CustomerMiddleware, (req, res, next) => {
    new AddressService(req, res, next).deleteAddress();
});

router.post('/', CustomerMiddleware, (req, res, next) => {
    new AddressService(req, res, next).addAddress();
});

router.put('/:address_id', CustomerMiddleware, (req, res, next) => {
    new AddressService(req, res, next).updateAddress();
});

module.exports = router;
