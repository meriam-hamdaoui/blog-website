const composePage = (req, res) => {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody,
  };

  console.log(post);
  res.render("compose");
};

module.exports = { composePage };
