const express = require("express")

const router = express.Router();
const Appointment = require("../Model/Appointment");

const allTimes = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00'];
router.post('/',async(req,res) => {
    const { doctorId, date } = req.body;
    const selectedDate = new Date(date);
    const day = selectedDate.getDay();

    console.log(day);
    if(selectedDate.getDate() === 0){
        console.log("it is sunday")
        return res.json({ success: true, availableTimes: [] }); 
        
    }
    try {
      const appointments = await Appointment.find({ doctorId, date });
      const morningSlotCount = appointments.filter(app => app.timeSlot === '9 AM - 12 PM').length;
      const eveningSlotCount = appointments.filter(app => app.timeSlot === '5 PM - 8 PM').length;
  
      const availableTimes = [];
      if (morningSlotCount < 15) availableTimes.push('9 AM - 12 PM');
      if (eveningSlotCount < 15) availableTimes.push('5 PM - 8 PM');
  
      res.json({ success: true, availableTimes });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch available slots' });
    }
})

module.exports = router;
