import React , {useState} from 'react'
import axios from 'axios';
import Sidebar from './Sidebar'

import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './Adddoctor.css';
const Adddoctor = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        consultingFee: '',
        password: '',
        confirmPassword: '',
      });
    
      const [error, setError] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          return;
        }
        setError('');
        // Handle form submission, e.g., send data to the server
     try   {
      const  res = await axios.post('http://localhost:8000/adddoctor/' ,{formData})

      console.log('Form data submitted:', formData);
      console.log('Signp ', res.data);
        }
       catch(err){
        alert('Invalid credentials');
       }
      };
    
      return (
        <>
        <Sidebar/>
        <Container className="registration-container">
        <Row className="justify-content-md-center">
          <Col md={6} style={{marginLeft:"120px"}}>
            <div className="registration-form">
              <h2 className="registration-title">Doctor Registration</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter doctor's name"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    as="select"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formConsultingFee">
                  <Form.Label>Consulting Fee</Form.Label>
                  <Form.Control
                    type="number"
                    name="consultingFee"
                    value={formData.consultingFee}
                    onChange={handleChange}
                    placeholder="Enter consulting fee"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    required
                  />
                </Form.Group>

                <Button className="registration-button" variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
        </>
  )
}

export default Adddoctor
