var AuthorizedService = require("../base/authorized_service");
var AddressModel      = require("../../models/account/address");

class AddressService extends AuthorizedService
{
    constructor(req, res, next)
    {
        super(req, res, next);
        this.addressModel = new AddressModel(req, res);
    }

    async getAddressDetail()
    {
        let results =  await this.addressModel.getAddressDetail();
        this.res.send(results);
    }

    async getAddressList()
    {
        let results =  await this.addressModel.getAddressList();
        this.res.send(results);
    }

    async addAddress()
    {
        let results =  await this.addressModel.insert();
        this.res.send(results);
    }

    async updateAddress()
    {
        let results =  await this.addressModel.update();
        this.res.send(results);
    }

    async deleteAddress()
    {
        let result =  await this.addressModel.delete();
        this.res.send(result);
    }
}

module.exports = AddressService;
