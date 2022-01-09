var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var spareParts =new Schema({
  
    serialNumber: {
      type: String,
      required: true,
    },

    insideProduct: {
      isInside: { type: Boolean, required: true },
      product: { type: String }
    },
    AddedBy : {//currently working //or done by
      type: mongoose.Schema.Types.ObjectId,
      enum: ["employee", "owner","accountant"],
      required: true
    }
  }
);
spareParts.virtual("ProductDetails", {
  ref: "product", // The model to use
  localField: "insideProduct.product", // Find people where `localField`
  foreignField: "serialNumber", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
});
spareParts.set("toObject", { virtuals: true });
// exports.spareParts = spareParts;
module.exports = mongoose.model('spareParts', spareParts)