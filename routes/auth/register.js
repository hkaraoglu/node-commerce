const router   =  require('express').Router();
const RegisterService     = require("../../services/auth/register");

router.post('/', (req, res, next) => {
    new RegisterService(req, res, next).register();
});

module.exports = router;
