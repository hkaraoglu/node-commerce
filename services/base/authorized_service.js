const Service = require('./service');

class AuthorizedService extends Service
{
    constructor(req, res, next)
    {
        super(req, res, next);
    }
}

module.exports = AuthorizedService;
