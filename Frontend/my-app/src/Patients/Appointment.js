import React, { useEffect, useState } from 'react';
import Psidebar from '../Components/Psidebar';
import { Container, Row, Col, Dropdown, DropdownButton, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Appointment.css';

const Appointment = () => {
  const [detail, setDetail] = useState([]);
  const [error, setError] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [illness, setIllness] = useState('');
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  const [patientId] = useState(localStorage.getItem('patientId'));
  const [doctorname, setDoctorname] = useState('');
  const token = localStorage.getItem("patient-token");

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const handleSelect = (eventKey) => {
    const selected = detail.find((doctor) => doctor._id === eventKey);
    setSelectedDoctor(selected);
    setDoctorname(selected.name);
    setSelectedDate(null);
    setSelectedTimeSlot('');
    setAvailableSlots([]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/getdata');
        if (Array.isArray(response.data)) {
          setDetail(response.data);
        } else {
          setError('Invalid data format from API');
        }
      } catch (error) {
        setError('An error occurred while fetching data');
      }
    };
    fetchData();
  }, []);

  const handleDateChange = async (date) => {
    setSelectedDate(date);
    if (selectedDoctor && date) {
      try {
        const response = await axiosInstance.post('/availableSlots', {
          doctorId: selectedDoctor._id,
          date,
        });
        if (response.data.success) {
          setAvailableSlots(response.data.availableTimes);
        } else {
          setError('Error fetching available slots');
        }
      } catch (error) {
        setError('An error occurred while fetching available slots');
      }
    }
  };

  const handleBooking = async () => {
    try {
      const response = await axiosInstance.post('/bookAppointment', {
        doctorId: selectedDoctor._id,
        patientId,
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        doctorname,
        illness
      });
      if (response.data.success) {
        setAppointmentDetails(response.data.appointment);
        setSelectedDoctor(null);
        setSelectedDate(null);
        setSelectedTimeSlot('');
        setAvailableSlots([]);
        setIllness('');
        setError('');
        toast.success("Your appointment is booked");
      } else {
        setError('Booking failed');
      }
    } catch (error) {
      setError('An error occurred while booking');
    }
  };

  return (
    <Container>
      <Row>
        <Col md={3}>
          <Psidebar />
        </Col>
        <Col md={9}>
          <div className="appointment-container p-4 border">
            <Form>
              <Form.Group as={Row} className="align-items-center">
                <Form.Label column sm={4}>Select your doctor</Form.Label>
                <Col sm={8}>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={selectedDoctor ? selectedDoctor.name : "Select Doctor"}
                    onSelect={handleSelect}
                  >
                    {detail.map((doctor) => (
                      <Dropdown.Item key={doctor._id} eventKey={doctor._id}>
                        {doctor.name}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </Col>
              </Form.Group>
              <ToastContainer />
              {selectedDoctor && (
                <div className="mt-3">
                  <h5>Selected Doctor: {selectedDoctor.name}</h5>
                  <p>Consulting Fee: {selectedDoctor.consultingfee}</p>
                  <Form.Group>
                    <Form.Label className='mt-1'>Illness</Form.Label>
                    <Form.Control
                      type="text"
                      value={illness}
                      onChange={(e) => setIllness(e.target.value)}
                      className='mt-1'
                      placeholder="Describe your illness"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Select Date</Form.Label>
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      minDate={new Date()}
                      placeholderText="Select a date"
                      className="mt-2 form-control"
                    />
                  </Form.Group>
                  {selectedDate && availableSlots.length > 0 ? (
                    <Form.Group className="mt-3">
                      <Form.Label>Select Time Slot</Form.Label>
                      <div>
                        {availableSlots.includes('9 AM - 12 PM') && (
                          <Form.Check
                            type="radio"
                            label="9 AM - 12 PM"
                            value="9 AM - 12 PM"
                            name="timeSlot"
                            checked={selectedTimeSlot === "9 AM - 12 PM"}
                            onChange={(e) => setSelectedTimeSlot(e.target.value)}
                          />
                        )}
                        {availableSlots.includes('5 PM - 8 PM') && (
                          <Form.Check
                            type="radio"
                            label="5 PM - 8 PM"
                            value="5 PM - 8 PM"
                            name="timeSlot"
                            checked={selectedTimeSlot === "5 PM - 8 PM"}
                            onChange={(e) => setSelectedTimeSlot(e.target.value)}
                          />
                        )}
                      </div>
                    </Form.Group>
                  ) : selectedDate && (
                    <Alert variant="info" className="mt-3">
                      No available slots for the selected date.
                    </Alert>
                  )}
                  <Button
                    className="mt-3"
                    onClick={handleBooking}
                    disabled={!selectedDate || !selectedTimeSlot || !illness}
                  >
                    Book Appointment
                  </Button>
                  {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                  {appointmentDetails && (
                    <Alert variant="success" className="mt-3">
                      <h5>Appointment Details</h5>
                      <p><strong>Appointment ID:</strong> {appointmentDetails._id}</p>
                      <p><strong>Doctor:</strong> {selectedDoctor.name}</p>
                      <p><strong>Date:</strong> {new Date(appointmentDetails.date).toLocaleDateString()}</p>
                      <p><strong>Time:</strong> {appointmentDetails.timeSlot}</p>
                      <p><strong>Illness:</strong> {appointmentDetails.illness}</p>
                      <p><strong>Token Number:</strong> {appointmentDetails.tokenNumber}</p>
                    </Alert>
                  )}
                </div>
              )}
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Appointment;

