var Model = require('../base/model.js');

class AddressModel extends Model
{
    constructor(req, res)
    {
        super("address", req, res, "account/address");
    }

    async getAddressList()
    {
        const result = await this.dbo.collection("customer").aggregate([
            {
                $lookup :
                    {
                        from : "address",
                        foreignField : "_id",
                        localField : "addresses.address_id",
                        as : "a"
                    }
            },
            {
                $match :
                {
                     "_id" : this.ObjectID(this.customer.customer_id)
                }
            },
            { "$unwind" : "$a" },
            {
                $project : { "firstname": "$a.firstname",
                            "lastname" : "$a.lastname",
                            "country_id" : "$a.country_id",
                            "postal_code" : "$a.postal_code",
                            "address_line" : "$a.address_line",
                            "definition" : "$a.definition",
                            "tax_number" : "$a.tax_number",
                            "tax_office" : "$a.tax_office",
                            "phone" : "$a.phone",
                            "mobile_phone" : "$a.mobile_phone",
                            }
            }
        ]).toArray();
        return this.convertToServiceResult(result);
    }

    async insert()
    {
        let result = await this.collection.insert(
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
        });
        if(result.insertedIds.hasOwnProperty("0") )
        {
            let newAddressId = result.insertedIds["0"];
            result = await this.dbo.collection("customer").updateOne(
                { _id : this.ObjectID(this.customer.customer_id) },
                {
                    "$addToSet": {
                        "addresses":
                            {
                                "address_id": newAddressId
                            }
                    }
                });
        }
        return this.convertToServiceResult(result, "address_added_successfully", "address_couldnt_be_added");
    }

    async update()
    {


    }

    async delete()
    {
        let result = await this.dbo.collection("customer").updateOne(
            { _id : this.ObjectID(this.customer.customer_id) },
            {
                "$pull": {
                    "addresses":
                        {
                            "address_id": this.ObjectID(this.params.address_id)
                        }
                }
            });
        console.log(result);
        result = await this.collection.deleteOne({_id : this.ObjectID(this.params.address_id)});
        return this.convertToServiceResult(result, "address_removed_successfully", "address_couldnt_be_found");
    }
}

module.exports = AddressModel;
