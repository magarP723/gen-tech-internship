const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const routePages = require("./routes/pages");
const controller = require("./controllers/index");
const PORT = 8000;

app.use(cookieParser());
//middleware for directing static files in public folder

app.use("/js", express.static(__dirname + "/public/js"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use(express.json());

app.use("/", routePages); // this is for routing pages..
app.use("/api/", controller); // this is for api's

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
