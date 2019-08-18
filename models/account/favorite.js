const Model = require('../base/model.js');

class FavoriteModel extends Model
{
    constructor(req, res)
    {
        super("customer", req, res);
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
                        "_id" : this.ObjectID(this.customer._id)
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
        return result;
    }

    async addProductToFavorites()
    {
        const result = await this.collection.updateOne(
            { _id : this.ObjectID(this.customer._id) },
            {
                "$addToSet": {
                    "favorite_products":
                        {
                            "product_id": this.ObjectID(this.params.product_id)
                        }
                }
            });
        return result;
    }

    async removeProductFromFavorites()
    {
        console.log(this.ObjectID(this.params.product_id));
        const result = await this.collection.updateOne(
            { _id : this.ObjectID(this.customer._id) },
            {
                "$pull": {
                    "favorite_products":
                        {
                            "product_id": this.ObjectID(this.params.product_id)
                        }
                }
            });
        return result;
    }
}

module.exports = FavoriteModel;
