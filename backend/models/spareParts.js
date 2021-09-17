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
      isInside: { type: Number,
        required: true},
      product: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
    },
  })
);
spareParts.virtual('ProductDetails', {
  ref: 'product', // The model to use
  localField: 'insideProduct.product', // Find people where `localField`
  foreignField: 'serialNumber', // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
  match: { isActive: true }
});
spareParts.set('toJSON', { virtuals: true })
exports.spareParts = spareParts;
