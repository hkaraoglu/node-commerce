const Service = require("../base/service");

class LogoutService extends Service
{
    constructor(req, res, next)
    {
        super(req, res, next);
        this.lt.load("account/customer");
    }

    async logout()
    {
        this.req.session.destroy();
        this.serviceResult.success()
                          .setMessage(this.lt.get("session_was_ended"));
        this.send();
    }

}

module.exports = LogoutService;
