const Model = require('../base/model.js');

class PaymentModel extends Model
{
    constructor(req, res)
    {
        super("payment_methods", req, res);
    }

    async getPaymentMethods()
    {
        const result = await this.collection.aggregate([
            {
                $project : {
                    names: {
                        $filter: {
                            input: "$names",
                            as: "names",
                            cond:
                            {
                                $eq : [
                                    "$$names.language_id", this.customer.language_id
                                ]
                            }
                        }
                    }

                }
            },
            {
                $unwind : "$names"
            },
            {
                $project :
                    {
                        "name" : "$names.name"
                    }
            }
        ]).toArray();
        return result;
    }

    async getPaymentMethod()
    {
       const result = await this.collection.findOne(
           {
               _id: Number(this.params.payment_method_id)
           });
       return result;
    }
}

module.exports = PaymentModel;
