const express = require("express");
const { login, logout } = require("./login");
const getUserData = require("./UserInfo");
const authenticateAPI = require("../middlewares/apiAuthMiddleware"); // this middleware makes sure the api is protected

const router = express.Router();

router.post("/login", login);
router.get("/logout", logout);
router.get("/users", authenticateAPI, getUserData);

module.exports = router;
