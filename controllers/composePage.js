const composePage = (req, res) => {
  const newTitle = req.body.newTitle;
  const newPost = req.body.newPost;

  const newPublish = newTitle + " " + newPost;
  console.log(newPublish);
  res.render("compose");
};

module.exports = { composePage };
