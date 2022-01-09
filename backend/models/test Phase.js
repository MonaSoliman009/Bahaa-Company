const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var joi = require("joi");

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
    status: { type: String},
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
  ProductSerial: { type: String, required: true },
});
TestPhase.virtual("Product", {
  ref: "product", // The model to use
  localField: "ProductSerial", // Find people where `localField`
  foreignField: "serialNumber", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
 
});
TestPhase.set("toJSON", { virtuals: true });
function validateTest(x) {
  var Schema =joi.object( {
    power: joi.boolean().required(),
    condition: joi.object({
      aPart:joi.object( {
        avaliable:joi.boolean().required(),
        hasScratch: joi.boolean(),
        broken: joi.boolean(),
        dent: joi.boolean(),
      }),
      bPart:joi.object( {
        avaliable:joi.boolean().required(),
        hasScratch: joi.boolean(),
        broken: joi.boolean(),
        dent: joi.boolean(),
      }),
      cPart: joi.object( {
        avaliable:joi.boolean().required(),
        hasScratch: joi.boolean(),
        broken: joi.boolean(),
        dent: joi.boolean(),
      }),
      dPart:joi.object( {
        avaliable:joi.boolean().required(),
        hasScratch: joi.boolean(),
        broken: joi.boolean(),
        dent: joi.boolean(),
      }),
      location:joi.array().items({
        
          partName:joi.string(),
          PartProblem: joi.string()
        

      }),


    }),
    configuration: joi.object({

      cpu: joi.string().required(),
      generation:joi.number().required(),
      ram: joi.number().required(),
      hdd:joi.string().required()


    }),
    battery: joi.object({
      avaliable: joi.boolean().required(),
      batteryHealth:""}),
      lcd:joi.object({

        avaliable: joi.boolean().required(),
        status: joi.any(),
        hasScratch: joi.boolean(),
        hasSpots: joi.boolean(),
        hasLine: joi.boolean(),
        hasPixel:joi.boolean(),
        broken: joi.boolean()


      }),

      bazel: joi.object({
        avaliable: joi.boolean().required(),
        broken: joi.boolean(),
        location: joi.any(),
      }),
      keyboard:joi.object( {
        avaliable: joi.boolean().required(),
        working: joi.boolean(),
      }),
      dvd: joi.object( {
        avaliable: joi.boolean().required(),
        working: joi.boolean(),
      }),
      speakers:joi.object(  {
        avaliable:  joi.boolean().required(),
        working:  joi.boolean(),
      }),
      camera:joi.object(  {
        avaliable: joi.boolean().required(),
        working: joi.boolean(),
      }),
      hasVGAorIntel:  joi.boolean().required(),


      ProductSerial: joi.string()
  
  });
  return Schema.validate(x)
}

exports.validateTest = validateTest;
exports.TestPhase = mongoose.model("TestPhase", TestPhase);
