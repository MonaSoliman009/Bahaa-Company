var jwt = require("jsonwebtoken")

var {
  accountant
  
} = require("../models/accountant");
var {employee}=require("../models/employee");
var {  owner } = require("../models/owner");

function auth(req, resp, next) {
  try {
    var token = req.header('x_auth_token_owner');
    if (!token) {
      token = req.header('x_auth_token_accountant');
      if (!token) {
        token = req.header('x_auth_token_employee');
        if (!token) {
          resp.status(401).send("you are not logged in .")

        } else {

          var decoded = jwt.verify(token);
          req.employee = decoded;
          var freshuser = employee.findById(decoded._id);
          if (!freshuser) {
            resp.status(401).send("token is no longer exsist.")

          }
          next();

        }

      } else {

        var decoded = jwt.verify(token);
        req.accountant = decoded;
        var freshuser = accountant.findById(decoded._id);
        if (!freshuser) {
          resp.status(401).send("token is no longer exsist.")

        }
        next();


      }



    } else {

      var decoded = jwt.verify(token);
      req.owner = decoded;
      var freshuser = owner.findById(decoded._id);
      if (!freshuser) {
        resp.status(401).send("token is no longer exsist.")

      }
      next();
    }
  } catch (err) {
    resp.status(400).send('invalid token')
  }
}
module.exports = auth;