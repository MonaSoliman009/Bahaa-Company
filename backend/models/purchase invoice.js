const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const purchaseInvoiceSchema=new Schema({
    purchaseNumber:{
        type: Number,
        required: true 
    },
    purchaseDate: {
        type: Date,
        required: true
      },
    supplier: {
        type: String,
        required: true
      } ,
    purchaseCart: {
        items: [
          {
            productId: {
              type: Schema.Types.ObjectId,
              ref: 'Product',
              required: true
            },
            quantity: { type: Number, required: true }
          }
        ]
      }  

});


module.exports=mongoose.model('PurchaseInvoice',purchaseInvoiceSchema);