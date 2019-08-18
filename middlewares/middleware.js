const ServiceResult = require('../models/util/ServiceResult');
class Middleware
{
    constructor(req, res, next)
    {
        this.req  = req;
        this.res  = res;
        this.next = next;
        this.serviceResult = new ServiceResult();
        this.lt = res.locals._lt;
        this.serviceResultErrorCodes = this.serviceResult.errorCodes;
    }

    send()
    {
        this.res.send(this.serviceResult.get());
    }
}

module.exports = Middleware;
