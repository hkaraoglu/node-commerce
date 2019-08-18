const Model = require('../base/model.js');

class AddressModel extends Model
{
    constructor(req, res)
    {
        super("address", req, res);
    }

    async getAddressDetail()
    {
        const result = await this.collection.findOne(
            {
                customer_id : this.ObjectID(this.customer._id),
                _id         : this.ObjectID(this.params.address_id)
            },
            {
                projection : { customer_id : 0 }
            }
        );
        return result;
    }

    async getAddressList()
    {
        const result = await this.collection.find(
            {
                customer_id : this.ObjectID(this.customer._id)
            },
            {
                projection : { customer_id : 0 }
            }
        ).toArray();
        return result;
    }

    async insert()
    {
        let addressData = this.getAddressData();
        addressData.customer_id = this.ObjectID(this.customer._id);
        return await this.collection.insertOne(addressData);
    }

    async update()
    {
        const result = await this.collection.update(
            {
               _id : this.ObjectID(this.body.address_id),
               customer_id : this.ObjectID(this.customer._id)
            },
            {
                $set : this.getAddressData()

            });
        return result;
    }

    async delete()
    {
        const result = await this.collection.deleteOne(
            {
                _id : this.ObjectID(this.params.address_id),
                customer_id : this.ObjectID(this.customer._id)
            });
        return result;
    }

    getAddressData()
    {
        return {
            firstname   : this.body.firstname,
            lastname    : this.body.lastname,
            definition  : this.body.definition,
            country_id  : this.body.country_id,
            postal_code : this.body.postal_code,
            address_line: this.body.address_line,
            tax_number  : this.body.tax_number,
            tax_office  : this.body.tax_office,
            phone       : this.body.phone,
            mobile_phone : this.body.mobile_phone
        };
    }
}

module.exports = AddressModel;
