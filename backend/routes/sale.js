var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");

var parseUrlencoded = bodyParser.urlencoded({
  extended: true,
});
var {saleInvoice }= require("../models/saleInvoice");



router.post("/add", parseUrlencoded, function (req, res) {
  
    let saleInvoicee = new saleInvoice({
        customerName: req.body.customerName,
        price: req.body.price,
        date: req.body.date,
        Products: req.body.Products,
        seller:req.body.seller
    });
    saleInvoicee.save();
    res.json(saleInvoicee);
  });

  router.get("/list", parseUrlencoded, async (req, res)=> {
    let result = await saleInvoice.find();
    res.json(result);
  });

  module.exports = router;
