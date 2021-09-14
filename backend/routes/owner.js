const express = require("express");
const multer = require("multer");
var bcrypt = require("bcryptjs");

var { accountant, validateAccountant } = require("../models/accountant");

var  {product  }= require("../models/product");
var { employee, validateEmployee } = require("../models/employee");
var { validateOwner, owner } = require("../models/owner");
var goodProductsReport = require("../models/goodProductsReport");
var defectiveProductsReport = require("../models/defectiveProductsReport");
var employeeReport = require("../models/employeeReport");
var missingPiecesSchema = require("../models/missing pieces report");
var saleInvoice = require("../models/saleInvoice");
var PurchaseInvoice = require("../models/purchase invoice");
const router = express.Router();
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "../upload/"));
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
const bodyParser = require("body-parser");

// const fileFilter = (req, file, cb) => {
//   // reject a file
//   if (
//     file.mimetype === "image/jpeg" ||
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/jpg"
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };
// var upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5,
//   },
//   fileFilter: fileFilter,
// });
var parseUrlencoded = bodyParser.urlencoded({
  extended: true,
});

router.post("/add", parseUrlencoded, async (req, res) => {
  var { error } = validateOwner(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let new_owner = new owner({
    password: req.body.password,
    email: req.body.email,
    name: req.body.name,
  });
  var salt = await bcrypt.genSalt(5);
  new_owner.password = await bcrypt.hash(new_owner.password, salt);
  await new_owner.save();
  res.json(new_owner);
});

router.post("/approve/accountant/:id", parseUrlencoded, async (req, res) => {
  accountant.findOneAndUpdate(
    { _id: req.params.id },
    { approved: true },
    function (err, data) {
      if (err) {
        return res.status(400).send(err);
      }
      res.send(data);
    }
  );
});
router.post("/approve/employee/:id", parseUrlencoded, async (req, res) => {
  employee.findOneAndUpdate(
    { _id: req.params.id },
    { approved: true },
    function (err, data) {
      if (err) {
        return res.status(400).send(err);
      }
      res.send(data);
    }
  );
});
router.get("/list/accountants/unapproved", async (req, res) => {
  let result = await accountant.find({ approved: false });
  res.json(result);
});

router.get("/list/employees/unapproved", async (req, res) => {
  let result = await employee.find({ approved: false });
  res.json(result);
});

router.get("/list/accountants/approved", async (req, res) => {
  let result = await accountant.find({ approved: true });
  res.json(result);
});

router.get("/list/employees/approved", async (req, res) => {
  let result = await employee.find({ approved: true });
  res.json(result);
});



router.get("/account/:id", async (req, res) => {
  let ownerspec = await owner.findOne({
    _id: req.params.id,
  });

  res.json(ownerspec);
});

// router.post("/forget/password", parseUrlencoded, async (req, res) => {
//   var smtpTransport = nodemailer.createTransport({
//     service: "gmail",
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     requireTLS: true,
//     auth: {
//       user: "savethemiti@gmail.com",
//       pass: "123456789@@",
//     },
//   });

//   let owner = owner.findOne({ email: req.body.email });
//   if (owner) {
//     var token = jwt.sign({
//       _id: owner._id,
//     });
//     var mailOptions = {
//       from: "savethemiti@gmail.com",
//       to: req.body.email,
//       subject: "This email is from savethem website",
//       html: `
//       <h1 style="text-align:center;margin-bottom:20px">Reset your password?</h1>
//       <h4 style="text-align:center;margin-bottom:20px">If you requested a password reset for ${req.body.email}, click the button below.</br>
//       If you didn't make this request, ignore this email.</h4>
//       <button style="background-color:#3B6D8C;margin-left:50%;border-style:none;padding:5px"><a style="text-decoration:none;background-color:#3B6D8C;color:white" href="http://localhost:4200/reset-password">Reset Password</a></button>
//     <p style="text-align:center">This email was meant for ${req.body.email}</p>

//       `,
//     };
//     smtpTransport.sendMail(mailOptions, function (error, response) {
//       if (error) {
//         res.json(error);
//       } else {
//         res.json(token);
//       }
//     });
//   } else {
//     return res.status(400).send("invalid email or password.");
//   }
//   smtpTransport.sendMail(mailOptions, function (error, response) {
//     if (error) {
//       res.json(error);
//     } else {
//       res.json(token);
//     }
//   });
// });

// router.post("/reset/password", parseUrlencoded, async (req, res) => {
//   let owner = owner.findOne({ email: req.body.email });
//   if (owner) {
//     var salt = await bcrypt.genSalt(10);
//     req.body.password = await bcrypt.hash(req.body.password, salt);

//     owner.update(
//       { email: req.body.email },
//       { password: req.body.password },
//       function (err, data) {
//         if (err) {
//         }
//         res.send(data);
//       }
//     );
//   }
// });
// router.post("/login", (req, res, next) => {
//   let fetchedUser;
//   owner
//     .findOne({ email: req.body.email })
//     .then((user) => {
//       if (!user) {
//         return res.status(401).json({
//           message: "Auth failed",
//         });
//       }
//       fetchedUser = user;
//       return bcrypt.compare(req.body.password, user.password);
//     })
//     .then((result) => {
//       if (!result) {
//         return res.status(401).json({
//           message: "Auth failed",
//         });
//       }
//       const token = jwt.sign(
//         { email: fetchedUser.email, userId: fetchedUser._id },
//         "secret_this_should_be_longer",
//         { expiresIn: "1h" }
//       );
//       res.status(200).json({
//         token: token,
//         expiresIn: 3600,
//         userId: fetchedUser._id,
//       });
//     })
//     .catch((err) => {
//       return res.status(401).json({
//         message: "Auth failed",
//       });
//     });
// });
// router.post("/update/:id", parseUrlencoded, function (req, res) {
//   owner.updateOne({ _id: req.params.id }, req.body, function (err, data) {
//     if (result.nModified > 0) {
//       res.status(200).json({ message: "Update successful!" });
//     } else {
//       res.status(401).json({ message: "error" });
//     }
//   });
// });

// router.get("/goodProductsReport/:id", auth, async (req, res) => {
//   let goodProductsReportspec = await goodProductsReport.findOne({
//     _id: req.params.id,
//   });

//   res.json(goodProductsReportspec);
// });
// router.get("/defectiveProductsReport/:id", auth, async (req, res) => {
//   let defectiveProductsReportspec = await defectiveProductsReport.findOne({
//     _id: req.params.id,
//   });

//   res.json(defectiveProductsReportspec);
// });

// router.get("/goodProductsReport", auth, async (req, res) => {
//   let goodProductsReportspec = await goodProductsReport.find({});

//   res.json(goodProductsReportspec);
// });
// router.get("/defectiveProductsReport", auth, async (req, res) => {
//   let defectiveProductsReportspec = await defectiveProductsReport.find({});

//   res.json(defectiveProductsReportspec);
// });
// router.get("/employeeReport", auth, async (req, res) => {
//   let employeeReportReportspec = await employeeReport.find({});

//   res.json(employeeReportReportspec);
// });
// router.get("/employeeReport/:id", auth, async (req, res) => {
//   let employeeReportReportspec = await employeeReport.findOne({
//     _id: req.params.id,
//   });

//   res.json(employeeReportReportspec);
// });
// router.get("/missingPiecesSchema/:id", auth, async (req, res) => {
//   let missingPiecesSchematReportspec = await missingPiecesSchema.findOne({
//     _id: req.params.id,
//   });

//   res.json(missingPiecesSchematReportspec);
// });
// router.get("/missingPiecesSchema", auth, async (req, res) => {
//   let missingPiecesSchematReportspec = await missingPiecesSchema.find({});

//   res.json(missingPiecesSchematReportspec);
// });

// router.post("/add/saleInvoice", parseUrlencoded, function (req, res) {
//   // var { error } = validatesaleInvoice(req.body);
//   // if (error) {
//   //   return res.status(400).send(error.details[0].message);
//   // }
//   let saleInvoice = new saleInvoice({
//     customerName: req.body.customerName,
//     price: req.body.price,
//     date: req.body.date,
//     Products: req.params.Products,
//     seller: req.params.seller,
//   });
//   saleInvoice.save();
//   res.json(saleInvoice);
// });
// router.get("/saleInvoice", auth, async (req, res) => {
//   let saleInvoicespec = await saleInvoice.find({});

//   res.json(saleInvoicespec);
// });
// router.get("/saleInvoice/:id", auth, async (req, res) => {
//   let saleInvoicespec = await saleInvoice.findOne({
//     _id: req.params.id,
//   });

//   res.json(saleInvoicespec);
// });
// router.post("/update/saleInvoice/:id", parseUrlencoded, function (req, res) {
//   saleInvoice.update({ _id: req.params.id }, req.body, function (err, data) {
//     if (err) {
//       console.log(err);
//     }
//     res.send(data);
//   });
// });
// router.delete("/delete/saleInvoice/:id", parseUrlencoded, function (req, res) {
//   saleInvoice.remove({ _id: req.params.id }, function (err) {
//     if (err) {
//       console.log(err);
//     }
//   });

//   res.json("done");
// });


router.get("/purchaseInvoice",  async (req, res) => {
  let purchaseInvoicespec = await PurchaseInvoice.find({});

  res.json(purchaseInvoicespec);
});
router.get("/purchaseInvoice/:id", async (req, res) => {
  let purchaseInvoicespec = await PurchaseInvoice.findOne({
    _id: req.params.id,
  });

  res.json(purchaseInvoicespec);
});
router.post("/update/purchaseInvoice/:id", parseUrlencoded, function (req, res) {
  PurchaseInvoice.update({ _id: req.params.id }, req.body, function (err, data) {
    if (err) {
      console.log(err);
    }
    res.send(data);
  });
});
router.delete("/delete/purchaseInvoice/:id", parseUrlencoded, function (req, res) {
  PurchaseInvoice.removeById(  req.params.id , function (err) {
    if (err) {
      console.log(err);
    }
  });

  res.json("done");
});
module.exports = router;
