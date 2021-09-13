const mongoose = require("mongoose");
var product =mongoose.model("product", new mongoose.Schema({
  serialNumber: {
    type: Number,
    required: true,
  },
//   make: {
//     type: String,
//     required: true,
//   },
  model: {
    type: String,
    required: true,
  },
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
  addedAt: {
    type: Date,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  purchaseSerialNumber: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PurchaseInvoice",
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId, //who add the product
    enum: ["accountant", "owner", "employee"],
  },
  status: {
    type: String,
    required: true,
    default: "New",
  },
}));
exports.product = product;

