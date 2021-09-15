var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");

var parseUrlencoded = bodyParser.urlencoded({
  extended: true,
});
var { soldProductsReport } = require("../models/soldProductsReport");

router.get("/list", parseUrlencoded, async (req, res) => {
  // let result = await soldProductsReport.find();
  // res.json(result);

  soldProductsReport.find().populate("product.productId").then((result) => {
      res.json(result);
    });
});

module.exports = router;
