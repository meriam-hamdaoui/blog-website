const composePage = (req, res) => {
  const newPublish = req.body.newBlog;
  console.log(newPublish);
  res.render("compose");
};

module.exports = { composePage };
