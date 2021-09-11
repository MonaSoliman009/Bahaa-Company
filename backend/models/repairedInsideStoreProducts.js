var mongoose = require("mongoose");
var joi = require("joi");

var repairedInsideStoreProducts = mongoose.model(
  "repairedInsideStoreProducts",
  new mongoose.Schema({
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },

    SpareParts: [{
      isAdded: { type: Boolean, required: true },
      sparePart:{ type: mongoose.Schema.Types.ObjectId, ref: "spareParts" }
    }]
  })
);

exports.repairedInsideStoreProducts = repairedInsideStoreProducts;
