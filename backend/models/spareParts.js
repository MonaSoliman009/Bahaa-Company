var mongoose = require("mongoose");
var joi = require("joi");

var spareParts = mongoose.model(
  "spareParts",
  new mongoose.Schema({
    serialNumber: {
      type: Number,
      required: true,
    },

    insideProduct: {
      isInside: { type: Boolean, required: true },
      product: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
    },
  })
);

exports.spareParts = spareParts;
