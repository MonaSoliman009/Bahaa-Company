const express = require("express");
const router = express.Router();
var { modelPrice, validateModel } = require("../models/modelPrice");

router.get("/all", async (req, resp) => {
  let modelPrices = await modelPrice.find({});

  resp.json(modelPrices);
});

router.post("/add", async (req, resp) => {
  var { error } = validateModel(req.body);
  if (error) {
    return resp.status(400).send(error.details[0].message);
  }

  let new_model = await modelPrice.findOne({
    model: req.body.model,
  });
  if (new_model) {
    return resp.status(400).send("Model already Exist.");
  }
  new_model = new modelPrice({
    model: req.body.model,
    price: req.body.price,
  });
  await new_model.save();
  resp.json(new_model);
});

router.delete("/delete/:id", async (req, resp) => {
  try{
    await modelPrice.findOneAndRemove({ _id: req.params.id });
    resp.json("Deleted successfully");

  }catch(e){
    resp.json("Try to Delete it Later");

  }

});

router.put("/update/:id", async (req, resp) => {
  await modelPrice.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    function (err, data) {
      if (err) {
        console.log(err);
      }
      resp.send(data);
    }
  ).clone().catch(function(err){ console.log(err)});
});

module.exports = router;
