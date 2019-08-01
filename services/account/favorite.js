var AuthorizedService = require("../base/authorized_service");
var FavoriteModel      = require("../../models/account/favorite");

class FavoriteService extends AuthorizedService
{
    constructor(req, res, next)
    {
        super(req, res, next);
        this.favoriteModel = new FavoriteModel(req, res);
    }

    async getFavoriteProducts()
    {
        let results =  await this.favoriteModel.getFavoriteProducts();
        this.res.send(results);
    }

    async addProductToFavorites()
    {
        let results =  await this.favoriteModel.addProductToFavorites();
        this.res.send(results);
    }

    async removeProductFromFavorites()
    {
        let results =  await this.favoriteModel.removeProductFromFavorites();
        this.res.send(results);
    }
}

module.exports = FavoriteService;
