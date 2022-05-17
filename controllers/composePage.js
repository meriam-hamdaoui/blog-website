const composePage = (req, res) => {
  const post = {
    postTitle: req.body.postTitle,
    postBody: req.body.postBody,
  };

  console.log(post.postTitle + " " + post.postBody);
  res.render("compose");
};

module.exports = { composePage };
