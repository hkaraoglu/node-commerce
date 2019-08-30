const MongoClient = require('mongodb').MongoClient;
const config = require('../config');
const url = "mongodb://"+ config.db.mongo.host + ":" +  config.db.mongo.port + "/" + config.db.mongo.database +
    "?keepAlive=true";

module.exports = {

    connectToServer: function( callback ) {
        MongoClient.connect( url,  { useNewUrlParser: true}, function( err, client ) {
           console.log(url);
            if(err)
            {
                console.log(err);
            }
            _client = client;
            _db  = client.db(config.db.mongo.database);
            return callback( err, client );
        } );
    },

    getDb: function() {
        return _db;
    },

    getClient: function() {
        return _client;
    }
};
