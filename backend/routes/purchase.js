var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");

var parseUrlencoded = bodyParser.urlencoded({
  extended: true,
});
var {PurchaseInvoice }= require("../models/purchase invoice");



router.post("/add", parseUrlencoded, function (req, res) {
  
    let PurchaseInvoicee = new PurchaseInvoice({
      purchaseNumber: req.body.purchaseNumber,
      purchaseDate: req.body.purchaseDate,
      supplier: req.body.supplier,
      purchaseCart: req.body.purchaseCart,
    });
    PurchaseInvoicee.save();
    res.json(PurchaseInvoicee);
  });


  router.get("/list", parseUrlencoded, async (req, res)=> {
    let result = await PurchaseInvoice.find();
    res.json(result);
  });
























module.exports = router;