//third-party modules
const express = require("express");

//lodash requirement
const _ = require("lodash");
// console.log(_.lowerCase("AAA"));

//local modules
//const { affichage } = require("../controllers/affichage");
const { homeContent } = require("../controllers/homeContent");
const { aboutContentFct } = require("../controllers/aboutContent");
const { composePage, composePost } = require("../controllers/composePage");

//pages content
const {
  homeStartingContent,
  aboutContent,
  contactContent,
} = require("../constants/pagesContent");

//global variable
let posts = [];

//initiate a server route
const router = express.Router();

//get methode
router.get("/", (req, res) =>
  homeContent(req, res, homeStartingContent, posts)
);
router.get("/about", (req, res) => aboutContentFct(req, res, aboutContent));
router.get("/compose", composePage);
router.post("/compose", (req, res) => composePost(req, res, posts));
//routing params challenge 16
router.get("/posts/:postName", (req, res) => {
  // console.log("typeof", typeof req.params.postName);
  const requestedTitle = _.lowerCase(req.params.postName);
  posts.forEach((post) => {
    const storedTitle = _.lowerCase(post.title);
    storedTitle === requestedTitle
      ? res.render("post", {
          theTitle: storedTitle,
          thePost: post.content,
        })
      : console.log("no such of route");
  });
});
module.exports = router;
