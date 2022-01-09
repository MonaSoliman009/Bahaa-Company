var mongoose = require("mongoose");
var joi = require("joi");
const Schema = mongoose.Schema;

var defectiveProductsReport =new Schema({
    product: {
      type: String,
      required: true,
      unique: true,
    }


 
  }
);
defectiveProductsReport.virtual("ProductDetails", {
  ref: "product", // The model to use
  localField: "product", // Find people where `localField`
  foreignField: "serialNumber", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
});
defectiveProductsReport.set("toJSON", { virtuals: true });

// exports.defectiveProductsReport = defectiveProductsReport;
module.exports = mongoose.model('defectiveProductsReport', defectiveProductsReport)