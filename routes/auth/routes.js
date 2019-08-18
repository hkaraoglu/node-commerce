const router         = require('express').Router();
const LoginRoute     = require("./login");
const LogoutRoute     = require("./logout");
const RegisterRoute     = require("./register");

router.use('/login', LoginRoute);
router.use('/logout', LogoutRoute);
router.use('/register', RegisterRoute);
module.exports = router;
