var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var repairedInsideStorePhase = new Schema({
 
    productSerialNumber: {
      type: String,
      required: true,
      required: true,
    },

    SpareParts: 
      {
        isAdded: { type: Boolean, required: true },
        sparePartNumber: [{ type: String }],
      }
    ,
    lastDealingWith: {
      type: mongoose.Schema.Types.ObjectId,
      enum: ["accountant", "owner", "employee"],
      required: true
    }
}
);
repairedInsideStorePhase.virtual("SparePartsDetails", {
  ref: "spareParts", // The model to use
  localField: "SpareParts.sparePartNumber", // Find people where `localField`
  foreignField: "serialNumber", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
});
repairedInsideStorePhase.virtual('productDetails', {
  ref: 'product', // The model to use
  localField: 'productSerialNumber', // Find people where `localField`
  foreignField: 'serialNumber', // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,

});
repairedInsideStorePhase.set("toObject", { virtuals: true });
// exports.repairedInsideStorePhase = repairedInsideStorePhase;
module.exports = mongoose.model('repairedInsideStorePhase', repairedInsideStorePhase)