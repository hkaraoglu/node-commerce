const mongoDb = require('../../data/mongo');

class Model
{
    constructor(table, req, res)
    {
        this.ObjectID = require('mongodb').ObjectID;
        this.dbo = mongoDb.getDb();
        this.collection = this.dbo.collection(table);
        this.body = req.body;
        this.params = req.params;
        this.query = req.query;
        this.customer = req.session.customer;
    }
}

module.exports = Model;
