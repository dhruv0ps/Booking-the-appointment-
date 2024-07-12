const Adminschema = require("../Model/Adminschema");
const Admin = require("../Model/Adminschema");
const bcrypt = require("bcrypt");

const createDefaultAdmin = async () => {
    const username = "admin";
    const password = 'admin123';

    
    const existing = await Admin.find({username , password});

    if(!existing){
      const saltrounds = 10;
      const hashpassword = await bcrypt.hash(password,saltrounds);
 
      const admin = new Admin({username,password : hashpassword})
      await admin.save();
      console.log("Default admin created");
    }
   else{
    console.log("Admin is already exist ")
   }
}

module.exports = createDefaultAdmin;