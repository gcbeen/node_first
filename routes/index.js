exports.todos = {};
/*
 * GET all books
 */
exports.todos.all = function(req, res) {
  // db.books.find(function(err, books) {
  //   if(err) return;
  //   res.json(books);
  // });
};

/*
 * GET one book
 */
exports.todos.read = function(req, res) {
  // db.books.findOne({ "_id" : db.ObjectId(req.params.id) }, function(err, book) {
  //   if(err) return;
  //   res.json(book);
  // });
};

/*
 * POST a new book
 */
exports.todos.create = function(req, res) {
  // res.json(req.body);
  // db.books.save(req.body);

  var user = new User({
    //...
  });
  user.save(function(err, user) {
    //...
  });

};

/*
 * PUT a book
 */
exports.todos.update = function(req, res) {
  // res.json(req.body);
  // db.books.save(req.body);
};

/*
 * DELETE a book
 */
exports.todos.delete = function(req, res) {
  // res.json(req.body);
  // db.books.save(req.body);
};
