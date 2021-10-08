var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");

var parseUrlencoded = bodyParser.urlencoded({
  extended: true,
});
var  employeeReport  = require("../models/employeeReport");
router.get("/tested/:id/:date", parseUrlencoded, async (req, res) => {
  var d=new Date(req.params.date);
  console.log(d)
  var arr=[]
      let result = await employeeReport.find({employee:req.params.id,status:"Testing" }).populate("employee").populate("ProductDetails");
      if(result){
        for(var i=0;i<result.length;i++){
          if(result[i].finishedAt.toLocaleDateString()==d.toLocaleDateString()){
            arr.push(result[i])
          }
        }
      }
    
  
      res.json(arr);
  

  });
  router.get("/monthly/tested/:id/:month", parseUrlencoded, async (req, res) => {
 
    var arr=[]
        let result = await employeeReport.find({employee:req.params.id,status:"Testing" }).populate("employee").populate("ProductDetails");
        if(result){
          for(var i=0;i<result.length;i++){
            if(result[i].finishedAt.getMonth()+1==req.params.month){
              arr.push(result[i])
            }
          }
        }
      
    
        res.json(arr);
    
  
    });
  router.get("/maintainedInside/:id/:date", parseUrlencoded, async (req, res) => {
    var d=new Date(req.params.date);
    console.log(d)
    var arr=[]
    let result = await employeeReport.find({employee:req.params.id,status:"Maintenance Inside"}).populate("employee").populate("ProductDetails");
    if(result){
      for(var i=0;i<result.length;i++){
        if(result[i].finishedAt.toLocaleDateString()==d.toLocaleDateString()){
          arr.push(result[i])
        }
      }
    }
  

    res.json(arr);
  
    
  });
  router.get("/monthly/maintainedInside/:id/:month", parseUrlencoded, async (req, res) => {
  
    var arr=[]
    let result = await employeeReport.find({employee:req.params.id,status:"Maintenance Inside"}).populate("employee").populate("ProductDetails");
    if(result){
      for(var i=0;i<result.length;i++){
        if(result[i].finishedAt.getMonth()+1==req.params.month){
          arr.push(result[i])
        }
      }
    }
  

    res.json(arr);
  
    
  });
  router.get("/maintainedOutside/:id/:date", parseUrlencoded, async (req, res) => {
    var d=new Date(req.params.date);
  console.log(d)
  var arr=[]
    let result = await employeeReport.find({employee:req.params.id,status:"Maintenance Outside"}).populate("employee").populate("ProductDetails");
    if(result){
      for(var i=0;i<result.length;i++){
        if(result[i].finishedAt.toLocaleDateString()==d.toLocaleDateString()){
          arr.push(result[i])
        }
      }
    }
  

    res.json(arr);

  });

  router.get("/monthly/maintainedOutside/:id/:month", parseUrlencoded, async (req, res) => {
    var d=new Date(req.params.date);
  console.log(d)
  var arr=[]
    let result = await employeeReport.find({employee:req.params.id,status:"Maintenance Outside"}).populate("employee").populate("ProductDetails");
    if(result){
      for(var i=0;i<result.length;i++){
        if(result[i].finishedAt.getMonth()+1==req.params.month){
          arr.push(result[i])
        }
      }
    }
  

    res.json(arr);

  });
  
  module.exports = router;