// This portion is for showing the API authentication.....
//local Storage is used here..
//API can be tested externally by supplying the jwt token.....

const jwt = require("jsonwebtoken");

const authenticateAPI = (req, res, next) => {
  const tokenVal = req.headers.authorization;
  if (tokenVal) {
    const token = tokenVal.split(" ")[1];
    jwt.verify(token, "averysecretkey", (err) => {
      if (!err) {
        next();
      } else {
        res.json({ status: "forbidden" });
      }
    });
  } else {
    res.json({ status: "forbidden" });
  }
};
module.exports = authenticateAPI;
