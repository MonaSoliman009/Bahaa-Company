const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TestPhase = new Schema({
  power: {
    type: Boolean,
    required: true,
  },
  condition: {
    aPart: {
      avaliable: { type: Boolean, required: true },
      hasScratch: { type: Boolean },
      broken: { type: Boolean },
      dent: { type: Boolean },
    },
    bPart: {
      avaliable: { type: Boolean, required: true },
      hasScratch: { type: Boolean },
      broken: { type: Boolean },
      dent: { type: Boolean },
    },
    cPart: {
      avaliable: { type: Boolean, required: true },
      hasScratch: { type: Boolean },
      broken: { type: Boolean },
      dent: { type: Boolean},
    },
    dPart: {
      avaliable: { type: Boolean, required: true },
      hasScratch: { type: Boolean},
      broken: { type: Boolean },
      dent: { type: Boolean},
    },
    location: [
      {
        partName: { type: String },
        PartProblem: { type: String },
      },
    ],
  },
  configuration: {
    cpu: { type: String, required: true },
    generation: { type: Number, required: true },
    ram: { type: Number, required: true },
    hdd: { type: String, required: true },
  },
  battery: {
    avaliable: { type: Boolean, required: true },
    batteryHealth: { type: String},
  },
  lcd: {
    avaliable: { type: Boolean, required: true },
    status: { type: String, required: true },
    hasScratch: { type: Boolean },
    hasSpots: { type: Boolean},
    hasLine: { type: Boolean},
    hasPixel: { type: Boolean },
    broken: { type: Boolean},
  },
  bazel: {
    avaliable: { type: Boolean, required: true },
    broken: { type: Boolean },
    location: { type: String },
  },
  keyboard: {
    avaliable: { type: Boolean, required: true },
    working: { type: Boolean },
  },
  dvd: {
    avaliable: { type: Boolean, required: true },
    working: { type: Boolean },
  },
  speakers: {
    avaliable: { type: Boolean, required: true },
    working: { type: Boolean },
  },
  camera: {
    avaliable: { type: Boolean, required: true },
    working: { type: Boolean },
  },
  hasVGAorIntel: {
    type: Boolean,
    required: true,
  },
  lastDealingWith: {
    type: mongoose.Schema.Types.ObjectId,
    enum: ["accountant", "owner", "employee"],
  },
  ProductSerial: { type: Number, required: true },
});
TestPhase.virtual("Product", {
  ref: "product", // The model to use
  localField: "ProductSerial", // Find people where `localField`
  foreignField: "serialNumber", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
 
});
TestPhase.set("toObject", { virtuals: true });
module.exports = mongoose.model("TestPhase", TestPhase);
