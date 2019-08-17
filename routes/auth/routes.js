var express = require('express');
var router  = express.Router();

var LoginRoute     = require("./login");


router.use('/login', LoginRoute);


module.exports = router;
