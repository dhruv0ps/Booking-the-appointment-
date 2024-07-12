import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Hbody.css'
import Plogin from '../Patients/Plogin';
import Dlogin from '../Doctor/Dlogin';
import Asignup from '../Admin/Asignup';
const Hbody = () => {
  return (
    <div className='App1' style={{ marginTop: '60px', display: 'grid', placeItems: 'center' }}>
      <div className="box">
      <Tabs defaultActiveKey="patients" id="uncontrolled-tab-example" className="mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
          <Tab eventKey="patients" title="Patients">
            <Plogin/>
          </Tab>
          <Tab eventKey="doctor" title="Doctor">
            <Dlogin/>
          </Tab>
          <Tab eventKey="admin" title="Admin">
        <Asignup/>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default Hbody
