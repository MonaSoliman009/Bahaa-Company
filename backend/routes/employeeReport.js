var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");

var parseUrlencoded = bodyParser.urlencoded({
  extended: true,
});
var  employeeReport  = require("../models/employeeReport");
router.get("/tested/:id", parseUrlencoded, async (req, res) => {
    let result = await employeeReport.find({employee:req.params.id,status:"Testing"}).populate("employee").populate("ProductDetails");
    res.json(result);
  

  });
  router.get("/maintainedInside/:id", parseUrlencoded, async (req, res) => {
    let result = await employeeReport.find({employee:req.params.id,status:"Maintenance Inside"}).populate("employee").populate("ProductDetails");
    res.json(result);
  
    
  });
  router.get("/maintainedOutside/:id", parseUrlencoded, async (req, res) => {
    let result = await employeeReport.find({employee:req.params.id,status:"Maintenance Outside"}).populate("employee").populate("ProductDetails");
    res.json(result);
  
  
  });
  
  module.exports = router;