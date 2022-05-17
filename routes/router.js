//third-party modules
const express = require("express");

//local modules
//const { affichage } = require("../controllers/affichage");
const { homeContent } = require("../controllers/homeContent");

//initiate a server route
const router = express.Router();

//get methode
router.get("/", homeContent);

module.exports = router;
