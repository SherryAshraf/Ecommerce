const swaggerJsdoc = require('swagger-jsdoc');
const swaggerDefinition = require('./swaggerDef');
//const api = require('./routes/*.js')

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
