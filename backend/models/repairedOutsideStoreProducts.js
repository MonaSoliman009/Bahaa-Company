var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var repairedOutsideStoreProducts =new Schema({
    product: {
      type: Number,
      required: true,
    },

    shopName: {
      type: String,
      required: true,
     
    },
    recipient: {
        type: String,
        required: true,
       
    },
    deliveryMan:{
      type: String,
     required: true

    },
    cost:{
        type: Number,
        required: true
    },
    lastDealingWith: {
      type: mongoose.Schema.Types.ObjectId,
      enum: ["accountant", "owner", "employee"],
      required: true
    }
  }
);

repairedOutsideStoreProducts.virtual('productDetails', {
  ref: 'product', // The model to use
  localField: 'product', // Find people where `localField`
  foreignField: 'serialNumber', // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,

});
repairedOutsideStoreProducts.set("toObject", { virtuals: true });

// exports.repairedOutsideStoreProducts = repairedOutsideStoreProducts;
module.exports = mongoose.model('repairedOutsideStoreProducts', repairedOutsideStoreProducts)
