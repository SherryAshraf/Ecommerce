const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'ecommerce-api',
        version: '1.0.0',
        description: 'Your API Description',
    },
    servers: [{
        url: 'http://localhost:3000', // Replace with your server URL
        description: 'Development server',
    }],
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'] // Path to the API routes folder
  };
  
module.exports = options;

//module.exports = swaggerDefinition;
