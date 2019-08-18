const Model = require('../base/model.js');

class CartModel extends Model
{
    constructor(req, res)
    {
        super("customer", req, res);
    }

    async getCartProducts()
    {
        const result = await this.collection.aggregate([
            {
                $lookup :
                    {
                        from : "product",
                        localField : "cart_products.product_id",
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
                    "product_id" : "$p.product_id",
                    "name": "$p.name",
                    "price" : "$p.price",
                    "list_price" : "$p.list_price",
                    "quantity" : "$cart_products.quantity"
                }
            }
        ]).toArray();
        return result;
    }

    async updateQuantity()
    {
        var quantity = 1;
        let result = {};
        if(this.query.quantity !== undefined && Number(this.query.quantity) > 0)
        {
            quantity = Number(this.query.quantity);
             result = await this.collection.updateOne( { _id : this.ObjectID(this.customer._id), "cart_products.product_id" : this.ObjectID(this.params.product_id) } ,
                 {$set : {"cart_products.$.quantity" : quantity }});

        }

        return result;
    }

    async addProductToCart()
    {
        let result;
        let productCountInCart = await this.collection.find(
            { _id : this.ObjectID(this.customer._id), "cart_products.product_id" : this.ObjectID(this.params.product_id)},
         ).count();
         if(productCountInCart)
         {
             result = await this.collection.updateOne(
                 { _id : this.ObjectID(this.customer._id), "cart_products.product_id" : this.ObjectID(this.params.product_id)},
                 { $inc :
                         {
                             "cart_products.$.quantity" : 1
                         }
                 });
         }
         else
         {
             result = await this.collection.updateOne(
                 { _id : this.ObjectID(this.customer._id)},
                 {
                     "$addToSet": {
                         "cart_products":
                             {
                                 "product_id": this.ObjectID(this.params.product_id),
                                 "quantity" : 1
                             }
                     }
                 });
         }

        return result;
    }

    async removeProductFromCart()
    {
        const result = await this.collection.updateOne(
            { _id : this.ObjectID(this.customer._id) },
            {
                "$pull": {
                    "cart_products":
                        {
                            "product_id": this.ObjectID(this.params.product_id)
                        }
                }
            });
        return result;
    }
}

module.exports = CartModel;
