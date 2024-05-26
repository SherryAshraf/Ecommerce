const Product = require('../models/Product');


exports.createProduct = async(req,res)=>{
 try{
const product=new Product (req.body)
await product.save(product);
res.status(201).json(product);
 }
 catch(err){
    res.status(400).send(err.message);

 }
}


exports.getProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).send(err.message);
    }
  };