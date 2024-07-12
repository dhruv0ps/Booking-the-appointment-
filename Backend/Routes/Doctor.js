const express = require("express");
const router = express.Router();
const Doctor = require("../Model/Doctorschema");



router.post("/",async(req,res) => {
    const formData = req.body;
    console.log(formData);


const New = Doctor({
    name : req.body.formData.name,
    email : req.body.formData.email,
    phonenumber : req.body.formData.phone,
    gender : req.body.formData.gender,
    consultingfee : req.body.formData.consultingFee,
    password : req.body.formData.password

})
    
New.save();

})

module.exports = router;