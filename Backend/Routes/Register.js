const express = require("express");

const router = express.Router();

const Register = require("../Model/Registerschema");


router.post('/', async (req, res) => {
    
        const formData = req.body;
        console.log('Received form data:', formData);
        
        
      


        const None = new Register({
          username: req.body.formData.username,
          email : req.body.formData.email,
          password: req.body.formData.password,
          confirmPassword: req.body.formData.confirmPassword,
          selectedDate: req.body.formData.selectedDate,
          number: req.body.formData.number,
          bloodGroup: req.body.formData.bloodGroup,
          medicalConditions: req.body.formData.medicalConditions,
          allergies: req.body.formData.allergies,
          insuranceProvider: req.body.formData.insuranceProvider || 'ABC Insurance', // Use default value if not provided
          policyNumber: req.body.formData.policyNumber,
          height: req.body.formData.height,
          weight: req.body.formData.weight,
          gender : req.body.formData.gender
        })

        None.save();

  //         Register.create(formData)
  // .then(register => res.json(register))
  // .catch(err => {
  //   console.error('Error saving form data:', err);
  //   res.status(500).json({ message: 'Error saving form data', error: err });
  // });
    
});


module.exports = router;

