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
        if(await this.customerModel.isEmailExists())
        {
            this.serviceResult.setMessage(this.lt.get("email_already_registered_before"))
        }
        else
        {
            const insertResult = await this.customerModel.addCustomer();
            if(insertResult && insertResult.insertedCount == 1)
            {
                let customer = insertResult.ops[0];
                delete customer.password;
                this.req.session.customer = customer;
                this.req.session.save(function (error) {
                    console.log(error);
                });
                this.serviceResult.success()
                    .setMessage(this.lt.get("user_registered"))
                    .setData(insertResult.ops[0]);
            }
        }
        this.send();
    }

}

module.exports = RegisterService;
