const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const missingPiecesSchema=new Schema({
  takenFromSerial:{
    type:Number,
    required:true
  },
  addedToSerial:{
    type:Number,
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
    type: Schema.Types.ObjectId,
    ref: 'Employee'
  }

});



module.exports=mongoose.model('MissingPieces',missingPiecesSchema);