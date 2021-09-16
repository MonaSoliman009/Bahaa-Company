const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//device history will based on notification for that device,will treated as endpoint Not as Shema
const notification=mongoose.model("notification", new mongoose.Schema({
    productId: {//or serial number
        type: Schema.Types.ObjectId,
        ref: 'product',
        required: true
      },
      tester : {//currently working //or done by
        type: Schema.Types.ObjectId,
        enum: ["employee", "owner","accountant"],
        required: true
      }, 
      currentDate:{
        type: Date,
        required: true  
    }

}))

exports.notification = notification;
