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
            password : this.getEncryptedPassword(this.body.password)
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

    async addCustomer()
    {
       return await this.collection.insertOne(
           {
               firstname : this.body.firstname,
               lastname : this.body.lastname,
               email : this.body.email,
               password : this.getEncryptedPassword(this.body.password)
           }
       );
    }

    getEncryptedPassword()
    {
        return Crypto.createHash('sha256').update(this.body.password).digest('hex')
    }

}

module.exports = CustomerModel;
