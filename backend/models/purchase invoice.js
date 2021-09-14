const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PurchaseInvoice = mongoose.model(
  "PurchaseInvoice",
  new mongoose.Schema({
    purchaseNumber: {
      type: Number,
      required: true,
    },
    purchaseDate: {
      type: Date,
      required: true,
    },
    supplier: {
      type: String,
      required: true,
    },
    purchaseCart:  [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            enum: ["product", "accessories"],
            required: true,
          },
          quantity: { type: Number, required: true },
        }
      ]
    
  })
);

exports.PurchaseInvoice = PurchaseInvoice;
