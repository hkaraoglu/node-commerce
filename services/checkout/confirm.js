const Service      = require("../base/service");

class ConfirmService extends Service
{
    constructor(req, res, next)
    {
        super(req, res, next);
    }

    async confirmOrder()
    {

    }
}

module.exports = ConfirmService;
