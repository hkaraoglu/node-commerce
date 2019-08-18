const Model = require('../base/model.js');
const OrderStatusEnum = require('../../enums/account/order_status');

class OrderModel extends Model
{
    constructor(req, res)
    {
        super("order", req, res);
    }

    async getOrderDetail()
    {
        const result = await this.collection.find(
            {
                _id : this.ObjectID(this.params.order_id),
                customer_id : this.ObjectID(this.customer._id)
            },
            {
                projection :
                {
                    customer_id : 0
                }
            }
        ).toArray();
        return result;
    }

    async getOrderList()
    {
        let result = await this.collection.find(
            {
                customer_id : this.ObjectID(this.customer._id)
            },
            {
                projection :
                {
                    customer_id : 0
                }
            }
        ).toArray();
        return result;
    }

    async cancelOrder()
    {
        const result = await this.collection.updateOne(
            {
                _id         : this.ObjectID(this.params.order_id),
                customer_id : this.ObjectID(this.customer._id)
            },
            {
                $set : { status_id : OrderStatusEnum.CANCELLED }
            }
        );
        return result;
    }

}
module.exports = OrderModel;
