var express = require("express");
var multer = require("multer");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

var {employee,validateEmployee} = require("../models/employee");
var CurrentTest=require("../models/during test work");
var MissingPiece=require("../models/missing pieces report");

var router = express.Router();

// var MIME_TYPE_MAP = {
//   "image/png": "png",
//   "image/jpeg": "jpg",
//   "image/jpg": "jpg"
// };

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const isValid = MIME_TYPE_MAP[file.mimetype];
//     let error = new Error("Invalid mime type");
//     if (isValid) {
//       error = null;
//     }
//     cb(error, "backend/EmployeeImages");
//   },
//   filename: (req, file, cb) => {
//     const name = file.originalname
//       .toLowerCase()
//       .split(" ")
//       .join("-");
//     const ext = MIME_TYPE_MAP[file.mimetype];
//     cb(null, name + "-" + Date.now() + "." + ext);
//   }
// });
const bodyParser = require("body-parser");

var parseUrlencoded = bodyParser.urlencoded({
  extended: true,
});


router.post(
  "/signup",
  // upload.single("img"),
  parseUrlencoded,
  async (req, res, next) => {
    console.log("signup")
    var { error } = validateEmployee(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    let Employee = await employee.findOne({
      email: req.body.email,
    });
    if (Employee) {
      return res.status(400).send("user already registered.");
    }

    Employee = new employee({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    var salt = await bcrypt.genSalt(10);
    Employee.password = await bcrypt.hash(Employee.password, salt);
    await Employee.save();

    res.send(Employee);
  }
);


// router.post("/login", (req, res, next) => {
//     let fetchedUser;
//     Employee.findOne({ email: req.body.email })
//       .then(user => {
//         if (!user) {
//           return res.status(401).json({
//             message: "Auth failed"
//           });
//         }
//         fetchedUser = user;
//         return bcrypt.compare(req.body.password, user.password);
//       })
//       .then(result => {
//         if (!result) {
//           return res.status(401).json({
//             message: "Auth failed"
//           });
//         }
//         const token = jwt.sign(
//           { email: fetchedUser.email, userId: fetchedUser._id },
//           "secret_this_should_be_longer",
//           { expiresIn: "1h" }
//         );
//         res.status(200).json({
//           token: token,
//           expiresIn: 3600,
//           userId:fetchedUser._id 
//         });
//       })
//       .catch(err => {
//         return res.status(401).json({
//           message: "Auth failed"
//         });
//       });
//   });

//starting Test
// router.post("", (req, res, next) => {
//   const current = new CurrentTest({
//     serialNumber: req.body.serialNumber,
//     employee:req.userData.userId,
//     statusOfWork:req.body.statusOfWork,
//     part:req.body.part,
//     currentDate:req.body.date
//   });
//   current.save().then(createdTest => {
//     res.status(201).json({
//       message: "Current Test added successfully",
//       currntTestId: createdTest._id
//     });
//   });
// });



// //Updating Test
// router.put("/:id",checkAuth, (req, res, next) => {
//   const current = new CurrentTest({
//     _id: req.body.id,
//     serialNumber: req.body.serialNumber,
//     employee:req.userData.userId,
//     statusOfWork:req.body.statusOfWork,
//     part:req.body.part,
//     currentDate:req.body.date
//   });
//   CurrentTest.updateOne({ _id: req.params.id,employee:req.userData.userId }, current).then(result => {
//     if (result.nModified > 0) {
//       res.status(200).json({ message: "Update successful!" });
//     } else {
//       res.status(401).json({ message: "Not authorized!" });
//     }
//   });
// });  


// //Fetching Tests with pagination
// router.get("",checkAuth, (req, res, next) => {
//   const pageSize = +req.query.pagesize;
//   const currentPage = +req.query.page;
//   const testQuery = CurrentTest.find();
//   let fetchedTests;
//   if (pageSize && currentPage) {
//     testQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
//   }
//   testQuery
//   .then(documents => {
//     fetchedTests=documents;
//     return CurrentTest.count()
//   })
//   .then(count=>{
//     res.status(200).json({
//       message: "Tests fetched successfully!",
//       currenttests: fetchedTests,
//       maxTests: count 
//     });

//   })
   
//   }); 
  
// //Fetching test  
// router.get("/:id",checkAuth, (req, res, next) => {
//   CurrentTest.findById(req.params.id).then(test => {
//     if (test) {
//       res.status(200).json(test);
//     } else {
//       res.status(404).json({ message: "Test not found!" });
//     }
//   });
// });

// //Deleting Test  
// router.delete("/:id",checkAuth, (req, res, next) => {
//   CurrentTest.deleteOne({ _id: req.params.id, employee:req.userData.userId }).then(result => {
//     console.log(result);
//     if (result.n > 0) {
//       res.status(200).json({ message: "Deletion successful!" });
//     } else {
//       res.status(401).json({ message: "Not authorized!" });
//     }
//   });
// }); 


// //add to MissingPiece Report
// router.post("",checkAuth, (req, res, next) => {
//   const missing = new MissingPiece({
//     takenFromSerial: req.body.takenFromSerial, 
//     addedToSerial:req.body.addedToSerial,
//     missingPiece:req.body.missingPiece,
//     atTime:req.body.atTime,
//     creator:req.userData.userId
//   });
//   missing.save().then(createdMissing => {
//     res.status(201).json({
//       message: "missing report added successfully",
//       missingReportId: createdMissing._id
//     });
//   });
// });

// //Updating MissingPiece Report
// router.put("/:id",checkAuth, (req, res, next) => {
//   const missing = new MissingPiece({
//     _id: req.body.id,
//     takenFromSerial: req.body.takenFromSerial, 
//     addedToSerial:req.body.addedToSerial,
//     missingPiece:req.body.missingPiece,
//     atTime:req.body.atTime,
//     creator:req.userData.userId
//   });
//   MissingPiece.updateOne({ _id: req.params.id,creator:req.userData.userId }, missing)
//   .then(result => {
//     if (result.nModified > 0) {
//       res.status(200).json({ message: "Update successful!" });
//     } else {
//       res.status(401).json({ message: "Not authorized!" });
//     }
//   });
// });

// //Fetching MissingPiece Reports with pagination
// router.get("",checkAuth, (req, res, next) => {
//   const pageSize = +req.query.pagesize;
//   const currentPage = +req.query.page;
//   const missingPieceQuery = MissingPiece.find();
//   let fetchedMissingPieces;
//   if (pageSize && currentPage) {
//     missingPieceQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
//   }
//   missingPieceQuery
//   .then(documents => {
//     fetchedMissingPieces=documents;
//     return MissingPiece.count()
//   })
//   .then(count=>{
//     res.status(200).json({
//       message: "MissingPieces fetched successfully!",
//       currentMissingPieces: fetchedMissingPieces,
//       maxMissingPiece: count 
//     });

//   })
   
//   }); 


// //Fetching MissingPiece Report  
// router.get("/:id",checkAuth, (req, res, next) => {
//   MissingPiece.findById(req.params.id).then(missingPiece => {
//     if (missingPiece) {
//       res.status(200).json(missingPiece);
//     } else {
//       res.status(404).json({ message: "MissingPiece not found!" });
//     }
//   });
// });  

// //Deleting MissingPiece Report  
// router.delete("/:id",checkAuth, (req, res, next) => {
//   MissingPiece.deleteOne({ _id: req.params.id, creator:req.userData.userId }).then(result => {
//     console.log(result);
//       if (result.n > 0) {
//         res.status(200).json({ message: "Deletion successful!" });
//       } else {
//         res.status(401).json({ message: "Not authorized!" });
//       }
//   });
// }); 


module.exports = router;