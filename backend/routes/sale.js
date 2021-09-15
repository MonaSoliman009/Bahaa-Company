var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");

var parseUrlencoded = bodyParser.urlencoded({
  extended: true,
});
var { saleInvoice } = require("../models/saleInvoice");
var { soldProductsReport } = require("../models/soldProductsReport");
var { product } = require("../models/product");
var mongoose = require("mongoose");

router.post("/add", parseUrlencoded, async (req, res)=> {
  let saleInvoicee = new saleInvoice({
    customerName: req.body.customerName,
    price: req.body.price,
    date: req.body.date,
    Products: req.body.Products,
    seller: req.body.seller,
  });
  var obj = {};
  for (var i = 0; i < req.body.Products.length; i++) {
    obj={
      productId: req.body.Products[i].productId,
      quantity: req.body.Products[i].quantity,
    };
    console.log(req.body.Products[i].quantity);
  let productt=await  product.findOne({_id:req.body.Products[i].productId,quantity : {$gte : req.body.Products[i].quantity}})
   if(productt){
     console.log("1")
    let soldProductsReportt = new soldProductsReport({
      product: obj,
      
    });
    soldProductsReportt.save();
    product.findByIdAndUpdate({_id:req.body.Products[i].productId },{$inc: {quantity: -req.body.Products[i].quantity}},function(err,updated){
      if(err){
        console.log(err)
      }else{
        console.log("product updated")
      }
    });

    mongoose.model("product").findOneAndRemove({
      _id: req.body.Products[i].productId,quantity:0
    },
    function (err, data) {
      if (!err) {
      }
    })
   }else{
    console.log("2")

    return res.json("quantity should be less than or equal quantity of product")
   }
   
  }
 
  saleInvoicee.save();
  res.json(saleInvoicee);
});

router.get("/list", parseUrlencoded, async (req, res) => {
  let result = await saleInvoice.find().populate("Products.productId");
  res.json(result);
});

module.exports = router;
