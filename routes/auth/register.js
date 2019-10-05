const router   =  require('express').Router();
const RegisterService     = require("../../services/auth/register");

/**
 * @typedef RegisterCredentials
 * @group  - Auth
 * @property {string} firstname.required -  - Hasan
 * @property {string} lastname.required -  - Karaoğlu
 * @property {string} email.required -  - eg: user@example.com
 * @property {string} password.required -  - eg: *
 */

/**
 * Register a user as customer.
 * @route POST /auth/register
 * @group  - Auth
 * @param {RegisterCredentials.model} entry.body
 * @returns {object} 200 - Customer Info
 * @returns {Error}  default - Unexpected error
 */
router.post('/', (req, res, next) => {
    new RegisterService(req, res, next).register();
});

module.exports = router;
