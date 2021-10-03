var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
var parseUrlencoded = bodyParser.urlencoded({
    extended: true,
  });
var  defectiveProductsReport  = require("../models/defectiveProductsReport");

router.get("/list", parseUrlencoded, async (req, res) => {
   
  
    defectiveProductsReport.find().populate("ProductDetails").then((result) => {
        res.json(result);
      });
  });

  router.get("/list/:id", parseUrlencoded, async (req, res) => {
 
  
    defectiveProductsReport.findOne({_id:req.params.id}).populate("ProductDetails").then((result) => {
        res.json(result);
      });
  });















module.exports = router;