var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");

var parseUrlencoded = bodyParser.urlencoded({
  extended: true,
});
var {PurchaseInvoice }= require("../models/purchase invoice");



router.post("/add", parseUrlencoded, function (req, res) {
    // var { error } = validatesaleInvoice(req.body);
    // if (error) {
    //   return res.status(400).send(error.details[0].message);
    // }
    let PurchaseInvoicee = new PurchaseInvoice({
      purchaseNumber: req.body.purchaseNumber,
      purchaseDate: req.body.purchaseDate,
      supplier: req.body.supplier,
      purchaseCart: req.body.purchaseCart,
    });
    PurchaseInvoicee.save();
    res.json(PurchaseInvoicee);
  });



























module.exports = router;