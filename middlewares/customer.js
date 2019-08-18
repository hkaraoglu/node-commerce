const Middleware = require('./middleware');

class CustomerMiddleware extends Middleware
{
    constructor(req, res, next)
    {
        super(req, res, next);
        this.lt.load("account/customer");
    }

    handle()
    {
        if(!this.req.session.customer)
        {
            this.serviceResult.setMessage(this.lt.get("error_session_expired"))
                              .setErrorCode(this.serviceResultErrorCodes.ERROR_SESSION_EXPIRED);
            this.send();
        }
        else
        {
            this.next();
        }
    }
}

const customerMiddleware = function(req, res, next)
{
    new CustomerMiddleware(req, res, next).handle();
};

module.exports = customerMiddleware;
