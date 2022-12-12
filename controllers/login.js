const getToken = require("./authentication");

const login = (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  if (username === "apple" && password === "apple") {
    const token = getToken({ username, password });
    res.cookie("token", token, { httpOnly: true }); //setting cookie here
    res.json({
      status: "success",
      type: "user logged in",
      token: token,
    });
  } else {
    return res.json({ status: "failed", type: "wrong credentials" });
  }
};

const logout = (req, res) => {
  console.log("logout");
  res.cookie("token", "");
  res.json({ status: "success" });
};
module.exports = { login, logout };
