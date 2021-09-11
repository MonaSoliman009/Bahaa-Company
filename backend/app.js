const express = require("express"); 
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productsRoutes = require("./routes/products");
const testPhaseRoutes = require("./routes/testPhase");
const employeeRoutes = require("./routes/employee");

const cors = require("cors");
var mongosanatize = require("express-mongo-sanitize");
var xss = require("xss-clean");
var helmet = require("helmet");
const app = express();


mongoose
  .connect(
    "mongodb+srv://bahaa:BahaaBahaa123@cluster0.e3di4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(cors());
// data sanitization against nosql query injection

app.use(mongosanatize());
// data sanitization against xss
app.use(xss());
// http security headers
app.use(helmet());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});


app.use("/products", productsRoutes);
app.use("/test", testPhaseRoutes);
app.use("/employee", employeeRoutes);




module.exports = app;
  
