checkError = function(cb, err)
{
    if (err)
        return cb(err);
    return cb();
}

module.exports = function(db, cb)
{
    db.load("./todo.js", function (err) {checkError(cb, err)});

    // db.load("./user.js", function (err) {checkError(cb, err)});
    // db.load("./alert.js", function (err) {checkError(cb, err)});
    // db.load("./comment.js", function (err) {checkError(cb, err)});
    // db.load("./metropole.js", function (err) {checkError(cb, err)});
    // db.load("./period.js", function (err) {checkError(cb, err)});
    // db.load("./stop.js", function (err) {checkError(cb, err)});
    // db.load("./line.js", function (err) {checkError(cb, err)});
    // db.load("./types.js", function (err) {checkError(cb, err)});
    // db.load("./historique.js", function(err) {checkError(cb, err)});
    var Todo = db.models.todo;
    // var User = db.models.user;
    // var Alert = db.models.alert;
    // var Comment = db.models.comment;
    // var Metropole = db.models.metropole;
    // var Stop = db.models.stop;
    // var Line = db.models.line;
    // var Period = db.models.period;
    // var Types = db.models.types;
    // var Hist = db.models.historique;

    // Alert.hasOne("stop", Stop, {reverse : "alerts"});
    // Alert.hasOne("line", Line, {reverse : "alerts"});
}