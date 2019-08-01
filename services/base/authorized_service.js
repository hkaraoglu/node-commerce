var Service = require('./service');

class AuthorizedService extends Service
{
    constructor(req, res, next)
    {
        super(req, res, next);
        this.lt = res.locals._lt;
    }
}

module.exports = AuthorizedService;