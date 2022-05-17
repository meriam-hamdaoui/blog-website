const composePage = (req, res) => {
  res.render("compose");
};

// module.exports = { composePage };

const composePost = (req, res, posts) => {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody,
  };
  posts.push(post);
  //   console.log(posts);
  res.redirect("/");
};

module.exports = { composePage, composePost };
