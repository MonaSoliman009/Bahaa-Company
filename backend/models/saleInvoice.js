var mongoose = require("mongoose");
var joi = require("joi");

var saleInvoice = mongoose.model(
  "saleInvoice",
  new mongoose.Schema({
    customerName: {
      type: String,
      required: true,
     
    },

    price: {
      type: Number,
      required: true,
      minlength:2
    },
    date: {
      type: Date,
      required: true,
      
    },
    Products: {
      items: [
        {
          productId: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
          },
          quantity: { type: Number, required: true },
          configuration: {
            cpu:{type:String},
            withCharger:{type:Boolean,required:true},
            ram:{type:Number,required:true},
            hard:{type:String,required:true} 
         }
        }
      ]
    },
          seller:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Employee",
          }
        
    
  })
);




exports.saleInvoice = saleInvoice;