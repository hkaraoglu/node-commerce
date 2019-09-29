const Service       = require("../base/service");
const FavoriteModel = require("../../models/account/favorite");

class FavoriteService extends Service
{
    constructor(req, res, next)
    {
        super(req, res, next);
        this.favoriteModel = new FavoriteModel(req, res);
        this.lt.load("account/favorite");
    }

    async getFavoriteProducts()
    {
        let favoriteProducts =  await this.favoriteModel.getFavoriteProducts();
        this.serviceResult.success()
                          .setData(favoriteProducts);
        this.send();
    }

    async addProductToFavorites()
    {
        let insertResult =  await this.favoriteModel.addProductToFavorites();
        if(insertResult && insertResult.modifiedCount == 1)
        {
            this.serviceResult.success()
                              .setMessage(this.lt.get("product_added_into_your_favorites"));
        }
        else
        {
            this.serviceResult.setMessage(this.lt.get("product_couldnt_be_added_into_your_favorites"));
        }
        this.send();
    }

    async removeProductFromFavorites()
    {
        let removeResult =  await this.favoriteModel.removeProductFromFavorites();
        if(removeResult && removeResult.matchedCount > 0)
        {
            this.serviceResult.success()
                              .setMessage(this.lt.get("product_removed_from_your_favorites"));
        }
        else
        {
            this.serviceResult.setMessage(this.lt.get("product_was_not_found"));
        }
        this.send();
    }
}

module.exports = FavoriteService;
