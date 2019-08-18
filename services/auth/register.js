const Service = require("../base/service");
const CustomerModel = require("../../models/account/customer");

class RegisterService extends Service
{
    constructor(req, res, next)
    {
        super(req, res, next);
        this.lt.load("account/customer");
        this.customerModel = new CustomerModel(req, res);
    }

    async register()
    {
        const insertResult = await this.customerModel.addCustomer();
        if(insertResult && insertResult.insertedCount == 1)
        {
            this.req.session.customer = insertResult.ops[0];
            this.req.session.save(function (error) {
                console.log(error);
            });
            this.serviceResult.success()
                              .setMessage(this.lt.get("user_registered"));
        }
        this.send();
    }

}

module.exports = RegisterService;
