const Model = require('../base/model.js');
const Crypto = require('crypto');

class CustomerModel extends Model
{
    constructor(req, res)
    {
        super("customer", req, res);
    }

    async getCustomer()
    {
       const result = await this.collection.findOne(
           {
            email : this.body.email,
            password : Crypto.createHash('sha256').update(this.body.password).digest('hex')
           },
           {
               projection :
               {
                   password : 0
               }
           }
       );
       return result;
    }

}

module.exports = CustomerModel;
