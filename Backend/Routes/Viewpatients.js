const express = require("express");
const router = express.Router();

const Register = require("../Model/Registerschema");
const authenticateJWT = require("../middleware/auth");



router.get("/",authenticateJWT,async(req,res)=> {
    try{
const patient = await Register.find({})
console.log(patient)
res.status(200).json(patient);

    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
})

module.exports = router ;