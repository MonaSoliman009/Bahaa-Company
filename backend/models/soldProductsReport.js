var mongoose = require("mongoose");
var joi = require("joi");
const Schema = mongoose.Schema;

var soldProductsReport = new Schema({
   
        productSerialNumber: {
          type: String,
        
          required: true,
          unique: true
        }
        
      
    
  })
soldProductsReport.virtual("ProductDetails", {
  ref: "product", // The model to use
  localField: "productSerialNumber", // Find people where `localField`
  foreignField: "serialNumber", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
});
soldProductsReport.set("toJSON", { virtuals: true });
function validateReport(x) {
  var Schema =joi.object( {
    productSerialNumber:joi.string().required(),
  
  
  });
  return Schema.validate(x)
}

exports.validateReport = validateReport;

// exports.soldProductsReport = soldProductsReport;
module.exports = mongoose.model('soldProductsReport', soldProductsReport)