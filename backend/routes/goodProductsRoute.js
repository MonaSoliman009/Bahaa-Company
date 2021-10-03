var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
var parseUrlencoded = bodyParser.urlencoded({
    extended: true,
  });
var  goodProductsReport  = require("../models/goodProductsReport");

router.get("/list", parseUrlencoded, async (req, res) => {
    // let result = await soldProductsReport.find();
    // res.json(result);
  
    goodProductsReport.find().populate("ProductDetails").then((result) => {
        res.json(result);
      });
  });

  router.get("/list/:id", parseUrlencoded, async (req, res) => {
    // let result = await soldProductsReport.find();
    // res.json(result);
  
    goodProductsReport.findOne({_id:req.params.id}).populate("ProductDetails").then((result) => {
        res.json(result);
      });
  });















module.exports = router;