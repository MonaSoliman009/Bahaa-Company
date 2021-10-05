var mongoose = require("mongoose");
var joi = require("joi");
const Schema = mongoose.Schema;

var goodProductsReport = new Schema({
  productSerialNumber: {
      type: Number,
      required: true,
      unique: true
    },
  }
);
goodProductsReport.virtual("ProductDetails", {
  ref: "product", // The model to use
  localField: "productSerialNumber", // Find people where `localField`
  foreignField: "serialNumber", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
});
goodProductsReport.set("toJSON", { virtuals: true });
// exports.goodProductsReport = goodProductsReport;
module.exports = mongoose.model('goodProductsReport', goodProductsReport)
