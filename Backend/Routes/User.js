const express = require("express");
const cookieParser = require("cookie-parser");
const Register = require("../Model/Registerschema");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { setUser } = require('../Service/auth');
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET;
// Add cookie-parser middleware to parse cookies


router.post('/', async (req, res) => {
   
    const email = req.body.email;
    const password = req.body.password;

    try {
        
        const user = await Register.findOne({ email, password });

        if (user) {
           
            
            const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });
            return res.status(200).json({ success: true, token, id : user._id });
        } else {
            res.status(404).json({ success: false, message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;
