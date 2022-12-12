// this to verify the protedted page in the websites.
//uses cookies to handle jwt implementation...
const jwt = require("jsonwebtoken");

const authenticateRoute = (req, res, next) => {
  const { token } = req.cookies;
  jwt.verify(token, "averysecretkey", (err) => {
    if (!err) {
      next();
    } else {
      res.json({ status: "forbidden" });
    }
  });
};
module.exports = authenticateRoute;
