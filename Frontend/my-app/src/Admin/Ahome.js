import React from 'react';
import './AdminHome.css';
import Sidebar from './Sidebar';
import { Card, Col, Row } from "react-bootstrap";

const Ahome = () => {
  return (
    <>
      <Sidebar />
      <div>
        <Col md={12}>
          <Row className="row" style={{ marginTop: "100px", marginLeft: "240px" }}>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Link className="custom-logo"><i className="bi bi-journal"></i></Card.Link>
                  <Card.Title>Total Appointments</Card.Title>
                  <Card.Text>150</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Link className="custom-logo"><i className="bi bi-person-wheelchair"></i></Card.Link>
                  <Card.Title>Total Patients</Card.Title>
                  <Card.Text>300</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Link className="custom-logo"><i className="bi bi-bag-plus-fill"></i></Card.Link>
                  <Card.Title>Total Doctors</Card.Title>
                  <Card.Text>20</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Link className="custom-logo"><i className="bi bi-x-circle"></i></Card.Link>
                  <Card.Title>Cancellations</Card.Title>
                  <Card.Text>5</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </div>
    </>
  );
};

export default Ahome;
