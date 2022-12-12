const express = require("express");
const router = express.Router();
const authenticateRoute = require("../middlewares/authMiddleware"); //middlewares

//here we serve static html files

router.get("/", (req, res) => {
  res.sendFile("login.html", { root: "./public" });
});

// '/home' page is protected using middlewares....

router.get("/home", authenticateRoute, (req, res) => {
  res.sendFile("home.html", { root: "./public" });
});

module.exports = router;
