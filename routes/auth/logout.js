const router   =  require('express').Router();
const LogoutService     = require("../../services/auth/logout");

/**
 * Logout a customer.
 * @route GET /auth/logout
 * @group  - Auth
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.get('/', (req, res, next) => {
    new LogoutService(req, res, next).logout();
});

module.exports = router;
