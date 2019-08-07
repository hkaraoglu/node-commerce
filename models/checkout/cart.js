var Model = require('../base/model.js');

class CartModel extends Model
{
    constructor(req, res)
    {
        super("customer", req, res, "checkout/cart");
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
                        "_id" : this.ObjectID(this.customer.customer_id)
                    }
            }
        ]).toArray();
        return this.convertToServiceResult(result);
    }

    async updateQuantity()
    {
        var quantity = 1;
        let result = {};
        if(this.query.quantity !== undefined && Number(this.query.quantity) > 0)
        {
            quantity = Number(this.query.quantity);
             result = await this.collection.updateOne( { _id : this.ObjectID(this.customer.customer_id), "cart_products.product_id" : this.ObjectID(this.params.product_id) } ,
                 {$set : {"cart_products.$.quantity" : quantity }});

        }

        return this.convertToServiceResult(result, "product_added_into_your_cart", "product_couldnt_be_added_into_your_cart");
    }

    async addProductToCart()
    {
        let result;
        let productCountInCart = await this.collection.find(
            { _id : this.ObjectID(this.customer.customer_id), "cart_products.product_id" : this.ObjectID(this.params.product_id)},
         ).count();
         if(productCountInCart)
         {
             result = await this.collection.updateOne(
                 { _id : this.ObjectID(this.customer.customer_id), "cart_products.product_id" : this.ObjectID(this.params.product_id)},
                 { $inc :
                         {
                             "cart_products.$.quantity" : 1
                         }
                 });
         }
         else
         {
             result = await this.collection.updateOne(
                 { _id : this.ObjectID(this.customer.customer_id)},
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

        return this.convertToServiceResult(result, "product_added_into_your_cart", "product_couldnt_be_added_into_your_cart");
    }

    async removeProductFromCart()
    {
        const result = await this.collection.updateOne(
            { _id : this.ObjectID(this.customer.customer_id) },
            {
                "$pull": {
                    "cart_products":
                        {
                            "product_id": this.ObjectID(this.params.product_id)
                        }
                }
            });
        return this.convertToServiceResult(result, "product_removed_from_your_cart", "product_couldnt_be_removed_from_your_cart");
    }
}

module.exports = CartModel;
