var Model = require('../base/model.js');

class FavoriteModel extends Model
{
    constructor(req, res)
    {
        super("favorite_product AS fp", req, res, "account/favorite");
    }

    async getFavoriteProducts()
    {
        let result = await this.DB.select(["pd.product_id", "pd.name", "pd.description"])
               .join("product AS p", {first : "p.product_id", operator : "=", second : "fp.product_id"})
               .join("product_description AS pd", {first : "pd.product_id", operator : "=", second : "p.product_id"})
               .where("fp.customer_id", "=", this.customer.customer_id)
               .where("pd.language_id", "=", this.customer.language_id)
               .get();
        return this.convertToServiceResult(result);
    }

    async addProductToFavorites()
    {
        let result = await this.DB.insert({
           "product_id" : this.params.product_id,
           "customer_id" : this.customer.customer_id
        });
        return this.convertToServiceResult(result, "product_added_into_your_favorites", "product_couldnt_be_added_into_your_favorites");
    }

    async removeProductFromFavorites()
    {
        let result = await this.DB.where("product_id", "=", this.params.product_id)
               .where("customer_id", "=", this.customer.customer_id)
               .delete();
        return this.convertToServiceResult(result, "product_removed_from_your_favorites", "product_couldnt_be_removed_from_your_favorites");
    }
}

module.exports = FavoriteModel;
