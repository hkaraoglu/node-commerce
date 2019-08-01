var Model = require('../base/model.js');

class OrderModel extends Model
{
    constructor(req, res)
    {
        super("order AS o");
    }

    async getOrderDetail(orderId)
    {

    }

    async getOrderList()
    {


     }

}
