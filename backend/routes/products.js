const express = require("express");
var  {PurchaseInvoice}  = require("../models/purchase invoice");

var  {product ,validateProduct }= require("../models/product");
const checkAuth = require("../middleware/check-auth");
var { modelPrice, validateModel } = require("../models/modelPrice");

const router = express.Router();
const bodyParser = require("body-parser");

var parseUrlencoded = bodyParser.urlencoded({
  extended: true,
});
router.post("/add/:id", parseUrlencoded, async function (req, res) {
  var { error } = validateProduct(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  let productt = await product.findOne({
    serialNumber: req.body.serialNumber
  });
  if(productt){
    return res.status(400).send("product already exit");

  }
  var d = new Date();
 let model= await modelPrice.findOne({model:req.body.model});
 if(model){
   var price=model.price;
 }else{
   return res.status(400).send("Model is not exit")
 }
if(req.body.purchaseSerialNumber){
  let purchaseInvoicee = await PurchaseInvoice.findOne({
    purchaseNumber: req.body.purchaseSerialNumber
  });
  if(!purchaseInvoicee){
    return res.status(400).send("purchase Invoice is not exit")
  
  }
}

   productt = new product({
    serialNumber: req.body.serialNumber,
    model: req.body.model,
    addedAt: d.toString(),
    price: price,
    purchaseSerialNumber: req.body.purchaseSerialNumber?req.body.purchaseSerialNumber:null,
    addedBy: req.params.id,
  });
  productt.save();
  res.json(productt);
});

router.post("/getBySerialNum", parseUrlencoded, async function (req, res) {

  let productt = await product.findOne({
    serialNumber: req.body.serialNumber
  });


  return res.json(productt);
});
router.get("/list", parseUrlencoded, async function (req, res) {

  let productts = await product.find({
  });


  res.json(productts);
});

router.get("/listLastFive", parseUrlencoded, async function (req, res) {

  let productts = await product.find({}).sort('-addedAt').limit(5);


  res.json(productts);
});

router.put("/update/:serialNumber", async (req, resp) => {//only for owner and accountant
  if(req.body.purchaseSerialNumber){
    let purchaseInvoicee = await PurchaseInvoice.findOne({
      purchaseNumber: req.body.purchaseSerialNumber
    });
    if(!purchaseInvoicee){
      return resp.status(400).send("purchase Invoice is not exit")
    
    }
  }
  await product.findOneAndUpdate(
    { serialNumber: req.params.serialNumber },
    req.body,
    function (err, data) {
      if (err) {
        return resp.status(400).send("Try Again")
      }
      resp.send(data);
    }
  ).clone().catch(function(err){ console.log(err)});
});

router.delete("/delete/:serialNumber", async (req, resp) => {//only for owner and accountant
  try{
    await product.findOneAndRemove({ serialNumber: req.params.serialNumber });
    resp.json("Deleted successfully");

  }catch(e){
    resp.json("Try to Delete it Later");

  }

});







//////////////////////////////////////////////////////////////////////////////////////////////////////////
// //Adding Product
// router.post("",checkAuth, (req, res, next) => {
//     const product = new Product({
//       serialNumber: req.body.serialNumber,
//       make: req.body.make,
//       model: req.body.model,
//       processorType: req.body.processorType,
//       ram: req.body.ram,
//       hardDrive: req.body.hardDrive,
//       screenSize: req.body.screenSize,
//       webCam: req.body.webCam,
//       opticalDrive: req.body.opticalDrive,
//       wireless: req.body.wireless,
//       ethernet: req.body.ethernet,
//       fromFactor: req.body.fromFactor,
//       hddCady: req.body.hddCady,
//       adaptor: req.body.adaptor,
//       battery: req.body.battery,
//       grade: req.body.grade,
//       addedAt: req.body.addedAt,
//       lastApdatedAt: req.body.lastApdatedAt,
//       quantity: req.body.quantity,
//       price: req.body.price,
//       purchaseSerialNumber: req.body.purchaseSerialNumber ,
//       LastDealingWith:req.userData.userId
//     });
//     product.save().then(createdProduct => {
//       res.status(201).json({
//         message: "Product added successfully",
//         productId: createdProduct._id
//       });
//     });
//   });

// //Updating Product
// router.put("/:id",checkAuth, (req, res, next) => {
//     const product = new Product({
//       _id: req.body.id,
//       serialNumber: req.body.serialNumber,
//       make: req.body.make,
//       model: req.body.model,
//       processorType: req.body.processorType,
//       ram: req.body.ram,
//       hardDrive: req.body.hardDrive,
//       screenSize: req.body.screenSize,
//       webCam: req.body.webCam,
//       opticalDrive: req.body.opticalDrive,
//       wireless: req.body.wireless,
//       ethernet: req.body.ethernet,
//       fromFactor: req.body.fromFactor,
//       hddCady: req.body.hddCady,
//       adaptor: req.body.adaptor,
//       battery: req.body.battery,
//       grade: req.body.grade,
//       addedAt: req.body.addedAt,
//       lastApdatedAt: req.body.lastApdatedAt,
//       quantity: req.body.quantity,
//       price: req.body.price,
//       purchaseSerialNumber: req.body.purchaseSerialNumber ,
//       LastDealingWith:req.userData.userId
//     });
//     Product.updateOne({ _id: req.params.id }, product).then(result => {
//       res.status(200).json({ message: "Update successful!" });
//     });
//   });

// //Fetching Products with pagination
// router.get("", (req, res, next) => {
//     const pageSize = +req.query.pagesize;
//     const currentPage = +req.query.page;
//     const productQuery = Product.find();
//     let fetchedProducts;
//     if (pageSize && currentPage) {
//       productQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
//     }
//     productQuery
//     .then(documents => {
//       fetchedProducts=documents;
//       return Product.count()
//     })
//     .then(count=>{
//       res.status(200).json({
//         message: "Products fetched successfully!",
//         products: fetchedProducts,
//         maxProducts: count
//       });

//     })

//     });


// //Fetching Product
// router.get("/:id", (req, res, next) => {
//     Product.findById(req.params.id).then(product => {
//       if (product) {
//         res.status(200).json(product);
//       } else {
//         res.status(404).json({ message: "Product not found!" });
//       }
//     });
//   });

// //Deleting Product
// router.delete("/:id",checkAuth, (req, res, next) => {
//     Product.deleteOne({ _id: req.params.id }).then(result => {
//       console.log(result);
//       res.status(200).json({ message: "Product deleted!" });
//     });
//   });

module.exports = router;
