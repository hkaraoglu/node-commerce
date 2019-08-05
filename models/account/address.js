var Model = require('../base/model.js');

class AddressModel extends Model
{
    constructor(req, res)
    {
        super("address", req, res, "account/address");
    }

    async getAddressDetail()
    {
        const result = await this.collection.find(
            {
                customer_id : this.ObjectID(this.customer.customer_id),
                _id         : this.ObjectID(this.params.address_id)
            },
            {
                projection : { customer_id : 0 }
            }
        ).toArray();
        return this.convertToServiceResult(result);
    }

    async getAddressList()
    {
        const result = await this.collection.find(
            {
                customer_id : this.ObjectID(this.customer.customer_id)
            },
            {
                projection : { customer_id : 0 }
            }
        ).toArray();
        return this.convertToServiceResult(result);
    }

    async insert()
    {
        const result = await this.collection.insert(
            {
                    customer_id : this.ObjectID(this.customer.customer_id),
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
        });
        return this.convertToServiceResult(result, "address_added_successfully", "address_couldnt_be_added");
    }

    async update()
    {
        const result = await this.collection.update(
            {
               _id : this.ObjectID(this.body.address_id),
               customer_id : this.ObjectID(this.customer.customer_id)
            },
            {
                $set :
                {
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
                }
            });
        return this.convertToServiceResult(result, "address_updated_successfully", "address_couldnt_be_updated");
    }

    async delete()
    {
        const result = await this.collection.deleteOne(
            {
                _id : this.ObjectID(this.params.address_id),
                customer_id : this.ObjectID(this.customer.customer_id)
            });
        return this.convertToServiceResult(result, "address_removed_successfully", "address_couldnt_be_found");
    }
}

module.exports = AddressModel;
