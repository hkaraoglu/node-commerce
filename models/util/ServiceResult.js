const ServiceResultEnum = require('../../enums/util/service_result.json');
class ServiceResult
{
    constructor()
    {
        this._success = false;
        this.message = "";
        this.errorCode = -1;
        this.data = {};
        this.errorCodes = ServiceResultEnum;
    }

    success()
    {
        this._success = true;
        return this;
    }

    setMessage(message)
    {
        this.message = message;
        return this;
    }

    setErrorCode(errorCode)
    {
        this.errorCode = errorCode;
        return this;
    }

    setData(data)
    {
        this.data = data;
    }

    get()
    {
        return {
            success    : this._success,
            message    : this.message,
            error_code : this.errorCode,
            data       : this.data
        };
    }
}

module.exports = ServiceResult;
