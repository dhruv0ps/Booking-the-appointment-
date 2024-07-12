const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET; 

const authenticateJWT = async(req, res, next) => {
  const token = await req.headers.authorization?.split(' ')[1];
  console.log(token)
  if (!token) {
    return res.sendStatus(403);
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateJWT;
