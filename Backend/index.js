const express = require("express");
const mongooseConnection = require('./db/Connection');
const cors = require('cors');
const app = express();
const port = 8000;
const createDefaultAdmin = require("./config/Defaultadmin")
require('dotenv').config();
const addd = require("./Routes/Doctor");
const checkExisting = require('./Routes/Existing');
const registerRoute = require('./Routes/Register');
const patientroute = require('./Routes/User');
const adminroute = require("./Routes/Admin");
const existingroute = require("./Routes/Dexsiting");
const viewroute = require("./Routes/Viewdoctor");
const getpatientroute = require("./Routes/Viewpatients");
const availabel = require("./Routes/Appointment");
const bookroute = require("./Routes/Bookappointment");
const historyroute = require("./Routes/History");
const doctorloginroute = require("./Routes/Doctorlogin");
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Mongoose event handlers
mongooseConnection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
 

});

mongooseConnection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
  // Handle database connection errors
  process.exit(1); // Exit process on connection error
});

mongooseConnection.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB');
});

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.use('/check-existing', checkExisting);
app.use('/register', registerRoute);
app.use('/user', patientroute);
app.use('/Admin',adminroute);
app.use("/check",existingroute);
app.use("/adddoctor",addd)
app.use('/getdata',viewroute)
app.use("/getpatient",getpatientroute);
app.use('/availableSlots',availabel)
app.use("/bookAppointment",bookroute)
app.use("/appointmentHistory",historyroute);
app.use("/Doctorlogin",doctorloginroute);
// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
