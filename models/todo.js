var orm = require('orm');
module.exports = function(db, cb)
{
  var Todo = db.define('todo', 
                  {
                    title : String,
                    order : Number,
                    done : Boolean
                  },
                  {
                    validations:
                      {
                        userName : 
                          [
                            orm.enforce.required(error.errorStr(error.missingRequiredField, "title missing"))
                            // orm.enforce.unique({ ignoreCase: true },  error.errorStr(error.usernameAlreadyUsed, "userName already used")), 
                            // orm.enforce.ranges.length(3, undefined, error.errorStr(error.usernameTooShort, "userName too shoty"))
                          ]
                      }
                  }
                );

}

