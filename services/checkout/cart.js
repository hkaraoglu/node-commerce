var AuthorizedService = require("../base/authorized_service");
var CartModel      = require("../../models/checkout/cart");

class CartService extends AuthorizedService
{
    constructor(req, res, next)
    {
        super(req, res, next);
        this.cartModel = new CartModel(req, res);
    }

    async getCartProducts()
    {
        let results =  await this.cartModel.getCartProducts();
        this.res.send(results);
    }

    async addProductToCart()
    {
        let results =  await this.cartModel.addProductToCart();
        this.res.send(results);
    }

    async removeProductFromCart()
    {
        let results =  await this.cartModel.removeProductFromCart();
        this.res.send(results);
    }

    async updateQuantity()
    {
        let results =  await this.cartModel.updateQuantity();
        this.res.send(results);
    }
}

module.exports = CartService;
