const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const missingPiecesSchema=new Schema({
  takenFromSerial:{
    type:String,
    required:true
  },
  addedToSerial:{
    type:String,
    required:true
  },
  missingPiece:{
    type:String,
    required:true
  },
  atTime:{
    type:Date,
    required:true
  },
  creator:{
    type: String,
   required:true
  }

});

missingPiecesSchema.virtual("takenFrom", {
  ref: "product", // The model to use
  localField: "takenFromSerial", // Find people where `localField`
  foreignField: "serialNumber", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
});
missingPiecesSchema.virtual("addedTo", {
  ref: "product", // The model to use
  localField: "addedToSerial", // Find people where `localField`
  foreignField: "serialNumber", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
});
missingPiecesSchema.virtual("missingPieceDetails", {
  ref: "spareParts", // The model to use
  localField: "missingPiece", // Find people where `localField`
  foreignField: "serialNumber", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
});

missingPiecesSchema.virtual("creatorEmployee", {
  ref: "employee", // The model to use
  localField: "creator", // Find people where `localField`
  foreignField: "_id", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
});
missingPiecesSchema.virtual("creatorOwner", {
  ref: "owner", // The model to use
  localField: "creator", // Find people where `localField`
  foreignField: "_id", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
});
missingPiecesSchema.virtual("creatorAccountant", {
  ref: "accountant", // The model to use
  localField: "creator", // Find people where `localField`
  foreignField: "_id", // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
});
missingPiecesSchema.set("toJSON", { virtuals: true });
module.exports=mongoose.model('MissingPieces',missingPiecesSchema);