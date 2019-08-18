const router         = require('express').Router();
const LoginRoute     = require("./login");
const LogoutRoute     = require("./logout");

router.use('/login', LoginRoute);
router.use('/logout', LogoutRoute);

module.exports = router;
