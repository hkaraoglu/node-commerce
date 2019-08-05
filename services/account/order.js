var AuthorizedService = require("../base/authorized_service");
var OrderModel      = require("../../models/account/order");

class OrderService extends AuthorizedService
{
    constructor(req, res, next)
    {
        super(req, res, next);
        this.ordermodel = new OrderModel(req, res);
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

    async cancelOrder()
    {
        var results =  await this.ordermodel.cancelOrder();
        this.res.send(results);
    }
}

module.exports = OrderService;
