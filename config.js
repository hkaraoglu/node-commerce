var config = {

    "db" :{
        "mysql" : {
            "host"     : "127.0.0.1",
            "port"     : "3306",
            "database" : "node-commerce",
            "username" : "root",
            "password" : "1234"
        },
        "mongo" : {
            "host" : "localhost",
            "port" : "27017",
            "database" : "local"
        }
     },
    "session" :
    {
        "secret_key" : "GJVt9fwBVPIDCHsN6D9E"
    }
};

module.exports = config;
