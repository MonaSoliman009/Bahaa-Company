const express = require("express");
const router = express.Router();
var modelPrice=require("../models/modelPrice")








router.get("/all", async (req, resp) => {
   
    let modelPrices=await modelPrice.find({});
  
    resp.json(modelPrices);
  
  });

  router.post("/add", async (req, resp) => {
   
    let new_model =await new modelPrice({
        model: req.body.model,
        price: req.body.price,
     
      });  
    resp.json(new_model);
  
  });

  router.delete("/delete/:id",async (req, resp) => {
 await modelPrice.findOneAndRemove({_id:req.params.id})

resp.json("Deleted successfully")

  })

  router.put("/update/:id",async (req, resp) => {
    await modelPrice.findOneAndUpdate({_id:req.params.id},req.body,function (err, data) {
        if (err) {
          console.log(err);
        }
        resp.send(data);
      })
   
 
   
     })