module.exports = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Node-commerce API Documentation ',
            version: '1.0.0',
        },
        host: 'localhost:3008',
        basePath: '/',
        produces: [
            "application/json"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {

        }
    },
    basedir: __dirname,
    files: ['./routes/**/*.js']
};