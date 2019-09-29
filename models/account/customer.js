const Model = require('../base/model.js');
const Crypto = require('crypto');

class CustomerModel extends Model
{
    constructor(req, res)
    {
        super("customer", req, res);
    }

    async isEmailExists()
    {
        const result = await this.collection.find(
            {
                email : this.body.email,
            }).count();
        return result;
    }

    async getCustomer()
    {
       const result = await this.collection.findOne(
           {
            email : this.body.email,
            password : this.getEncryptedPassword()
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
       return this.collection.insertOne(
           {
               firstname : this.body.firstname,
               lastname : this.body.lastname,
               email : this.body.email,
               password : this.getEncryptedPassword()
           }
       );
    }

    getEncryptedPassword()
    {
        return Crypto.createHash('sha256').update(this.body.password).digest('hex')
    }

}

module.exports = CustomerModel;
