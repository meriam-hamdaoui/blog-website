const aboutContentFct = (req, res, aboutContent) => {
  res.render("about", { aboutParagraph: aboutContent });
};
module.exports = { aboutContentFct };
