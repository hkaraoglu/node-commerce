const Service = require("../base/service");
const CustomerModel = require("../../models/account/customer");

class LoginService extends Service
{
    constructor(req, res, next)
    {
        super(req, res, next);
        this.customerModel = new CustomerModel(req, res);
        this.lt.load("account/customer");
    }

    async login()
    {
        let customer =  await this.customerModel.getCustomer();
        if(customer)
        {
            this.serviceResult.success();
            this.serviceResult.setData(customer);
        }
        else
        {
            this.serviceResult.setMessage(this.lt.get("invalid_email_or_password"));
        }
        this.send();
    }

}

module.exports = LoginService;
