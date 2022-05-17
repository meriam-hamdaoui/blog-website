const composePage = (req, res) => {
  res.render("compose");
};

const composePost = (req, res, posts) => {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody,
  };
  if (!post.title && !post.content) {
    res.send("add a post first");
  } else {
    posts.push(post);
    res.redirect("/");
  }
};

module.exports = { composePage, composePost };
