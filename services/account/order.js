var AuthorizedService = require("../base/authorized_service");
var OrderModel      = require("../../models/account/address");

class OrderService extends AuthorizedService
{
    constructor(req, res, next)
    {
        super(req, res, next);
        this.ordermodel = new OrderModel(req, this.getCustomerId());
    }

    async getOrderList()
    {
        var results =  await this.ordermodel.getOrderList();
        this.res.send(results);
    }

    async getOrderDetail()
    {
        var results =  await this.ordermodel.getOrderDetail();
        this.res.send(results);
    }

    cancelOrder()
    {

    }
}