var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");

var parseUrlencoded = bodyParser.urlencoded({
  extended: true,
});
var { PurchaseInvoice } = require("../models/purchase invoice");
var { product } = require("../models/product");

router.post("/add/:id", parseUrlencoded, function (req, res) {
  var arr = [];
  for (var i = 0; i < req.body.products; i++) {
    let productt = new product({
      serialNumber: req.body.products[i].serialNumber,
      model: req.body.products[i].model,
      addedAt: req.body.products[i].addedAt,
      quantity: req.body.products[i].quantity,
      price: req.body.products[i].price,
      purchaseNumber: req.body.purchaseNumber,
      addedBy: req.params.id,
    });
    productt.save();
    let pro = await product.findOne({
      serialNumber: req.body.products[i].serialNumber,
    });
    arr.push({ productId: pro.id, quantity: req.body.products[i].quantity });
  }
  let PurchaseInvoicee = new PurchaseInvoice({
    purchaseNumber: req.body.purchaseNumber,
    purchaseDate: req.body.purchaseDate,
    supplier: req.body.supplier,
    purchaseCart: arr,
  });
  PurchaseInvoicee.save();
  res.json(PurchaseInvoicee);
});

router.get("/list", parseUrlencoded, async (req, res) => {
  console.log("hi");
  let result = await PurchaseInvoice.find({}).populate({
    path: "purchaseCart.productId",
    model: "product" || "accessories",
  });
  res.json(result);
});

module.exports = router;
