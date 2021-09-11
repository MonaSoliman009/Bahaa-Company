const express = require("express");
const router = express.Router();
var repairedInsideStoreProducts=require("../models/repairedInsideStoreProducts")
var repairedOutsideStoreProducts=require("../models/repairedOutsideStoreProducts")

//inside store


router.post("/add/insideStore", parseUrlencoded, function (req, res) {
  
    let repairedInsideStoreProducts = new repairedInsideStoreProducts({
        product: req.body.product,
        SpareParts: req.body.SpareParts,
    
    });
    repairedInsideStoreProducts.save();
    res.json(repairedInsideStoreProducts);
  });

  //outside store


  router.post("/add/outsideStore", parseUrlencoded, function (req, res) {
  
    let repairedOutsideStoreProducts = new repairedOutsideStoreProducts({
        product: req.body.product,
        shopName: req.body.shopName,
        recipient: req.body.recipient,
        deliveryMan: req.body.deliveryMan,
        cost: req.body.cost,
    
    });
    repairedOutsideStoreProducts.save();
    res.json(repairedOutsideStoreProducts);
  });