const express = require('express');
const router   = express.Router();

const LoginService     = require("../../services/auth/login");

router.post('/', (req, res, next) => {
    new LoginService(req, res, next).login();
});


module.exports = router;
