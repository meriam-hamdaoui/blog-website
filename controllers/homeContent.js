const homeContent = (req, res, homeStartingContent, posts) => {
  res.render("home", { homeParagraph: homeStartingContent, postItems: posts });
};
module.exports = { homeContent };
