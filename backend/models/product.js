const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema=new Schema({
    serialNumber:{
        type: Number,
        required: true 
    },
    make:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    processorType:{
        type: String,
        required: true
    },
    ram:{
        type: Number,
        required: true  
    },
    hardDrive:{
        type: Number,
        required: true 
    },
    screenSize:{
        type: Number,
        required: true  
    },
    webCam:{
        type: Boolean,
        required: true 
    },
    opticalDrive:{
        type: String,
        required: true 
    },
    wireless:{
        type: Boolean,
        required: true 
    },
    ethernet:{
        type: Boolean,
        required: true 
    },
    fromFactor:{
        type: String,
        required: true 
    },
    hddCady:{
        type: Boolean,
        required: true 
    },
    adaptor:{
        type: Boolean,
        required: true 
    },
    battery:{
        type: Boolean,
        required: true 
    },
    grade:{
        type: Boolean,
        required: true   
    },
    addedAt:{
        type: Date,
        required: true 
    },
    lastApdatedAt:{
        type: Date,
        required: true 
    } ,
    quantity:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    purchaseSerialNumber: {
        type: Number,
        required: true
      },
    LastDealingWith:{
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    } ,
    addedBy:{
        type: Schema.Types.ObjectId,//who add the product
        ref: 'Employee'
    } 
 } );
  

module.exports=mongoose.model('Product',productSchema);