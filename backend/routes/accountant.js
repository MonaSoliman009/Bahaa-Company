const express = require("express");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
var bcrypt = require("bcryptjs");

const router = express.Router();

var { validateAccountant, accountant } = require("../models/accountant");
var goodProductsReport = require("../models/goodProductsReport");
var defectiveProductsReport = require("../models/defectiveProductsReport");
var employeeReport = require("../models/employeeReport");
var missingPiecesSchema = require("../models/missing pieces report");
var saleInvoice = require("../models/saleInvoice");

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.join(__dirname, "../upload/"));
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname);
//     },
//   });
//   const fileFilter = (req, file, cb) => {
//     // reject a file
//     if (
//       file.mimetype === "image/jpeg" ||
//       file.mimetype === "image/png" ||
//       file.mimetype === "image/jpg"
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
//     }
//   };
//   var upload = multer({
//     storage: storage,
//     limits: {
//       fileSize: 1024 * 1024 * 5,
//     },
//     fileFilter: fileFilter,
//   });
  var parseUrlencoded = bodyParser.urlencoded({
    extended: true,
  });


  router.post(
    "/signup",
    // upload.single("img"),
    parseUrlencoded,
    async (req, res, next) => {
      var { error } = validateAccountant(req.body);
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
      let accountantt = await accountant.findOne({
        email: req.body.email,
      });
      if (accountantt) {
        return res.status(400).send("user already registered.");
      }
  
      accountantt = new accountant({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        // img: req.body.img,
      });
  
      var salt = await bcrypt.genSalt(10);
      accountantt.password = await bcrypt.hash(accountantt.password, salt);
      await accountantt.save();
  
      res.send(accountantt);
    }
  );

  router.get("/account/:id", async (req, res) => {
    let accountantspec = await accountant.findOne({
      _id: req.params.id,
    });
  
    res.json(accountantspec);
  });
  router.get("/goodProductsReport/:id",  async (req, res) => {
    let goodProductsReportspec = await goodProductsReport.findOne({
      _id: req.params.id,
    });
  
    res.json(goodProductsReportspec);
  });
  router.get("/defectiveProductsReport/:id",  async (req, res) => {
    let defectiveProductsReportspec = await defectiveProductsReport.findOne({
      _id: req.params.id,
    });
  
    res.json(defectiveProductsReportspec);
  });
  
  router.get("/goodProductsReport",  async (req, res) => {
    let goodProductsReportspec = await goodProductsReport.find({});
  
    res.json(goodProductsReportspec);
  });
  router.get("/defectiveProductsReport", async (req, res) => {
    let defectiveProductsReportspec = await defectiveProductsReport.find({});
  
    res.json(defectiveProductsReportspec);
  });
  router.get("/employeeReport",  async (req, res) => {
    let employeeReportReportspec = await employeeReport.find({});
  
    res.json(employeeReportReportspec);
  });
  router.get("/employeeReport/:id", async (req, res) => {
    let employeeReportReportspec = await employeeReport.findOne({
      _id: req.params.id,
    });
  
    res.json(employeeReportReportspec);
  });
  router.get("/missingPiecesSchema/:id",  async (req, res) => {
    let missingPiecesSchematReportspec = await missingPiecesSchema.findOne({
      _id: req.params.id,
    });
  
    res.json(missingPiecesSchematReportspec);
  });
  router.get("/missingPiecesSchema", async (req, res) => {
    let missingPiecesSchematReportspec = await missingPiecesSchema.find({});
  
    res.json(missingPiecesSchematReportspec);
  });

  router.post("/add/saleInvoice", parseUrlencoded, function (req, res) {
    // var { error } = validatesaleInvoice(req.body);
    // if (error) {
    //   return res.status(400).send(error.details[0].message);
    // }
    let saleInvoice = new saleInvoice({
      customerName: req.body.customerName,
      price: req.body.price,
      date: req.body.date,
      Products: req.params.Products,
      seller: req.params.seller,
    });
    saleInvoice.save();
    res.json(saleInvoice);
  });
  router.get("/saleInvoice",  async (req, res) => {
    let saleInvoicespec = await saleInvoice.find({});
  
    res.json(saleInvoicespec);
  });
  router.get("/saleInvoice/:id",  async (req, res) => {
    let saleInvoicespec = await saleInvoice.findOne({
      _id: req.params.id,
    });
  
    res.json(saleInvoicespec);
  });
  router.post("/update/saleInvoice/:id", parseUrlencoded, function (req, res) {
    saleInvoice.update({ _id: req.params.id }, req.body, function (err, data) {
      if (err) {
        console.log(err);
      }
      res.send(data);
    });
  });
  router.delete("/delete/saleInvoice/:id", parseUrlencoded, function (req, res) {
    saleInvoice.remove({ _id: req.params.id }, function (err) {
      if (err) {
        console.log(err);
      }
    });
  
    res.json("done");
  });
  module.exports = router;