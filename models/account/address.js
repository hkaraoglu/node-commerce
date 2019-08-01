var Model = require('../base/model.js');

class AddressModel extends Model
{
    constructor(req, res)
    {
        super("address AS a", req, res, "account/address");
    }

    async getAddressList()
    {
       let result = await this.DB.select([
                            "address_id",
                            "a.customer_id",
                            "a.firstname",
                            "a.lastname",
                            "a.country_id",
                            "a.state_id",
                            "a.postal_code",
                            "a.address_line",
                            "a.tax_office",
                            "a.tax_number",
                            "a.phone",
                            "a.mobile_phone",
                            "a.definition"])
                            .join("customer AS c", {first : "c.customer_id", operator : "=", "second" : "a.customer_id"})
                            .where("a.customer_id", "=",  this.customer.customer_id)
                            .get();
        return this.convertToServiceResult(result);
    }

    async insert()
    {
        let result = await this.DB.insert(
            {
                    customer_id : this.customer.customer_id,
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
        let result = await this.DB.where("customer_id", "=", this.customer.customer_id)
                                  .where("address_id", "=", this.body.address_id)
                                  .update(
        {
            firstname   : this.body.firstname,
            lastname    : this.body.lastname,
            definition  : this.body.definition,
            country_id  : this.body.country_id,
            state_id    : this.body.state_id,
            postal_code : this.body.postal_code,
            address_line: this.body.address_line,
            tax_number  : this.body.tax_number,
            tax_office  : this.body.tax_office,
            phone       : this.body.phone,
            mobile_phone : this.body.mobile_phone
        });
        return this.convertToServiceResult(result, "address_updated_successfully", "address_couldnt_be_updated");
    }

    async delete()
    {
        let result = await this.DB.where("customer_id", '=', this.customer.customer_id)
                                  .where("address_id", '=', this.params.address_id)
                                  .delete();
        return this.convertToServiceResult(result, "address_removed_successfully", "address_couldnt_be_found");
    }
}

module.exports = AddressModel;
