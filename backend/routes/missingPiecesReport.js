var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
var parseUrlencoded = bodyParser.urlencoded({
    extended: true,
  });

  var  missingPiecesSchema   = require("../models/missing pieces report");

router.get("/list", parseUrlencoded, async (req, res) => {
   
  
    missingPiecesSchema.find().populate("takenFrom").populate("addedTo")
    .populate("missingPieceDetails").populate("creatorOwner")
    .populate("creatorAccountant")
    .populate("creatorEmployee").then((result) => {
        res.json(result);
      });
  });

  router.get("/list/:id", parseUrlencoded, async (req, res) => {
  
    missingPiecesSchema.findOne({_id:req.params.id}).populate("takenFrom").populate("addedTo")
    .populate("missingPieceDetails").populate("creatorOwner")
    .populate("creatorAccountant")
    .populate("creatorEmployee").then((result) => {
        res.json(result);
      });
  });

  module.exports = router;