const express = require("express");

const Test = require("../models/test Phase");
const checkAuth = require("../middleware/check-auth");


const router = express.Router();

//Adding Test
router.post("",checkAuth, (req, res, next) => {
    const test = new Test({
        power: req.body.power,
        condition:{
            aPart:{
                avaliable:req.body.aPart.avaliable,
                hasScratch:req.body.aPart.hasScratch,
                broken:req.body.aPart.broken,
                dent:req.body.aPart.dent,
            },
            bPart:{
                avaliable:req.body.bPart.avaliable,
                hasScratch:req.body.bPart.hasScratch,
                broken:req.body.bPart.broken,
                dent:req.body.bPart.dent,
            },
            cPart:{
                avaliable:req.body.cPart.avaliable,
                hasScratch:req.body.cPart.hasScratch,
                broken:req.body.cPart.broken,
                dent:req.body.cPart.dent,
            },
            dPart:{
                avaliable:req.body.dPart.avaliable,
                hasScratch:req.body.dPart.hasScratch,
                broken:req.body.dPart.broken,
                dent:req.body.dPart.dent,
            }
        },
        configuration:{
            cpu:req.body.cpu,
            generation:req.body.generation,
            ram:req.body.ram,
            hdd:req.body.hdd,
             
        },
        battery:{
            avaliable:req.body.battery.avaliable,
            batteryHealth:req.body.battery.batteryHealth 
        },
        lcd:{
            avaliable:req.body.lcd.avaliable,
            status:req.body.lcd.status,
            hasScratch:req.body.lcd.hasScratch,
            hasSpots:req.body.lcd.hasSpots,
            hasLine:req.body.lcd.hasLine,
            hasPixel:req.body.lcd.hasPixel,
            broken:req.body.lcd.broken
        },
        bazel:{
            avaliable:req.body.bazel.avaliable,
            status:req.body.bazel.status 
        },
        keyboard:{
            avaliable:req.body.keyboard.avaliable,
            working:req.body.keyboard.working 
        },
        dvd:{
            avaliable:req.body.dvd.avaliable,
            working:req.body.dvd.working 
        },
        speakers:{
            avaliable:req.body.speakers.avaliable,
            working:req.body.speakers.working 
        },
        camera:{
            avaliable:req.body.camera.avaliable,
            working:req.body.camera.working 
        },
        hasGraphic:{
            type:req.body.type
        },
        lastDealingWith:req.userData.userId 
    });
    test.save().then(createdTest => {
      res.status(201).json({
        message: "Test added successfully",
        testId: createdTest._id
      });
    });
  });


//Updating Test
router.put("/:id",checkAuth, (req, res, next) => {
    const test = new Test({
      _id: req.body.id,
      power: req.body.power,
      condition:{
          aPart:{
              avaliable:req.body.aPart.avaliable,
              hasScratch:req.body.aPart.hasScratch,
              broken:req.body.aPart.broken,
              dent:req.body.aPart.dent,
          },
          bPart:{
              avaliable:req.body.bPart.avaliable,
              hasScratch:req.body.bPart.hasScratch,
              broken:req.body.bPart.broken,
              dent:req.body.bPart.dent,
          },
          cPart:{
              avaliable:req.body.cPart.avaliable,
              hasScratch:req.body.cPart.hasScratch,
              broken:req.body.cPart.broken,
              dent:req.body.cPart.dent,
          },
          dPart:{
              avaliable:req.body.dPart.avaliable,
              hasScratch:req.body.dPart.hasScratch,
              broken:req.body.dPart.broken,
              dent:req.body.dPart.dent,
          }
      },
      configuration:{
          cpu:req.body.cpu,
          generation:req.body.generation,
          ram:req.body.ram,
          hdd:req.body.hdd,
           
      },
      battery:{
          avaliable:req.body.battery.avaliable,
          batteryHealth:req.body.battery.batteryHealth 
      },
      lcd:{
          avaliable:req.body.lcd.avaliable,
          status:req.body.lcd.status,
          hasScratch:req.body.lcd.hasScratch,
          hasSpots:req.body.lcd.hasSpots,
          hasLine:req.body.lcd.hasLine,
          hasPixel:req.body.lcd.hasPixel,
          broken:req.body.lcd.broken
      },
      bazel:{
          avaliable:req.body.bazel.avaliable,
          status:req.body.bazel.status 
      },
      keyboard:{
          avaliable:req.body.keyboard.avaliable,
          working:req.body.keyboard.working 
      },
      dvd:{
          avaliable:req.body.dvd.avaliable,
          working:req.body.dvd.working 
      },
      speakers:{
          avaliable:req.body.speakers.avaliable,
          working:req.body.speakers.working 
      },
      camera:{
          avaliable:req.body.camera.avaliable,
          working:req.body.camera.working 
      },
      hasGraphic:{
          type:req.body.type
      },
      lastDealingWith:req.userData.userId
    });
    Test.updateOne({ _id: req.params.id }, test).then(result => {
      res.status(200).json({ message: "Update successful!" });
    });
  });   

//Fetching Tested devices
router.get("", (req, res, next) => {
    Test.find().then(documents => {
      res.status(200).json({
        message: "Test devices fetched successfully!",
        test: documents
      });
    });
  });   


//Fetching one tested device  
router.get("/:id", (req, res, next) => {
    Test.findById(req.params.id).then(test => {
      if (test) {
        res.status(200).json(test);
      } else {
        res.status(404).json({ message: "Tested device  not found!" });
      }
    });
  });

//Deleting Tested device  
router.delete("/:id",checkAuth, (req, res, next) => {
    Test.deleteOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json({ message: "Tested device deleted!" });
    });
  });   

module.exports = router;