var mongoose = require("mongoose");
var joi = require("joi");

var soldProductsReport = mongoose.model(
  "soldProductsReport",
  new mongoose.Schema({
    product: 
      {
        productSerialNumber: {
          type: Number,
          ref: "product",
          required: true,
        },
        quantity: { type: Number, required: true },
      }
    
  })
);
soldProductsReport.virtual("ProductDetails", {
  ref: "product", // The model to use
  localField: "product.productSerialNumber", // Find people where `localField`
  foreignField: "serialNumber", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
});
soldProductsReport.set("toJSON", { virtuals: true });

exports.soldProductsReport = soldProductsReport;
