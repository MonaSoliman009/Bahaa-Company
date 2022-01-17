var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");

var parseUrlencoded = bodyParser.urlencoded({
  extended: true,
});
var{validateInvoice,saleInvoice} = require("../models/saleInvoice");
var soldProductsReport = require("../models/soldProductsReport");
var { product } = require("../models/product");

router.post("/add", parseUrlencoded, async (req, res) => {
  var { error } = validateInvoice(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  var d = new Date();
  var _status =req.body.price? "completed":"pending";
  var latest=await  saleInvoice.findOne().sort({ date: -1 }).limit(1);
  var autoIncreamentNum;
  if(latest){
    autoIncreamentNum="00"+(parseInt(latest.SerialNumber)+1).toString()
  }else{
    autoIncreamentNum="001"
  }
  console.log(autoIncreamentNum)
  let saleInvoicee = new saleInvoice({
    SerialNumber:autoIncreamentNum,
    customerName: req.body.customerName,
    price: req.body.price?req.body.price:null,
    date: d.toString(),
    Products: req.body.Products,
    seller: req.body.seller,
    status: _status,
  });
 
  for (var i = 0; i < req.body.Products.length; i++) {
 
    let productt = await product.findOne({
      serialNumber: req.body.Products[i].productSerialNumber
    });
    if (productt) {
      console.log("1");
      let pro = await soldProductsReport.findOne({
        productSerialNumber: req.body.Products[i].productSerialNumber
      });
      if(pro){
           return  res.json("Product Sold Before");
      }else{
        let soldProductsReportt = new soldProductsReport({
          productSerialNumber: req.body.Products[i].productSerialNumber
        });
        soldProductsReportt.save();
      }
   
 
    } else {
      console.log("2");

      return res.json(
        "One Of The Products Is Not Exit"
      );
    }
  }

  saleInvoicee.save();
  res.json(saleInvoicee);
});

router.get("/list", parseUrlencoded, async (req, res) => {
  saleInvoice
    .find({ status: "completed" })
    .populate("serials")
    .exec(function (error, bands) {
      if (error) {
        return res.status(400).send("Try Again Please");
      }
      res.json(bands);
    });
});

router.get("/list/pending", parseUrlencoded, async (req, res) => {
  saleInvoice
    .find({ status: "pending" })
    .populate("serials")
    .exec(function (error, bands) {
      if (error) {
        return res.status(400).send("Try Again Please");
      }
      res.json(bands);
    });
});

router.get("/list/:id", async (req, res) => {
  saleInvoice
    .findOne({ _id: req.params.id })
    .populate("serials")
    .exec(function (error, bands) {
      if (error) {
        return res.status(400).send("Try Again Please");
      }
      res.json(bands);
    });
});
router.post("/complete/pending/:id", async (req, res) => {
  await saleInvoice.updateOne(
    { _id: req.params.id },
    {
      $set: { status: "completed", price: req.body.price },
    },function (error,data){
      if(error){
        return res.status(400).send("Try Again Please");
      }
      res.json("Updated Successfully");
    }
  ).clone().catch(function(err){ console.log(err)});
});
module.exports = router;
