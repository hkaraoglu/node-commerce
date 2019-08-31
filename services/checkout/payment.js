const Service      = require("../base/service");
const PaymentModel      = require("../../models/checkout/payment");

class PaymentService extends Service
{
    constructor(req, res, next)
    {
        super(req, res, next);
        this.paymentModel = new PaymentModel(req, res);
        this.lt.load("checkout/payment")
    }

    async getPaymentMethods()
    {
        let results =  await this.paymentModel.getPaymentMethods();
        this.serviceResult.success()
                          .setData(results);
        this.send();
    }

    async setPaymentMethod()
    {
        let result = await this.paymentModel.getPaymentMethod();
        if(result)
        {
            this.req.session.customer.payment_method_id = this.params.payment_method_id;
            this.serviceResult.success();
        }
        else
        {
            this.serviceResult.setMessage(this.lt.get("error_invalid_payment_method"))
                              .setErrorCode(this.serviceResult.errorCodes.ERROR_INVALID_DATA);
        }
        this.send();
    }

}

module.exports = PaymentService;
