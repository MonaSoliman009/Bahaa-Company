const mongoose = require("mongoose");

var modelPrice =mongoose.model("modelPrice", new mongoose.Schema({


    model: {
        type: Number,
        required: true,
        unique: true,
      },
      price:{
        type: Number,
        required: true,
       
      }


}))
exports.modelPrice = modelPrice;
