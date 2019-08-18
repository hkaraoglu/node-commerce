const Service      = require("../base/service");
const CartModel      = require("../../models/checkout/cart");

class CartService extends Service
{
    constructor(req, res, next)
    {
        super(req, res, next);
        this.cartModel = new CartModel(req, res);
        this.lt.load("checkout/cart");
    }

    async getCartProducts()
    {
        const cartProducts =  await this.cartModel.getCartProducts();
        this.serviceResult.success().setData(cartProducts);
        this.send();
    }

    async addProductToCart()
    {
        const addResult =  await this.cartModel.addProductToCart();
        if(addResult && addResult.modifiedCount == 1)
        {
            this.serviceResult.success()
                              .setMessage(this.lt.get("product_added_into_your_cart"))
        }
        else
        {
            this.serviceResult.setMessage(this.lt.get("product_was_not_found"))
        }
        this.send();
    }

    async removeProductFromCart()
    {
        const removeResult =  await this.cartModel.removeProductFromCart();
        if(removeResult && removeResult.modifiedCount == 1)
        {
            this.serviceResult.success()
                              .setMessage(this.lt.get("product_removed_from_your_cart"))
        }
        else
        {
            this.serviceResult.setMessage(this.lt.get("product_was_not_found"))
        }
        this.send();
    }

    async updateQuantity()
    {
        const updateResult =  await this.cartModel.updateQuantity();
        if(updateResult && updateResult.matchedCount == 1)
        {
            this.serviceResult.success()
                              .setMessage(this.lt.get("product_quantity_was_updated"))
        }
        else
        {
            this.serviceResult.setMessage(this.lt.get("product_quantity_couldnt_be_updated"))
        }
        this.send();
    }
}

module.exports = CartService;
