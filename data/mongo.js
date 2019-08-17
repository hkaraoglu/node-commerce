const MongoClient = require('mongodb').MongoClient;
const config = require('../config');
const url = "mongodb://"+ config.db.mongo.host + ":" +  config.db.mongo.port;

module.exports = {

    connectToServer: function( callback ) {
        MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
            _db  = client.db(config.db.mongo.database);
            return callback( err, client );
        } );
    },

    getDb: function() {
        return _db;
    }
};
