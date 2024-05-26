const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const order = new Order({ user: req.user.id, products: req.body.products });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('products.product');
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).send(err.message);
  }
};