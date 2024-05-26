//const { JsonWebTokenError } = require('jsonwebtoken');
const User =require('../models/User');
const jwt= require('jsonwebtoken');



exports.register = async (req, res) => {
  const { name, email, password }  =  new User(req.body);
    try {
      const user = new User({ name, email, password });
      await user.save();
      res.status(201).send('User registered');
    } catch (err) {
      res.status(400).send(err.message);
    }
  };
  
  exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(400).send('Invalid credentials');
      }
      const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
      res.status(200).json({ token });
    } catch (err) {
      res.status(500).send(err.message);
    }
  };