var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
var { modelPrice } = require("../models/modelPrice");
var parseUrlencoded = bodyParser.urlencoded({
  extended: true,
});
var {
  
  PurchaseInvoice,
} = require("../models/purchase invoice");
var { product } = require("../models/product");
var { validateAccessories, accessories } = require("../models/accessories");

router.post("/add/:id", parseUrlencoded, async (req, res) => {
  // var { error } = validatePurchaseInvoice(req.body);
  // if (error) {
  //   return res.status(400).send(error.details[0].message);
  // }
  var arr = [];
  var arr2 = [];
  var prices = [];
  var models=[]
  var d = new Date();
  var latest=await  PurchaseInvoice.findOne().sort({ purchaseDate: -1 }).limit(1);
  var autoIncreamentNum;
  if(latest){
    autoIncreamentNum="00"+(parseInt(latest.purchaseNumber)+1).toString()
  }else{
    autoIncreamentNum="001"
  }
  console.log(autoIncreamentNum)
  for (var i = 0; i < req.body.purchaseCartProducts.length; i++) {
    var _modelPriceDetails = await modelPrice.findOne({
      model: {$regex : new RegExp(req.body.purchaseCartProducts[i].model, "i") } 
    });
    if (_modelPriceDetails) {
      prices.push(_modelPriceDetails.price);
      models.push(_modelPriceDetails.model)
    } else {
      return res.status(400).send("one of the models is not found please try again");
    }
  }
  console.log(prices);
  if (req.body.purchaseCartProducts.length != 0) {
    for (var i = 0; i < req.body.purchaseCartProducts.length; i++) {
      // let pro = await product.findOne({
      //   serialNumber: productt.serialNumber
      // });
      // console.log(pro)

      let productt = await product.findOne({
        serialNumber: req.body.purchaseCartProducts[i].serialNumber
      });
      if(productt){
        

      }else{
        let productt = new product({
          serialNumber: req.body.purchaseCartProducts[i].serialNumber,
          model: models[i],
          addedAt: d.toString(),
          price: prices[i],
          purchaseSerialNumber: autoIncreamentNum,
          addedBy: req.params.id,
        });
        await productt.save();
      }
      arr.push({ productId: req.body.purchaseCartProducts[i].serialNumber });

   
    }
  }
  ///////////////////

  ////////////////
  if (req.body.purchaseCartAccessories.length != 0) {
    for (var i = 0; i < req.body.purchaseCartAccessories.length; i++) {
      var { error } = validateAccessories(req.body.purchaseCartAccessories[i]);
      if (error) {
        return res.status(400).send(error.details[0].message);
      }

    
      let accessoriess = new accessories({
        type: req.body.purchaseCartAccessories[i].type,
        price: req.body.purchaseCartAccessories[i].price,
        quantity: req.body.purchaseCartAccessories[i].quantity,
      });
      await accessoriess.save();
      let acc = await accessories.findOne({
        type: accessoriess.type,
        price: accessoriess.price,
        quantity: accessoriess.quantity,
      });
      console.log(acc);
      arr2.push({
        productId: acc.id,
        quantity: acc.quantity
      });
    }
  }
  // if (req.body.purchaseCartProducts.length != 0) {
  //   for (var i = 0; i < req.body.purchaseCartProducts.length; i++) {

  //   }
  // }
  var invoice_status = req.body.supplier ? "Completed" : "Pending";

  console.log(arr);


  let PurchaseInvoicee = new PurchaseInvoice({
    purchaseNumber: autoIncreamentNum,
    purchaseDate: d.toString(),
    supplier: req.body.supplier ? req.body.supplier : null,
    status: invoice_status,
    purchaseCartProducts: arr,
    purchaseCartAccessories: arr2,
  });
  PurchaseInvoicee.save();



  res.json(PurchaseInvoicee);

});

router.get("/list", parseUrlencoded, async (req, res) => {
  console.log("hi");
  let result = await PurchaseInvoice.find({ status: "Completed" })
    .populate("products")
    .populate("accessories");
  res.json(result);
});
router.get("/list/pending", parseUrlencoded, async (req, res) => {
  console.log("hi");
  let result = await PurchaseInvoice.find({ status: "Pending" })
    .populate("products")
    .populate("accessories");
  res.json(result);
});
router.get("/list/:id", async (req, res) => {
  let result = await PurchaseInvoice.findOne({ _id: req.params.id })
 
    ;
    res.json(result);
});

router.post("/complete/pending/:id", async (req, res) => {
  await PurchaseInvoice.updateOne(
    { _id: req.params.id },
    {
      $set: { status: "Completed", supplier: req.body.supplier },
    }
    ,function (error,data){
      if(error){
        return res.status(400).send("Try Again Please");
      }
      res.json("Updated Successfully");
    }
  ).clone().catch(function(err){ console.log(err)});
});
module.exports = router;
