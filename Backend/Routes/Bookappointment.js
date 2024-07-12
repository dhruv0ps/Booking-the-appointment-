const express = require("express");
const router = express.Router();
const Appointment = require("../Model/Appointment");

router.post('/', async (req, res) => {
  const { doctorId, patientId, date, timeSlot, doctorname, illness } = req.body;
  try {
    const existingAppointments = await Appointment.find({ doctorId, date, timeSlot });

    if (existingAppointments.length >= 15) {
      return res.status(400).json({ error: 'Time slot is fully booked' });
    }

    const tokenNumber = existingAppointments.length + 1;

    const appointment = new Appointment({
      doctorId,
      patientId,
      date,
      timeSlot,
      doctorname,
      illness,
      tokenNumber,  
    });

    await appointment.save();

    res.json({ success: true, appointment, tokenNumber });
  } catch (error) {
    res.status(500).json({ error: 'Failed to book appointment' });
  }
});

module.exports = router;
