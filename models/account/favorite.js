const Model = require('../base/model.js');

class FavoriteModel extends Model
{
    constructor(req, res)
    {
        super("customer", req, res, "account/favorite");
    }

    async getFavoriteProducts()
    {
        const result = await this.collection.aggregate([
            {
                $lookup :
                    {
                        from : "product",
                        localField : "favorite_products.product_id",
                        foreignField : "_id",
                        as : "p"
                    }
            },
            {
                $unwind:"$p"
            },
            {
                $match :
                    {
                        "_id" : this.ObjectID(this.customer.customer_id)
                    }
            },
            {
                $project : {
                    "name": "$p.name",
                    "price" : "$p.price",
                    "list_price" : "$p.list_price"
                }
            }
        ]).toArray();
        return this.convertToServiceResult(result);
    }

    async addProductToFavorites()
    {
        const result = await this.collection.updateOne(
            { _id : this.ObjectID(this.customer.customer_id) },
            {
                "$addToSet": {
                    "favorite_products":
                        {
                            "product_id": this.ObjectID(this.params.product_id)
                        }
                }
            });
        return this.convertToServiceResult(result, "product_added_into_your_favorites", "product_couldnt_be_added_into_your_favorites");
    }

    async removeProductFromFavorites()
    {
        const result = await this.collection.updateOne(
            { _id : this.ObjectID(this.customer.customer_id) },
            {
                "$pull": {
                    "favorite_products":
                        {
                            "product_id": this.params.product_id
                        }
                }
            });
        return this.convertToServiceResult(result, "product_removed_from_your_favorites", "product_couldnt_be_removed_from_your_favorites");
    }
}

module.exports = FavoriteModel;
