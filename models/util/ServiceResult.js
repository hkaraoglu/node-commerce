class ServiceResult
{
    constructor()
    {
        this._success = false;
        this.message = "";
        this.errorCode = -1;
        this.data = {};
    }

    success()
    {
        this._success = true;
    }

    setMessage(message)
    {
        this.message = message;
    }

    setErrorCode(errorCode)
    {
        this.errorCode = errorCode;
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
