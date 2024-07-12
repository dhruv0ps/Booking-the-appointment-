
const mongoose = require('mongoose');
const bcrypt = require("bcrypt")
const Doctorschema = new mongoose.Schema({
       name : {
        type : String,
        required : true,
       },
       email : {
        type : String,
        required : true,
        unique : true
       },

      phonenumber :{
        type :Number,
        required : true,
      },
      gender :{
        type : String,
        required : true,
        
      },
      consultingfee : {
        type :Number,
        required : true,

      },
      password: {
        type: String,
        required: true
    }
})

Doctorschema.pre("save",async function (next){
   
    if(this.isModified("password")){
       this.password = await bcrypt.hash(this.password,8)
    }
    next()
})

module.exports = mongoose.model("Doctor",Doctorschema)