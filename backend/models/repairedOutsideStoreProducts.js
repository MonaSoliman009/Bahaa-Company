var mongoose = require("mongoose");
var joi = require("joi");

var repairedOutsideStoreProducts = mongoose.model(
  "repairedOutsideStoreProducts",
  new mongoose.Schema({
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },

    shopName: {
      type: String,
      required: true,
      minlength:2
     
    },
    recipient: {
        type: String,
        required: true,
        unique: true,

    },
    deliveryMan:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
    },
    cost:{
        type: Number,
        required: true
    }
  })
);

exports.repairedOutsideStoreProducts = repairedOutsideStoreProducts;
