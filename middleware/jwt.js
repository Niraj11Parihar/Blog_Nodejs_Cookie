const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key'; 

const authenticateJWT = (req, res, next) => {
  const token = req.cookies.token; 
  try {
    // not logged in than redirect to login page
    if (!token) {
      return res.status(404).redirect("/login")
   }
   // jwt decoded
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; 
    next();
  } catch (err) {
    return res.status(403).send("Invalid token.");
  }
};


module.exports = authenticateJWT