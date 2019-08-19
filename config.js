module.exports  = {
    "db" :
        {
            "mongo" : {
                "host" : process.env.MONGODB_HOST ||  "localhost",
                "port" : process.env.MONGODB_PORT ||  "27017",
                "database" : process.env.MONGODB_DATABASE || "local"
        }
     },
    "session" :
    {
        "secret_key" : process.env.SESSION_SECRET_KEY || "GJVt9fwBVPIDCHsN6D9E"
    }
};
