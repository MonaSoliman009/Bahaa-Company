var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");

var parseUrlencoded = bodyParser.urlencoded({
  extended: true,
});
var { PurchaseInvoice } = require("../models/purchase invoice");
var { product } = require("../models/product");
var {accessories}= require("../models/accessories");
router.post("/add/:id", parseUrlencoded, async (req, res)=> {
  var arr = [];
  var d = new Date();

  for (var i = 0; i < req.body.products.length; i++) {
    let productt = new product({
      serialNumber: req.body.products[i].serialNumber,
      model: req.body.products[i].model,
      addedAt: d.toString(),
      quantity: req.body.products[i].quantity,
      price: req.body.products[i].price,
      purchaseSerialNumber: req.body.purchaseNumber,
      addedBy: req.params.id,
    });
  await  productt.save();
    let pro = await product.findOne({
      serialNumber: productt.serialNumber
    });
    console.log(pro)

    arr.push({ productId: pro.id, quantity: req.body.products[i].quantity });
  }

  for(var i=0;i< req.body.accessories.length;i++){
    let accessoriess = new accessories({
      type: req.body.accessories[i].type,
      price: req.body.accessories[i].price,
      quantity: req.body.accessories[i].quantity,
    
    });
    await  accessoriess.save();
    let acc = await accessories.findOne({
      type: accessoriess.type,
      price:accessoriess.price,
      quantity:accessoriess.quantity
    });
    console.log(acc)
    arr.push({ productId: acc.id, quantity: req.body.accessories[i].quantity });

  }
  console.log(arr)
  let PurchaseInvoicee = new PurchaseInvoice({
    purchaseNumber: req.body.purchaseNumber,
    purchaseDate:d.toString(),
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
router.get("/list/:id",async(req,res)=>{
  PurchaseInvoice.findOne({_id:req.params.id}).populate({path: "purchaseCart.productId",
  model: "product" || "accessories"}).exec(function(error, bands) {
    if(error){
      console.log(error)
    }
    res.json(bands);

  });;
})
module.exports = router;
