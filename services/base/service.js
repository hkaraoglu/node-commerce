class Service
{
    constructor(req, res, next)
    {
        this.req  = req;
        this.res  = res;
        this.next = next;
    }

    getCustomerId()
    {
        return 1;
        //return this.req.session.customer_id;
    }

}

module.exports = Service;