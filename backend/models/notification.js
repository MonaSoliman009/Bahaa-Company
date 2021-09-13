const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//device history will based on notification for that device,will treated as endpoint Not as Shema
const notificationSchema=new Schema({
    productId: {//or serial number
        type: Schema.Types.ObjectId,
        ref: 'product',
        required: true
      },
      employee : {//currently working //or done by
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
      },
      whatEmployeeDid:{
          devicePartName:{type:String,required:true},
          pahseName:{type:String,required:true} 
      } , 
      currentDate:{
        type: Date,
        required: true  
    }

})

module.exports=mongoose.model('NotificationSchema',notificationSchema);
