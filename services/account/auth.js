var AuthorizedService = require("../base/authorized_service");
var AddressModel      = require("../../models/account/address");

class AuthService extends AuthorizedService
{
    constructor(req, res, next)
    {
        super(req, res, next);
        this.addressModel = new AddressModel();
    }

    async getAddressList()
    {
        var results =  await this.addressModel.getAddressList(this.getCustomerId());
        this.send(results);
    }

    async addAddress()
    {
        var results =  await this.addressModel.insert(this.getCustomerId(), this.req.body);
        this.res.send(results);
    }

    async updateAddress()
    {
        var results =  await this.addressModel.update(this.getCustomerId(), this.req.body);
        this.res.send(results);
    }

    async deleteAddress()
    {
        var result =  await this.addressModel.delete(this.getCustomerId(), this.req.params.address_id);
        if(result.success)
        {
            console.log(this.res);
            result.message = this.lt.get('address_deleted_successfully');
        }
        else
        {
            result.message = this.lt.get('address_deleted_successfully');
        }
        result.data = {};
        this.res.send(result);
    }
}

module.exports = AddressService;
