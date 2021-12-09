var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");

var parseUrlencoded = bodyParser.urlencoded({
  extended: true,
});
var  saleInvoice  = require("../models/saleInvoice");
var soldProductsReport  = require("../models/soldProductsReport");
var { product } = require("../models/product");


router.post("/add", parseUrlencoded, async (req, res)=> {
  var d = new Date();
var _status="pending";
if(req.body.price!=null){
  _status="completed";
}
  let saleInvoicee = new saleInvoice({
    customerName: req.body.customerName,
    price: req.body.price,
    date: d.toString(),
    Products: req.body.Products,
    seller: req.body.seller,
    status: _status
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
    // let new_employeeReport = new employeeReport({

    //   employee:req.body.seller,
    //   finishedProduct: productserialNumber,
    //   finishedAt:d.toString(),
    //   status:"sold"
        

    // })  
    // await new_employeeReport.save();
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
   saleInvoice.find({status:"completed"}).populate("serials").exec(function(error, bands) {
    if(error){
      console.log(error)
    }
    res.json(bands);

  });;
});

router.get("/list/pending", parseUrlencoded, async (req, res) => {
  saleInvoice.find({status:"pending"}).populate("serials").exec(function(error, bands) {
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
router.post("/complete/pending/:id",async(req,res)=>{
  await PurchaseInvoice.updateOne(
    { _id: req.params.id },
    {
      $set: { status: "completed", price: req.body.price },
    }
  );

})
module.exports = router;
