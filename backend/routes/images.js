const express = require("express");
const app = express();
const router = express.Router();
const { accountant } = require("../models/accountant");
var { validateOwner, owner } = require("../models/owner");
var { employee, validateEmployee } = require("../models/employee");
var config = require("config")

const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name: config.get("cloud_name"),
    api_key: config.get("api_key"),
    api_secret:config.get("api_secret"),
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "company",
        allowedFormats: ["jpg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }],
    },

    
});

const parser = multer({ storage: storage });

router.post("/api/images", parser.single("image"), async(req, res) => {
    console.log(req.file); // to see what is returned to you
    //   const result = await cloudinary.v2.uploader.upload(req.file.path)
    const image = {};
    image.url = req.file.url;
    image.id = req.file.public_id;
    //   Image.create(image) // save image information in database
    //     .then((newImage) => res.json(newImage))
    //     .catch((err) => console.log(err));
    if (req.body.type == "owner") {
        await owner.updateOne(
            { _id: req.body.id },
            {
                $set: { img: req.file.path },
            }
        );
        res.json(req.file.path);

    } else if (req.body.type == "employee") {
        await employee.updateOne(
            { _id: req.body.id },
            {
                $set: { image: req.file.path },
            }
        );
        res.json(req.file.path);

    } else if (req.body.type == "accountant") {
        await accountant.updateOne(
            { _id: req.body.id },
            {
                $set: { img: req.file.path },
            }
        );
        res.json(req.file.path);
    }else{
        res.json("please try again later")
    }
});

module.exports = router;
