const userData = require("../data/UserData");

// this is api end point to return userData
const getUserData = (req, res) => {
  res.json(userData);
};
module.exports = getUserData;
