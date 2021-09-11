const express = require("express");

const Product = require("../models/product");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

//Adding Product
router.post("",checkAuth, (req, res, next) => {
    const product = new Product({
      serialNumber: req.body.serialNumber,
      make: req.body.make,
      model: req.body.model,
      processorType: req.body.processorType,
      ram: req.body.ram,
      hardDrive: req.body.hardDrive,
      screenSize: req.body.screenSize,
      webCam: req.body.webCam,
      opticalDrive: req.body.opticalDrive,
      wireless: req.body.wireless,
      ethernet: req.body.ethernet,
      fromFactor: req.body.fromFactor,
      hddCady: req.body.hddCady,
      adaptor: req.body.adaptor,
      battery: req.body.battery,
      grade: req.body.grade,
      addedAt: req.body.addedAt,
      lastApdatedAt: req.body.lastApdatedAt,
      quantity: req.body.quantity,
      price: req.body.price,
      purchaseSerialNumber: req.body.purchaseSerialNumber ,
      LastDealingWith:req.userData.userId
    });
    product.save().then(createdProduct => {
      res.status(201).json({
        message: "Product added successfully",
        productId: createdProduct._id
      });
    });
  });

//Updating Product
router.put("/:id",checkAuth, (req, res, next) => {
    const product = new Product({
      _id: req.body.id,
      serialNumber: req.body.serialNumber,
      make: req.body.make,
      model: req.body.model,
      processorType: req.body.processorType,
      ram: req.body.ram,
      hardDrive: req.body.hardDrive,
      screenSize: req.body.screenSize,
      webCam: req.body.webCam,
      opticalDrive: req.body.opticalDrive,
      wireless: req.body.wireless,
      ethernet: req.body.ethernet,
      fromFactor: req.body.fromFactor,
      hddCady: req.body.hddCady,
      adaptor: req.body.adaptor,
      battery: req.body.battery,
      grade: req.body.grade,
      addedAt: req.body.addedAt,
      lastApdatedAt: req.body.lastApdatedAt,
      quantity: req.body.quantity,
      price: req.body.price,
      purchaseSerialNumber: req.body.purchaseSerialNumber ,
      LastDealingWith:req.userData.userId
    });
    Product.updateOne({ _id: req.params.id }, product).then(result => {
      res.status(200).json({ message: "Update successful!" });
    });
  });  

//Fetching Products with pagination
router.get("", (req, res, next) => {
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const productQuery = Product.find();
    let fetchedProducts;
    if (pageSize && currentPage) {
      productQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
    }
    productQuery
    .then(documents => {
      fetchedProducts=documents;
      return Product.count()
    })
    .then(count=>{
      res.status(200).json({
        message: "Products fetched successfully!",
        products: fetchedProducts,
        maxProducts: count 
      });

    })
     
    }); 
    
    
//Fetching Product  
router.get("/:id", (req, res, next) => {
    Product.findById(req.params.id).then(product => {
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: "Product not found!" });
      }
    });
  });

//Deleting Product  
router.delete("/:id",checkAuth, (req, res, next) => {
    Product.deleteOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json({ message: "Product deleted!" });
    });
  });  

module.exports = router;