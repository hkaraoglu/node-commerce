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
        this._lt = res.locals._lt;
        this._lt.load(langFilePath);
    }

    convertToServiceResult(result, successMessageKey, errorMessageKey)
    {
        let serviceResult = {success: false, message : "", error_code: -1, data : {}};
        if(Array.isArray(result) && result.length > 0)
        {
            serviceResult.success = true;
            if(successMessageKey !== undefined)
            {
                serviceResult.message = this._lt.get(successMessageKey);
            }
            serviceResult.data = result;
        }
        else if(result.result !== undefined && ((result.result.nModified > 0 && result.result.ok === 1) || result.result.nInserted > 0 || result.result.n > 0))
        {
            serviceResult.success = true;
            if(successMessageKey !== undefined)
            {
                serviceResult.message = this._lt.get(successMessageKey);
            }
        }
        else if(errorMessageKey === undefined)
        {
            serviceResult.message = "";
        }
        else
        {
            serviceResult.message = this._lt.get(errorMessageKey);
        }
        return serviceResult;
    }
}

module.exports = Model;
