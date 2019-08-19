const MongoClient = require('mongodb').MongoClient;
const config = require('../config');
const url = "mongodb://"+ config.db.mongo.host + ":" +  config.db.mongo.port;

module.exports = {

    connectToServer: function( callback ) {
        console.log(config.db);
        MongoClient.connect( url,  { useNewUrlParser: false }, function( err, client ) {
            console.log(err);
            _db  = client.db(config.db.mongo.database);
            return callback( err, client );
        } );
    },

    getDb: function() {
        return _db;
    }
};
