var AuthorizedService = require("../base/authorized_service");
var ConfirmModel      = require("../../models/checkout/confirm");

class ConfirmService extends AuthorizedService
{
    constructor(req, res, next)
    {
        super(req, res, next);
        this.confirmModel = new ConfirmModel(req, res);
    }

    async confirmOrder()
    {
        let results =  await this.confirmModel.getCartProducts();
        this.res.send(results);
    }

}

module.exports = ConfirmService;
