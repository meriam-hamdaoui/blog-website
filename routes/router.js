//third-party modules
const express = require("express");

//local modules
const { affichage } = require("../controllers/affichage");

//initiate a server route
const router = express.Router();

//get methode
router.get("/", affichage);

module.exports = router;
