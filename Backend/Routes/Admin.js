const express = require("express");
const Admin = require("../Model/Adminschema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

const secretKey = process.env.JWT_SECRET;

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    try {
        
        const exist = await Admin.findOne({ username });

        if (exist) {
         
            const isMatch = await bcrypt.compare(password, exist.password);
            
            if (isMatch) {
             
                const token = jwt.sign({ id: exist._id, username: exist.username }, secretKey, { expiresIn: '1h' });

                
                return res.status(200).json({ success: true, token });
            } else {
                return res.status(401).json({ success: false, message: 'Invalid email or password' });
            }
        } else {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;
