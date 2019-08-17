const Model = require('../base/model.js');

class PaymentModel extends Model
{
    constructor(req, res)
    {
        super("payment_methods", req, res);
    }

    async getPaymentMethods()
    {
        const result = await this.collection.find(
            {
                is_active : true, "names.language_id" : this.customer.language_id
            },
            {
                projection : { is_active : 0, "names.language_id" : 0}
            }).toArray();
        return result;
    }

    async setPaymentMethod()
    {
        this.req.session.customer.payment_method_id = this.params.payment_method_id;
    }
}

module.exports = PaymentModel;
