var mongoDb = require('../../data/mongo');

class Model
{
    constructor(table, req, res, langFilePath)
    {
        this.ObjectID = require('mongodb').ObjectID;
        this.dbo = mongoDb.getDb();
        this.collection = this.dbo.collection(table);
        this.body = req.body;
        this.params = req.params;
        this.query = req.query;
        this.customer = { customer_id : "5d45745a6ee6f0b4a75e67ba", firstname : "hasan", "language_id" : 1}; // for now, it is dummy data, next it fetched from req.session.customer;
    }


}

module.exports = Model;
