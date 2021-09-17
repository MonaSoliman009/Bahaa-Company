const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const server = require("http").createServer(app);
const io = require("socket.io")(server);
const products = require("./routes/products");
var { product } = require("./models/product");
var  notification  = require("./models/notification");
var TestPhase  = require("./models/test Phase");

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
app.use("/product", products);
app.use("/purchase", PurchaseInvoice);
app.use("/sale", saleInvoice);
app.use("/soldProducts", soldProductsReport);

io.on("connection", (socket) => {
  console.log("new user connected");

  socket.on("disconnect", () => {
    console.log("disconnect");
  });
  /////////////////////////////////////////////////////////////////////////
  socket.on( "startTest", async (productserialNumber, testerId) => {
      let productt = await product.findOne( { serialNumber: productserialNumber } );
      console.log(productt)
      var d=new Date()
      if (productt.quantity != 0) {
       
        if (
          productt.status == "New" ||
          productt.status == "Under Test Phase"
        ) {
          console.log("hi")
         await product.updateOne(
            { serialNumber: productt.serialNumber },
            {
              $set: { status: "Tested Now" },
            }
          );

          let new_notification = new notification({
            productSerialNumber: productserialNumber,
            tester: testerId,
            currentDate: d.toLocaleDateString(),
            message: "Started testing",
          });
          await new_notification.save();

          io.emit("Notification", {
            message: "Test Started successfully",
          });
        } else {
          console.log("hii")

          io.emit("allPost", { message: "you cannot test this product" });
        }
      } else {
        io.emit("allPost", { message: "Product Not exit" });
      }
    }
  );

  /////////////////////////////////////////////////////////////////////////
  socket.on("getAllNotifications", async () => {
     notification.find({}).populate("productDetails").populate('tester.employee' || 'tester.owner' ||'tester.accountant').exec(function(error, data) {
      if(error){
        // "employee", "owner","accountant"
        console.log(error)
      }
      console.log(data);

      io.emit("getAllNotifications", data);
  
    });;;

  });

  ///////////////////////////////////////////////////////////////////////////////
  socket.on("submitTest", async (finished, productserialNumber, testData,testerId) => {
    let productt = await product.findOne({ serialNumber: productserialNumber });
    if(productt.tested==false){
  
console.log(testData.power);
      if (finished) {
      await  product.updateOne(
          { serialNumber: productt.serialNumber },
          {
            $set: { status: "Ready For Maintenance",tested: true},
          }
        );
      var d=new Date()
        let new_notification = new notification({
          productSerialNumber: productserialNumber,
          tester: testerId,
          currentDate: d.toLocaleDateString(),
          message: "Finished Testing",
        });
        await new_notification.save();

        let new_TestPhase = new TestPhase({
          power: testData.power,
          condition: {
            aPart: {
              avaliable: testData.condition.aPart.avaliable,
              hasScratch: testData.condition.aPart.hasScratch,
              broken: testData.condition.aPart.broken,
              dent: testData.condition.aPart.dent,
            },
            bPart: {
              avaliable: testData.condition.bPart.avaliable,
              hasScratch: testData.condition.bPart.hasScratch,
              broken: testData.condition.bPart.broken,
              dent: testData.condition.bPart.dent,
            },
            cPart: {
              avaliable: testData.condition.cPart.avaliable,
              hasScratch: testData.condition.cPart.hasScratch,
              broken: testData.condition.cPart.broken,
              dent: testData.condition.cPart.dent,
            },
            dPart: {
              avaliable: testData.condition.dPart.avaliable,
              hasScratch: testData.condition.dPart.hasScratch,
              broken: testData.condition.dPart.broken,
              dent: testData.condition.dPart.dent,
            },
            location: testData.condition.location,
          },
          configuration: {
            cpu: testData.configuration.cpu,
            generation: testData.configuration.generation,
            ram: testData.configuration.ram,
            hdd: testData.configuration.hdd,
          },
          battery: {
            avaliable: testData.battery.avaliable,
            batteryHealth: testData.battery.batteryHealth,
          },
          lcd: {
            avaliable: testData.lcd.avaliable,
            status: testData.lcd.status,
            hasScratch: testData.lcd.hasScratch,
            hasSpots: testData.lcd.hasSpots,
            hasLine: testData.lcd.hasLine,
            hasPixel: testData.lcd.hasPixel,
            broken: testData.lcd.broken,
          },
          bazel: {
            avaliable: testData.bazel.avaliable,
            broken: testData.bazel.broken,
            location: testData.bazel.location,
          },
          keyboard: {
            avaliable: testData.keyboard.avaliable,
            working: testData.keyboard.working,
          },
          dvd: {
            avaliable: testData.dvd.avaliable,
            working: testData.dvd.working,
          },
          speakers: {
            avaliable: testData.speakers.avaliable,
            working: testData.speakers.working,
          },
          camera: {
            avaliable: testData.camera.avaliable,
            working: testData.camera.working,
          },
          hasVGAorIntel: testData.hasVGAorIntel,
          lastDealingWith:testerId,
          ProductSerial:productserialNumber
        });

        await new_TestPhase.save();
        io.emit("success", { message: "Saved Successfully" });
      } else {
       await product.updateOne(
          { serialNumber: productt.serialNumber },
          {
            $set: { status: "Under Test Phase",tested: true },
          }
        );
        var d=new Date()
        let new_notification = new notification({
          productSerialNumber: productserialNumber,
          tester: testerId,
          currentDate: d.toLocaleDateString(),
          message: "Finished Part Of Testing",
        });
        await new_notification.save();

        let new_TestPhase = new TestPhase({
          power: testData.power,
          condition: {
            aPart: {
              avaliable: testData.condition.aPart.avaliable,
              hasScratch: testData.condition.aPart.hasScratch,
              broken: testData.condition.aPart.broken,
              dent: testData.condition.aPart.dent,
            },
            bPart: {
              avaliable: testData.condition.bPart.avaliable,
              hasScratch: testData.condition.bPart.hasScratch,
              broken: testData.condition.bPart.broken,
              dent: testData.condition.bPart.dent,
            },
            cPart: {
              avaliable: testData.condition.cPart.avaliable,
              hasScratch: testData.condition.cPart.hasScratch,
              broken: testData.condition.cPart.broken,
              dent: testData.condition.cPart.dent,
            },
            dPart: {
              avaliable: testData.condition.dPart.avaliable,
              hasScratch: testData.condition.dPart.hasScratch,
              broken: testData.condition.dPart.broken,
              dent: testData.condition.dPart.dent,
            },
            location: testData.condition.location,
          },
          configuration: {
            cpu: testData.configuration.cpu,
            generation: testData.configuration.generation,
            ram: testData.configuration.ram,
            hdd: testData.configuration.hdd,
          },
          battery: {
            avaliable: testData.battery.avaliable,
            batteryHealth: testData.battery.batteryHealth,
          },
          lcd: {
            avaliable: testData.lcd.avaliable,
            status: testData.lcd.status,
            hasScratch: testData.lcd.hasScratch,
            hasSpots: testData.lcd.hasSpots,
            hasLine: testData.lcd.hasLine,
            hasPixel: testData.lcd.hasPixel,
            broken: testData.lcd.broken,
          },
          bazel: {
            avaliable: testData.bazel.avaliable,
            broken: testData.bazel.broken,
            location: testData.bazel.location,
          },
          keyboard: {
            avaliable: testData.keyboard.avaliable,
            working: testData.keyboard.working,
          },
          dvd: {
            avaliable: testData.dvd.avaliable,
            working: testData.dvd.working,
          },
          speakers: {
            avaliable: testData.speakers.avaliable,
            working: testData.speakers.working,
          },
          camera: {
            avaliable: testData.camera.avaliable,
            working: testData.camera.working,
          },
          hasVGAorIntel: testData.hasVGAorIntel,
          lastDealingWith:testerId,
          ProductSerial:productserialNumber
        });

        await new_TestPhase.save();

        io.emit("success", { message: "Saved Successfully" });
      }

    }else if(productt.tested==true){
        
      if (finished) {
       await product.updateOne(
          { serialNumber: productt.serialNumber },
          {
            $set: { status: "Ready For Maintenance",tested: true},
          }
        );
        var d=new Date()

        let new_notification = new notification({
          productSerialNumber: productserialNumber,
          tester: testerId,
          currentDate: d.toLocaleDateString(),
          message: "Finished Testing",
        });
        await new_notification.save();

      

        let doc =await TestPhase.updateOne({ProductSerial:productserialNumber}, testData, {
          new: true
        });
        io.emit("success", doc);
      } else {
       await product.updateOne(
          { serialNumber: productt.serialNumber },
          {
            $set: { status: "Under Test Phase",tested: true },
          }
        );
        var d=new Date()

        let new_notification = new notification({
          productSerialNumber: productserialNumber,
          tester: testerId,
          currentDate: d.toLocaleDateString(),
          message: "Finished Part Of Testing",
        });
        await new_notification.save();

        

        let doc =await TestPhase.updateOne({ProductSerial:productserialNumber}, testData, {
          new: true
        });
        io.emit("success", doc);
      }


    }
  });
//////////////////////////////////////////////////////////////////////////////////
  socket.on("DeletingProductTest", async (ProductSeriall) => {
     TestPhase.deleteOne({ ProductSerial:ProductSeriall }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        io.emit("DeletingTest", data);
      }
    });
  });
