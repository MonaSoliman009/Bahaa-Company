var mongoose = require("mongoose");
var joi = require("joi");
const Schema = mongoose.Schema
 var saleInvoice = new Schema({ 
  

    customerName: {
      type: String,
      required: true,
     
    },

    price: {
      type: Number,
     
      minlength:2
    },
    date: {
      type: Date,
      required: true,
      
    },
    Products: [
     
        {
          productSerialNumber: {
            type: Number,
            required: true
          },
          quantity: { type: Number, required: true },
          configuration: {
            cpu:{type:String,required:true},
            withCharger:{type:Boolean,required:true},
            ram:{type:Number,required:true},
            hard:{type:String,required:true} 
         }
        }
      
    ],
          seller:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Employee",
            required: true
          },
          status:{
            type:String,
            required: true
          }
        
    
  })



saleInvoice.virtual('serials', {
  ref: 'product', // The model to use
  localField: 'Products.productSerialNumber', // Find people where `localField`
  foreignField: 'serialNumber', // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
  match: { isActive: true }
});
saleInvoice.set('toJSON', { virtuals: true })

// exports.saleInvoice = saleInvoice;
module.exports = mongoose.model('saleInvoice', saleInvoice)