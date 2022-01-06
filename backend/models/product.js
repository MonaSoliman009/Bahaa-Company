const mongoose = require("mongoose");
var joi = require("joi");

var product = mongoose.model(
  "product",
  new mongoose.Schema({
    serialNumber: {
      type: String,
      required: true,
      unique: true,
    },
    model: {
      type: String,
      required: true,
    },

    addedAt: {
      type: Date,
      required: true,
    },

    price: {
      type: Number,
    },
    purchaseSerialNumber: {
      type: String,
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId, //who add the product
      enum: ['accountant', 'owner', 'employee'],
    },
    status: {
      type: String,
      required: true,
      default: "New",
    },
    tested: {
      type: Boolean,
      required: true,
      default: false,
    },
    maintened: {
      type: Boolean,
      required: true,
      default: false,
    },
  })
);

function validateProduct(x) {
  var Schema =joi.object( {
    serialNumber: joi.string().min(2).max(40).required(),
    model: joi.string().required(),
    addedAt: joi.date(),
    price:joi.number(),
    purchaseSerialNumber:joi.string(),
    status:joi.string(),
    tested:joi.boolean(),
    maintened:joi.boolean()

  
  });
  return Schema.validate(x)
}
exports.validateProduct = validateProduct;
exports.product = product;

//   processorType: {
//     type: String,
//     required: true,
//   },
//   ram: {
//     type: Number,
//     required: true,
//   },
//   hardDrive: {
//     type: Number,
//     required: true,
//   },
//   screenSize: {
//     type: Number,
//     required: true,
//   },
//   webCam: {
//     type: Boolean,
//     required: true,
//   },
//   opticalDrive: {
//     type: String,
//     required: true,
//   },
//   wireless: {
//     type: Boolean,
//     required: true,
//   },
//   ethernet: {
//     type: Boolean,
//     required: true,
//   },
//   fromFactor: {
//     type: String,
//     required: true,
//   },
//   hddCady: {
//     type: Boolean,
//     required: true,
//   },
//   adaptor: {
//     type: Boolean,
//     required: true,
//   },
//   battery: {
//     type: Boolean,
//     required: true,
//   },
//   grade: {
//     type: Boolean,
//     required: true,
//   },
//   make: {
//     type: String,
//     required: true,
//   },