//////////////////////////////////////////////////////////////////////////////////
  socket.on("GetProductTest", async (ProductSeriall) => {
     TestPhase.findOne({ProductSerial:ProductSeriall}).populate("Product").exec( (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);

        io.emit("getTestById", data);
      }
    });
  });

//////////////////////////////////////////////////////////////////////////////////

socket.on( "startMaintenanceInsideStore", async (productserialNumber, maintainererId,Date) => {
  let productt = await productSchema.find(
    { serialNumber: productserialNumber },
    async (err, data) => {
      if (err) {
        console.log(err);
      } else {
        if (productt.quantity != 0) {
          if (
            productt.status == "Ready For Maintenance" ||
            productt.status == "Under Maintenance Phase"
          ) {
            productSchema.updateOne(
              { serialNumber: productt.serialNumber },
              {
                $set: { status: "Maintained Now" },
              }
            );

            let new_notification = new notification({
              productSerialNumber: productserialNumber,
              tester: maintainererId,
              currentDate: Date,
              message: "Started Maintainence",
            });
            await new_notification.save();

            io.emit("Notification", {
              message: "Maintainence Started successfully",
            });
          } else {
            io.emit("Maintainence", { message: "you cannot Maintened this product" });
          }
        } else {
          io.emit("Maintainence", { message: "Product Not exit" });
        }
      }
    }
  );
}
);






});

server.listen(3000, function () {
  console.log("listen");
});
