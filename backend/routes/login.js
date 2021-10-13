var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var joi = require("joi")


var parseUrlencoded = bodyParser.urlencoded({
    extended: true
  });
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var  {accountant}= require("../models/accountant");
  var {employee}=require("../models/employee");
  var {owner}=require("../models/owner");

  router.post('/', parseUrlencoded, async (req, res) => {

    // var {
    //   error
    // } = validate(req.body);
    // if (error) {
    //   return res.status(400).send(error.details[0].message);
    // }
    let ownerr = await owner.findOne({
      email: req.body.email
    });

    if (!ownerr) {
      let accountantt = await accountant.findOne({
        email: req.body.email, approved:true
      });
      if (accountantt) {
        var validepassword = await bcrypt.compare(req.body.password, accountantt.password);
        if (!validepassword) {
          return res.status(400).send("invalid email or password.");

        } else {
          var token = jwt.sign({
            _id: accountantt._id,
          },"bahaa_jwtprivatekey_securekey")
          res.cookie('jwt', token, {
            httpOnly: true
          })
          res.header("x_auth_token_accountant", token).status(200).json({
            "accountant": accountantt._id,
            "token": token,
            "name": "accountant",
            "data":accountantt
          });

        }
      } else {
        let employeee = await employee.findOne({
          email: req.body.email, approved:true
        });
        if (employeee) {
          validepassword = await bcrypt.compare(req.body.password, employeee.password);
          if (!validepassword) {
            return res.status(400).send("invalid email or password.");

          } else {
            var token = jwt.sign({
              _id: employeee._id,
            },"bahaa_jwtprivatekey_securekey")
            res.cookie('jwt', token, {
              httpOnly: true
            })
            res.header("x_auth_token_employee", token).status(200).json({
              "employee": employeee._id,

              "token": token,
              "name": "employee"
            });
          }

        } else {
          return res.status(400).send("invalid email or password.");

        }
      }

    } else {
      validepassword = await bcrypt.compare(req.body.password, ownerr.password);
      if (!validepassword) {
        return res.status(400).send("invalid email or password.");

      } else {
        var token = jwt.sign({
          _id: ownerr._id,
        },   "bahaa_jwtprivatekey_securekey"
        )
        res.cookie('jwt', token, {
          httpOnly: true
        })
        res.header("x_auth_token_owner", token).status(200).json({
          "token": token,
          "owner": ownerr._id,
          "name": "owner"
        });
      }
    }


  })


  module.exports = router;
