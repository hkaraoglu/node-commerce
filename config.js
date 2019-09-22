module.exports  = {
    "db" :
        {
            "mongo" : {
                "host" : process.env.MONGODB_HOST ||  "root:xidfe4-jennan-syfceV@ds163867.mlab.com",
                "port" : process.env.MONGODB_PORT ||  "63867",
                "database" : process.env.MONGODB_DATABASE || "heroku_jg3nq6cx"
        }
     },
    "session" :
    {
        "secret_key" : process.env.SESSION_SECRET_KEY || "GJVt9fwBVPIDCHsN6D9E"
    }
};
