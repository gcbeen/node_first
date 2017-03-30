var express = require('express'),
    routes = require('./routes'),
    orm = require('orm');

var app = express();

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root',
//   database : 'test'
// });

// connection.connect();

// connection.query('SELECT aaa from test', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].aaa);
// });

// connection.end();


// var db = orm.connect('mysql://root:root@localhost/test');
// app.use(orm.express("mysql://username:password@host/database", {
//     define: function (db, models, next) {
//         models.person = db.define("person", { ... });
//         next();
//     }
// }));

// app.use(orm.express("mysql://root:root@localhost/test", {
//     define: function (db, models, next) {
//         models.person = db.define("person", {});
//         next();
//     }
// }));

// app.use(orm.express("mysql://root:root@localhost/test", {
//     define: function (db, models, next) {
//             db.load("./models", function (err2)
//         {
//             if (err2)   
//                 throw err2;
//             db.sync();
//         })
//         next();
//     }
// }));

app.use(express.static('static'));

// app.get('/todos', function (req, res) {
//   res.send('Hello World!');
// });

// app.get('/todo/:id', function (req, res) {
//   res.send('Hello World!');
// });

// app.post('/todo', function (req, res) {
//   res.send('Got a POST request');
// });

// app.put('/todo', function (req, res) {
//   res.send('Got a PUT request at /user');
// });

// app.delete('/todo', function (req, res) {
//   res.send('Got a DELETE request at /user');
// });

app.get('/todos', routes.todos.all);

app.get('/todo/:id', routes.todos.read);
app.post('/todo', routes.todos.create);
app.put('/todo', routes.todos.update);
app.delete('/todo', routes.todos.delete);



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

