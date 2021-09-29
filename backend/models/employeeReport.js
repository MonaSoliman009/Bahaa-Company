var mongoose = require("mongoose");
var joi = require("joi");
const Schema = mongoose.Schema

var employeeReport = new Schema({ 
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "employee",
      required: true,
    },
    finishedProduct: {

      type: Number,
      required: true
    },
    finishedAt: {
      type: Date, required: true 
    },
    status: {
      type: String,
      required: true,
    }
  })

employeeReport.virtual('ProductDetails', {
  ref: 'product', // The model to use
  localField: 'finishedProduct', // Find people where `localField`
  foreignField: 'serialNumber', // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
  match: { isActive: true }
});
employeeReport.set('toJSON', { virtuals: true })
// exports.employeeReport = employeeReport;
module.exports = mongoose.model('employeeReport', employeeReport)


