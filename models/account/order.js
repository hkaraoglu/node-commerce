var Model = require('../base/model.js');
var OrderStatusEnum = require('../../enums/account/order_status');

class OrderModel extends Model
{
    constructor(req, res)
    {
        super("order", req, res, "account/order");
    }

    async getOrderDetail()
    {
        const result = await this.collection.find(
            {
                _id : this.ObjectID(this.params.order_id),
                customer_id : this.ObjectID(this.customer.customer_id)
            },
            {
                projection :
                {
                    customer_id : 0
                }
            }
        ).toArray();
        return this.convertToServiceResult(result);
    }

    async getOrderList()
    {
        let result = await this.collection.find(
            {
                customer_id : this.ObjectID(this.customer.customer_id)
            },
            {
                projection :
                {
                    customer_id : 0
                }
            }
        ).toArray();
        return this.convertToServiceResult(result);
    }

    async cancelOrder()
    {
        const result = await this.collection.updateOne(
            {
                _id         : this.ObjectID(this.params.order_id),
                customer_id : this.ObjectID(this.customer.customer_id)
            },
            {
                $set : { status_id : OrderStatusEnum.CANCELLED }
            }
        );
        return this.convertToServiceResult(result, "your_order_was_cancelled", "your_order_couldnt_be_cancelled");
    }

}
module.exports = OrderModel;
