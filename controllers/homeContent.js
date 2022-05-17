const homeContent = (req, res, homeStartingContent) => {
  res.render("home", { homeParagraph: homeStartingContent });
};
module.exports = { homeContent };
