const composePage = (req, res, posts) => {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody,
  };
  posts.push(post);
  console.log(posts);
  res.render("compose", { posts: posts });
};

module.exports = { composePage };
