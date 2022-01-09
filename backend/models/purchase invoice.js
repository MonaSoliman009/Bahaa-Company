const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var joi = require("joi");

const PurchaseInvoice =new Schema({
  
    purchaseNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    purchaseDate: {
      type: Date,
      required: true,
    },
    supplier: {
      type: String,
     
    },
    status: {
      type: String,
      required: true,
    },
    purchaseCartProducts:  [
        {
          productId: {
            type: String,
            required: true,
         
          }
         
        }
      ],
      purchaseCartAccessories:[{

        productId: {
          type: String,
          required: true
        },
        quantity:{
          type: Number,
          required: true
        }
      }]
    
  })

PurchaseInvoice.virtual('products', {
  ref: 'product', // The model to use
  localField: 'purchaseCart.productId', // Find people where `localField`
  foreignField: '_id', // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,

});
PurchaseInvoice.virtual('accessories', {
  ref: 'accessories', // The model to use
  localField: 'purchaseCart.productId', // Find people where `localField`
  foreignField: '_id', // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,

});
PurchaseInvoice.set('toJSON', { virtuals: true });

function validatePurchaseInvoice(x) {
  var Schema =joi.object( {
    supplier:joi.string(),
    status: joi.string(),
    purchaseCartProducts: joi.array(),
  purchaseCartAccessories: joi.array(),
 
  purchaseDate:joi.date()
  });
  return Schema.validate(x)
}


exports.validatePurchaseInvoice = validatePurchaseInvoice;
exports.PurchaseInvoice = mongoose.model('PurchaseInvoice', PurchaseInvoice)
