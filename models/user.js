module.exports = function(db, cb)
{
    var User = db.define('user', {
              userName : String,
              password : String,
              mail : String,
              mark : Number,
              lastAlertSent : Date,
              subscriptionDate : Date,
              lastAction : Date,
              specialUser : Boolean,
              uuid  : String
              },
              {
         validations:
                 {
                  userName : [orm.enforce.required(error.errorStr(error.missingRequiredField, "userName missing")), orm.enforce.unique({ ignoreCase: true },  error.errorStr(error.usernameAlreadyUsed, "userName already used")), orm.enforce.ranges.length(3, undefined, error.errorStr(error.usernameTooShort, "userName too shoty"))],
                }
              }
              );
}