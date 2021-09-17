var mongoose = require("mongoose");
var joi = require("joi");

var repairedInsideStorePhase = mongoose.model(
  "repairedInsideStorePhase",
  new mongoose.Schema({
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },

    SpareParts: [
      {
        isAdded: { type: Boolean, required: true },
        sparePart: { type: Number, required: true },
      },
    ],
  })
);
repairedInsideStorePhase.virtual('SparePartsDetails', {
  ref: 'spareParts', // The model to use
  localField: 'SpareParts.sparePart', // Find people where `localField`
  foreignField: 'serialNumber', // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
  match: { isActive: true }
});
repairedInsideStorePhase.set('toJSON', { virtuals: true })
exports.repairedInsideStorePhase = repairedInsideStorePhase;
