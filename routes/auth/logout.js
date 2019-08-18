const express = require('express');
const router   = express.Router();

const LogoutService     = require("../../services/auth/logout");

router.get('/', (req, res, next) => {
    new LogoutService(req, res, next).logout();
});


module.exports = router;
