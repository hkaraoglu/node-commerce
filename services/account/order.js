const Service    = require("../base/service");
const OrderModel = require("../../models/account/order");

class OrderService extends Service
{
    constructor(req, res, next)
    {
        super(req, res, next);
        this.ordermodel = new OrderModel(req, res);
    }

    async getOrderList()
    {
        const orderList =  await this.ordermodel.getOrderList();
        this.serviceResult.success()
                          .setData(orderList);
        this.send();
    }

    async getOrderDetail()
    {
        const orderDetail =  await this.ordermodel.getOrderDetail();
        if(orderDetail)
        {
            this.serviceResult.success()
                              .setData(orderDetail);
        }
        else
        {
            this.serviceResult.setMessage(this.lt.get("order_was_not_found"));
        }
        this.send();
    }

    async cancelOrder()
    {
        const cancelResult =  await this.ordermodel.cancelOrder();
        if(cancelResult && cancelResult.result.nModified == 1)
        {
            this.serviceResult.success()
                              .setMessage(this.lt.get("your_order_was_cancelled"));
        }
        else
        {
            this.serviceResult.setMessage(this.lt.get("order_was_not_found"));
        }
        this.send();
    }
}

module.exports = OrderService;
