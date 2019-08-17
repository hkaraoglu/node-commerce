var AuthorizedService = require("../base/authorized_service");
var PaymentModel      = require("../../models/checkout/payment");

class PaymentService extends AuthorizedService
{
    constructor(req, res, next)
    {
        super(req, res, next);
        this.paymentModel = new PaymentModel(req, res);
    }

    async getPaymentMethods()
    {
        let results =  await this.paymentModel.getPaymentMethods();
        this.res.send(results);
    }

    async setPaymentMethod()
    {
        let result = await this.paymentModel.setPaymentMethod();
        this.res.send(result);
    }

}

module.exports = PaymentService;
