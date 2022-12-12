//this basically creates a token in the first login..
//token refresh logic can be kept here....
const jwt = require("jsonwebtoken");

const token = ({ username, password }) => {
  return jwt.sign({ username, password }, "averysecretkey", {
    expiresIn: "20min",
  });
};

module.exports = token;
