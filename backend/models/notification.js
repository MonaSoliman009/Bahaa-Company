const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//device history will based on notification for that device,will treated as endpoint Not as Shema
const notification=new Schema({
    productSerialNumber: {//or serial number
      type: Number, required: true
      },
      tester : {//currently working //or done by
        type: mongoose.Schema.Types.ObjectId,
        enum: ["employee", "owner","accountant"],
        required: true
      }, 
      currentDate:{
        type: Date,
        required: true  
    },
    message:{
      type: String,
      required: true  
    }

})
notification.virtual('productDetails', {
  ref: 'product', // The model to use
  localField: 'productSerialNumber', // Find people where `localField`
  foreignField: 'serialNumber', // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,

});
notification.set('toObject', { virtuals: true })
module.exports = mongoose.model('notification', notification)