const express = require('express');
const router = express.Router();
const debug = require('debug')('app:router');
const Appointment = require('../Model/Appointment'); // Assuming you have an Appointment model

router.get('/:patientId', async (req, res) => {
    const { patientId } = req.params;
    debug('Fetching appointment history for patient ID %s', patientId);

    console.log(patientId);
    
    try {
        const history = await Appointment.find({ patientId });
        res.json({ success: true, history });
    } catch (error) {
        debug('Error fetching appointment history: %O', error);
        res.status(500).json({ success: false, message: 'Error fetching appointment history' });
    }
});

module.exports = router;

