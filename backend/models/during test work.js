const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const duringTestWorkSchema=new Schema({
    productId: {//or serial number
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
    employee : {//currently working //or done by
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
      },
    statusOfWork:{ //free to work on or not
        type: String,
        required: true 
    },
    workingOnparts:[{
        testPartName:{type:String,required:true},///condition,configuration
        partProblems:[{
            subPart:{type:String},
            problemProperty:{type:String}
        }]

    }],
    finishedparts:[{
        finishtestPartName:{type:String,required:true},///condition,configuration
        partcondision:[{
            subPart:{type:String},
            propertyCondition:{type:String}
        }]

    }],
    currentDate:{
        type: Date,
        required: true 
    }

})

module.exports=mongoose.model('DuringTestWorkSchema',duringTestWorkSchema);
