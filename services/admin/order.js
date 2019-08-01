var AuthorizedService = require("../base/authorized_service");
var OrderModel      = require("../../models/account/order");

class OrderService extends AuthorizedService
{
    constructor(req, res, next)
    {
        super(req, res, next);
        this.orderModel = new OrderModel(req, this.getCustomerId());
    }

    async getOrderList()
    {
        let results =  await this.orderModel.getOrderList();
        this.res.send(results);
    }

    async addOrder()
    {
        let results =  await this.orderModel.insert();
        console.log("C3");
        this.res.send(results);
    }

    async updateOrder()
    {
        let results =  await this.orderModel.update();
        this.res.send(results);
    }

    async deleteAddress()
    {
        var result =  await this.orderModel.delete(this.getCustomerId(), this.req.params.address_id);
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