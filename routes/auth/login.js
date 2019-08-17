var express = require('express');
var router   = express.Router();

var LoginService     = require("../../services/auth/login");

router.post('/', (req, res, next) => {
    new LoginService(req, res, next).login();
});


module.exports = router;
