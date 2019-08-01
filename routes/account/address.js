var express = require('express');
var router   = express.Router();

var AddressService     = require("../../services/account/address");

router.get('/getAddressList', (req, res, next) => {
    new AddressService(req, res, next).getAddressList();
});

router.get('/deleteAddress/:address_id', (req, res, next) => {
    new AddressService(req, res, next).deleteAddress();
});

router.post('/addAddress', (req, res, next) => {
    new AddressService(req, res, next).addAddress();
});

router.post('/updateAddress', (req, res, next) => {
    new AddressService(req, res, next).updateAddress();
});


module.exports = router;
