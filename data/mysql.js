var mysql      = require('mysql');
var config     = require("../config");

class MysqlDb
{
    static getInstance()
    {
        if(MysqlDb.instance == null)
        {
            MysqlDb.instance = new MysqlDb();
            MysqlDb.instance = MysqlDb.instance.connect();
        }
        return MysqlDb.instance;
    }

    connect()
    {
        this.connection = mysql.createConnection({
            host     : config.db.mysql.host,
            user     : config.db.mysql.username,
            password : config.db.mysql.password,
            database : config.db.mysql.database
        });


       this.connection.connect();
       return this.connection;
    }


}

module.exports = MysqlDb;





