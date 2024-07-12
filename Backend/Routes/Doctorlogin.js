const express = require("express");
const router = express.Router();
const Doctor = require("../Model/Doctorschema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;
router.post("/", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find doctor by email
      const doctor = await Doctor.findOne({ email: email });
  
      if (!doctor) {
        return res.status(404).json({ message: "Doctor not found" });
      }
  
      // Compare passwords
      const isPasswordMatch = await bcrypt.compare(password, doctor.password);
  
      if (!isPasswordMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      // Generate JWT token
      const doctortoken = jwt.sign(
        { doctorId: doctor._id },
        secretKey,
        { expiresIn: '1h' }
      );
  
 
      res.status(200).json({ message: "Login successful", doctortoken: doctortoken,doctorId : doctor._id });
  
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  

module.exports = router;
