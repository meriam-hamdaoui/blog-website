const homeContent = (req, res, homeStartingContent, posts) => {
  res.render("home", { homeParagraph: homeStartingContent, posts: posts });
};
module.exports = { homeContent };
