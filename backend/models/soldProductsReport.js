var mongoose = require("mongoose");
var joi = require("joi");

var soldProductsReport = mongoose.model(
  "soldProductsReport",
  new mongoose.Schema({
    product: 
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
          required: true,
        },
        quantity: { type: Number, required: true },
      }
    
  })
);

exports.soldProductsReport = soldProductsReport;
