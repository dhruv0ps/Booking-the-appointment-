const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  illness: { type: String, required: true },
  doctorname : {type:String },
  date: { type: Date, required: true },
  timeSlot: { type: String, required: true },
  tokenNumber: { type: Number, required: true },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
