const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const server = require("http").createServer(app);
const io = require("socket.io")(server);
const product = require("./routes/products");
var  {productSchema  }= require("./models/product");
var  {notification  }= require("./models/notification");

const testPhaseRoutes = require("./routes/testPhase");
const employee = require("./routes/employee");
const accountant = require("./routes/accountant");
var login = require("./routes/login");
var owner = require("./routes/owner");
var PurchaseInvoice = require("./routes/purchase");
var saleInvoice = require("./routes/sale");
const soldProductsReport = require("./routes/soldProductsReport");

const cors = require("cors");
var mongosanatize = require("express-mongo-sanitize");
var xss = require("xss-clean");
var helmet = require("helmet");

mongoose
  .connect(
    "mongodb+srv://bahaa123:mona123456789@cluster0.jt4lb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
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

app.use("/test", testPhaseRoutes);
app.use("/employee", employee);
app.use("/login", login);
app.use("/accountant", accountant);
app.use("/owner", owner);
app.use("/product", product);
app.use("/purchase", PurchaseInvoice);
app.use("/sale", saleInvoice);
app.use("/soldProducts", soldProductsReport);

io.on("connection", (socket) => {
  console.log("new user connected");

  socket.on("disconnect", () => {
    console.log("disconnect");
  });
/////////////////////////////////////////////////////////////////////////
  socket.on("startTest", async (productserialNumber,productId,testerId,Date) => {
  let productt=  await productSchema.find(
      { serialNumber: productserialNumber },
      async (err, data)=> {
        if (err) {
          console.log(err);
        } else {



          if(productt.quantity!=0){
            if(productt.status=="New"||productt.status=="Under Test Phase"){
              productSchema.updateOne({ serialNumber: productt.serialNumber},{
                $set: {status: 'Tested Now'} ,
            })
                
            let new_notification = new notification({
              productId: productId,
              tester: testerId,
              currentDate: Date,
            });
            await new_notification.save();

            io.emit("Notification", new_notification)

            }else{
  
              io.emit("allPost", {message:"you cannot test this product"})
            }
           

          }else{
            io.emit("allPost", {message:"Not exit"})

          }
     









        }
      }
    );
  });

  ////////////////////////////////////////////////////////////////////////
});

server.listen(3000, function () {
  console.log("listen");
});
