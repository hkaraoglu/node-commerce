const router = require('express').Router();
const CustomerMiddleware = require("../../middlewares/customer");
const AddressService     = require("../../services/account/address");


/**
 * Returns customer's address list.
 * @route GET /account/address
 * @group  - Address
 * @returns {object} 200 - An array of customer address list
 * @returns {Error}  default - Unexpected error
 */
router.get('/', CustomerMiddleware, (req, res, next)  => {
    new AddressService(req, res, next).getAddressList();
});

/**
 * Returns customer's address detail.
 * @route GET /account/address/{address_id}
 * @group  - Address
 * @param {string} address_id.path.required - Address ID of address
 * @returns {object} 200 - Detail of address
 * @returns {Error}  default - Unexpected error
 */
router.get('/:address_id', CustomerMiddleware, (req, res, next) => {
    new AddressService(req, res, next).getAddressDetail();
});

/**
 * Deletes address from customer address list.
 * @route DELETE /account/address/{address_id}
 * @group  - Address
 * @param {string} address_id.path.required - Address ID of address
 * @returns {object} 200 - Detail of address
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:address_id', CustomerMiddleware, (req, res, next) => {
    new AddressService(req, res, next).deleteAddress();
});

/**
 * @typedef AddressCredentials
 * @group  - Account
 * @property {string} firstname.required
 * @property {string} lastname.required
 * @property {string} definition.required
 * @property {integer} country_id.required
 * @property {string} address_line.required
 * @property {string} tax_number.required
 * @property {string} tax_office.required
 * @property {string} phone.required
 * @property {string} mobile_phone.required
 */

/**
 * Insert a new address to customer's address list
 * @route POST /account/address
 * @group  - Address
 * @param {AddressCredentials.model} entry.body
 * @returns {object} 200 - Detail of address
 * @returns {Error}  default - Unexpected error
 */
router.post('/', CustomerMiddleware, (req, res, next) => {
    new AddressService(req, res, next).addAddress();
});

/**
 * Updates address of customer
 * @route PUT /account/address/{address_id}
 * @group  - Address
 * @param {string} address_id.path.required - Address ID of address
 * @param {AddressCredentials.model} entry.body
 * @returns {object} 200 - Detail of address
 * @returns {Error}  default - Unexpected error
 */
router.put('/:address_id', CustomerMiddleware, (req, res, next) => {
    new AddressService(req, res, next).updateAddress();
});

module.exports = router;
