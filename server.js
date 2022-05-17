//third-party modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

//local modules
const { listener } = require("./controllers/listener");
const router = require("./routes/router");

//give it a port
const port = 3001 || process.env.port;

//initiate the server
const app = express();

//use the ejs template
app.set("view engine", "ejs");

//use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//use static file for styling
app.use(express.static("public"));

//use the router
app.use("/", router);

//server listener
app.listen(port, (err) => listener(err, port));
