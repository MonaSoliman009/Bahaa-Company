const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const testPhaseSchema=new Schema({
    power:{
        type: Boolean,
        required: true 
    },
    condition: {
        aPart:{
          avaliable:{type:Boolean,required:true},
          hasScratch:{type:Boolean,required:true},
          broken:{type:Boolean,required:true },
          dent:{type:Boolean,required:true }

        },
        bPart:{
          avaliable:{type:Boolean,required:true},
          hasScratch:{type:Boolean,required:true},
          broken:{type:Boolean,required:true },
          dent:{type:Boolean,required:true }

        },
        cPart:{
          avaliable:{type:Boolean,required:true},
          hasScratch:{type:Boolean,required:true},
          broken:{type:Boolean,required:true },
          dent:{type:Boolean,required:true }

        },
        dPart:{
          avaliable:{type:Boolean,required:true},
          hasScratch:{type:Boolean,required:true},
          broken:{type:Boolean,required:true },
          dent:{type:Boolean,required:true }

        },
        location:[
          {
            partName:{type:String},
            PartProblem:{type:String}
          }
        ]

      },
    configuration: {
         cpu:{type:String,required:true},
         generation:{type:Number,required:true},
         ram:{type:Number,required:true},
         hdd:{type:String,required:true} 
      } ,
    battery: {
      avaliable:{type:Boolean,required:true},
      batteryHealth:{type:String,required:true}
         
      },
    lcd:{
      avaliable:{type:Boolean,required:true},
      status:{type:String,required:true},
      hasScratch:{type:Boolean,required:true},
      hasSpots:{type:Boolean,required:true},
      hasLine:{type:Boolean,required:true},
      hasPixel:{type:Boolean,required:true},
      broken:{type:Boolean,required:true } 
    },   
    bazel:{
      avaliable:{type:Boolean,required:true},
      status:{type:String,required:true} 
    },
    keyboard:{
      avaliable:{type:Boolean,required:true},
      working:{type:Boolean,required:true} 
    },
    dvd:{
      avaliable:{type:Boolean,required:true},
      working:{type:Boolean,required:true} 
    },
    speakers:{
      avaliable:{type:Boolean,required:true},
      working:{type:Boolean,required:true} 
    },
    camera:{
      avaliable:{type:Boolean,required:true},
      working:{type:Boolean,required:true} 
    },
    hasGraphic:{
      type:String 
    },
    lastDealingWith : {
      type: Schema.Types.ObjectId,
      ref: 'Employee'
    }


});


module.exports=mongoose.model('TestPhase',testPhaseSchema);