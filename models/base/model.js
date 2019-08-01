var MysqlDb = require('../../data/mysql');
var QueryBuilder = require('db-query-builder');

class Model
{
    constructor(table, req, res, langFilePath)
    {
        this.DB = new QueryBuilder(table, MysqlDb.getInstance());
        this.body = req.body;
        this.params = req.params;
        this.customer = { customer_id : 1, firstname : "hasan", "language_id" : 1}; // for now, it is dummy data, next it fetched from req.session.customer;
        this._lt = res.locals._lt;
        this._lt.load(langFilePath);
    }

    convertToServiceResult(result, successMessageKey, errorMessageKey)
    {
        console.log(result);
        let serviceResult = {success: false, message : "", error_code: -1, data : {}};
        if(result.success)
        {
            serviceResult.success = true;
            if(successMessageKey !== undefined)
            {
                serviceResult.message = this._lt.get(successMessageKey);
            }
            serviceResult.data = result.results;
        }
        else if(errorMessageKey === undefined)
        {
            serviceResult.message = result.err;
        }
        else
        {
            serviceResult.message = this._lt.get(errorMessageKey);
        }
        return serviceResult;
    }
}

module.exports = Model;
