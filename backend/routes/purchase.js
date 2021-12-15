var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
var {modelPrice}=require("../models/modelPrice")
var parseUrlencoded = bodyParser.urlencoded({
  extended: true,
});
var  PurchaseInvoice  = require("../models/purchase invoice");
var { product } = require("../models/product");
var {accessories}= require("../models/accessories");
router.post("/add/:id", parseUrlencoded, async (req, res)=> {
  var arr = [];
  var prices=[]
  var d = new Date();
  for(var i=0;i<req.body.products.length;i++){
 var _modelPriceDetails=  await modelPrice.findOne({model: req.body.products[i].model});
       if(_modelPriceDetails){
         prices.push(_modelPriceDetails.price)
       }else{
        prices.push(null)
       }
  }
  console.log(prices);
if(req.body.products){

  for (var i = 0; i < req.body.products.length; i++) {
    let productt = new product({
      serialNumber: req.body.products[i].serialNumber,
      model: req.body.products[i].model,
      addedAt: d.toString(),
      price: prices[i],
      purchaseSerialNumber: req.body.purchaseNumber,
      addedBy: req.params.id,
    });
  await  productt.save();
    let pro = await product.findOne({
      serialNumber: productt.serialNumber
    });
    console.log(pro)

    arr.push({ productId: pro.id });
  }



}

if(req.body.accessories.length!=0){

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

}
var invoice_status="Pending";
if(req.body.supplier!=null&&!prices.includes(null)){
  invoice_status="Completed"
}
  console.log(arr)
  let PurchaseInvoicee = new PurchaseInvoice({
    purchaseNumber: req.body.purchaseNumber,
    purchaseDate:d.toString(),
    supplier: req.body.supplier?req.body.supplier:null,
    status:invoice_status,
    purchaseCart: arr,
  });
  PurchaseInvoicee.save();
  res.json(PurchaseInvoicee);
});

router.get("/list", parseUrlencoded, async (req, res) => {
  console.log("hi");
  let result = await PurchaseInvoice.find({status:"Completed"}).populate("products").populate("accessories");
  res.json(result);
});
router.get("/list/pending", parseUrlencoded, async (req, res) => {
  console.log("hi");
  let result = await PurchaseInvoice.find({status:"Pending"}).populate("products").populate("accessories");
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
});

router.post("/complete/pending/:id",async(req,res)=>{
  await PurchaseInvoice.updateOne(
    { _id: req.params.id },
    {
      $set: { status: "Completed", supplier: req.body.supplier },
    }
  );

})
module.exports = router;
