const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require('bcryptjs');
const { accountant } = require("../models/accountant");
var { validateOwner, owner } = require("../models/owner");
var { employee, validateEmployee } = require("../models/employee");
var parseUrlencoded = bodyParser.urlencoded({
    extended: true,
});
router.post("/profile", parseUrlencoded, async (req, res) => {
    if (req.body.type == "owner") {
        let user = await owner.findOne(
            { _id: req.body.id });

            if(user){
                res.json(user);

            }else{
                res.json("user not exit")

            }

    } else if (req.body.type == "employee") {
        let userr = await employee.findOne(
            { _id: req.body.id });
            if(userr){
                res.json(userr);

            }else{
                res.json("user not exit")

            }

    } else if (req.body.type == "accountant") {
        let userrr = await accountant.findOne(
            { _id: req.body.id });
            if(userrr){
                res.json(userrr);

            }else{
                res.json("user not exit")

            }
    }else{
        res.json("user not exit")
    }






})


router.post('/resetPassword/:id',parseUrlencoded,async(req, res)=>{

    if (req.body.type == "owner") {
        
        let user = await owner.findOne(
            { _id: req.params.id});

            if(user){
                var salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
                owner.updateOne({_id:req.params.id},{password:req.body.password},function(err,data){
                    if(err){
                        res.json("error");
                    }
                    res.json(data);
                })
                

            }else{
                res.json("user not exit")

            }

    } else if (req.body.type == "employee") {
        let userr = await employee.findOne(
            { _id: req.params.id});
            if(userr){
                var salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
                employee.updateOne({_id:req.params.id},{password:req.body.password},function(err,data){
                    if(err){
                        res.json("error");
                    }
                    res.json(data);
                })
            }else{
                res.json("user not exit")

            }

    } else if (req.body.type == "accountant") {
        let userrr = await accountant.findOne(
            { _id: req.params.id});
            if(userrr){
                var salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
                accountant.updateOne({_id:req.params.id},{password:req.body.password},function(err,data){
                    if(err){
                        res.json("error");
                    }
                    res.json(data);
                })

            }else{
                res.json("user not exit")

            }
    }else{
        res.json("user not exit")
    }





})

module.exports = router;
