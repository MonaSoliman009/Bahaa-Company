var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");

var parseUrlencoded = bodyParser.urlencoded({
  extended: true,
});
var  saleInvoice  = require("../models/saleInvoice");
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
      productSerialNumber: req.body.Products[i].productSerialNumber,
      quantity: req.body.Products[i].quantity,
    };
    console.log(req.body.Products[i].quantity);
  let productt=await  product.findOne({serialNumber:req.body.Products[i].productSerialNumber,quantity : {$gte : req.body.Products[i].quantity}})
   if(productt){
     console.log("1")
    let soldProductsReportt = new soldProductsReport({
      product: obj,
      
    });
    soldProductsReportt.save();
    product.findOneAndUpdate({serialNumber:req.body.Products[i].productSerialNumber },{$inc: {quantity: -req.body.Products[i].quantity}},function(err,updated){
      if(err){
        console.log(err)
      }else{
        console.log("product updated")
      }
    });

  // let x=await mongoose.model("product").findOneAndRemove({
  //     serialNumber: req.body.Products[i].productSerialNumber,quantity:0
  //   })
   }else{
    console.log("2")

    return res.json("quantity should be less than or equal quantity of product")
   }
   
  }
 
  saleInvoicee.save();
  res.json(saleInvoicee);
});

router.get("/list", parseUrlencoded, async (req, res) => {
   saleInvoice.find().populate("serials").exec(function(error, bands) {
    if(error){
      console.log(error)
    }
    res.json(bands);

  });;
});

router.get("/list/:id",async(req,res)=>{
  saleInvoice.findOne({_id:req.params.id}).populate("serials").exec(function(error, bands) {
    if(error){
      console.log(error)
    }
    res.json(bands);

  });;
})
module.exports = router;
