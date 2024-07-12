const express = require("express");
const router = express.Router();
const Doctor = require("../Model/Doctorschema");

router.post('/', async (req, res) => {
    const  {email} = req.body;
  console.log(email);
    try {
      const existingUser = await Doctor.find({ email });
    console.log(existingUser);
      if (existingUser) {
        res.status(400).json({ error: 'Email or number already registered' });
      } else {
        res.status(200).json({ message: 'Email and number not registered ' });
      }
    } catch (error) {
      console.error('Error checking existing user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  module.exports = router;