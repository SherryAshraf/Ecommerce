const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoute');
const productRoutes = require('./routes/productRoute');
const orderRoutes = require('./routes/orderRoute');
const authMiddleware = require('./MiddleWare/authMiddleware');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swaggerOptions');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');



const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

//swagger
const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api', authMiddleware, productRoutes);
app.use('/api', authMiddleware, orderRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
