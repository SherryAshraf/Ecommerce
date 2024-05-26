const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Authorization');
  try {
    const decoded = jwt.verify(token, '2932348b7539b514aa2f4fe9af17fac0f33e9a5548afa23c0634512fbcc850a2');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send('Invalid token.');
  }
};