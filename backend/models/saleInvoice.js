var mongoose = require("mongoose");
var joi = require("joi");
var autoIncrement = require("mongoose-auto-increment");

const Schema = mongoose.Schema;
var saleInvoice = new Schema({
  SerialNumber: {
    type: Number,
   
  },
  customerName: {
    type: String,
    required: true,
  },

  price: {
    type: Number,

    minlength: 2,
  },
  date: {
    type: Date,
    required: true,
  },
  Products: [
    {
      productSerialNumber: {
        type: String,
        required: true,
      },
      configuration: {
        cpu: { type: String, required: true },
        withCharger: { type: Boolean, required: true },
        ram: { type: Number, required: true },
        hard: { type: String, required: true },
      },
    },
  ],
  seller: {
    type: String,
 
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

saleInvoice.virtual("serials", {
  ref: "product", // The model to use
  localField: "Products.productSerialNumber", // Find people where `localField`
  foreignField: "serialNumber", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
  match: { isActive: true },
});

saleInvoice.set("toJSON", { virtuals: true });

// exports.saleInvoice = saleInvoice;


function validateInvoice(x) {
  var Schema =joi.object( {
    SerialNumber:joi.number(),
    customerName: joi.string().min(3).max(45).required(),
    price: joi.number(),
    seller: joi.string().min(2).max(225),
    status: joi.string().min(2).max(255),
    Products:joi.array().required()
  
  });
  return Schema.validate(x)
}

exports.validateInvoice = validateInvoice;
exports.saleInvoice = mongoose.model("saleInvoice", saleInvoice);
