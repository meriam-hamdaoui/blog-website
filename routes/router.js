//third-party modules
const express = require("express");

//local modules
//const { affichage } = require("../controllers/affichage");
const { homeContent } = require("../controllers/homeContent");
const { aboutContentFct } = require("../controllers/aboutContent");
const { composePage } = require("../controllers/composePage");

//pages content
//const homeStartingContent =
// "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const {
  homeStartingContent,
  aboutContent,
  contactContent,
} = require("../constants/pagesContent");

//initiate a server route
const router = express.Router();

//get methode
router.get("/", (req, res) => homeContent(req, res, homeStartingContent));
router.get("/about", (req, res) => aboutContentFct(req, res, aboutContent));
router.get("/compose", composePage);
router.post("/compose", composePage);
module.exports = router;
