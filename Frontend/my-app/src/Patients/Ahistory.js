import React, { useEffect, useState } from 'react';
import Psidebar from '../Components/Psidebar';
import { Container, Row, Col, Table, Alert } from 'react-bootstrap';
import axios from 'axios';

const Ahistory = () => {
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');

  const patientId = localStorage.getItem('patientId');
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/appointmentHistory/${patientId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
         console.log(response);
        if (response.data.success) {
          setHistory(response.data.history);
        } else {
          setError('Failed to fetch appointment history');
        }
      } catch (error) {
        setError('An error occurred while fetching the appointment history');
      }
    };

    fetchHistory();
  }, [patientId]);

  return (
    <Container>
      <Row>
        <Col md={3}>
          <Psidebar patientId={patientId} />
        </Col>
        <Col md={9}>
          <div className="p-4 border" style={{ marginTop: '100px' }}>
            <h2>Appointment History</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Appointment ID</th>
                  <th>Doctor Name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Illness</th>
                  <th>Token</th>
                </tr>
              </thead>
              <tbody>
                {history.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center">No appointment history available</td>
                  </tr>
                ) : (
                  history.map((appointment) => (
                    <tr key={appointment._id}>
                      <td>{appointment._id}</td>
                      <td>{appointment.doctorname}</td>
                      <td>{new Date(appointment.date).toLocaleDateString()}</td>
                      <td>{appointment.
timeSlot}</td>
                      <td>{appointment.illness}</td>
                      <td>{appointment.tokenNumber}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Ahistory;
