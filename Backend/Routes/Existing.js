const express = require("express");
const Register = require("../Model/Registerschema");

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, number } = req.body;

    try {
      const existingUser = await Register.findOne({ $or: [{ email }, { number }] });
  
      if (existingUser) {
        res.status(400).json({ error: 'Email or number already registered' });
      } else {
        res.status(200).json({ message: 'Email and number available' });
      }
    } catch (error) {
      console.error('Error checking existing user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  module.exports = router;