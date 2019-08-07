var express = require('express');
var router  = express.Router();

var CartRoute     = require("./cart");

router.use('/cart', CartRoute);

module.exports = router;
