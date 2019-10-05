const router   = require('express').Router();
const LoginService     = require("../../services/auth/login");

/**
 * @typedef LoginCredentials
 * @group  - Auth
 * @property {string} email.required -  - eg: user@example.com
 * @property {string} password.required -  - eg: *
 */

/**
 * Logins a customer.
 * @route POST /auth/login
 * @group  - Auth
 * @param {LoginCredentials.model} entry.body
 * @returns {object} 200 - Customer Info
 * @returns {Error}  default - Unexpected error
 */
router.post('/', (req, res, next) => {
    new LoginService(req, res, next).login();
});


module.exports = router;
