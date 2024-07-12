import React, { useState } from 'react';
import '../Components/Psidebar.css';
import { NavLink } from 'react-router-dom';
import LineChart from './LineChart';
const Dsidebar = ({ doctorId }) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <nav id="sidebarMenu" className={`collapse d-lg-block sidebar collapse bg-dark ${isOpen ? 'show' : ''}`}>
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4">
            <NavLink
              to={`/Dprofile`}
              className="list-group-item list-group-item-action py-2 ripple"
              activeClassName="active"
            >
              <i className="fas fa-user-md fa-fw me-3" />
              <span>Profile</span>
            </NavLink>
            <NavLink
              to={`/dappointments?doctorId=${doctorId}`}
              className="list-group-item list-group-item-action py-2 ripple"
              activeClassName="active"
            >
              <i className="fas fa-calendar-alt fa-fw me-3" />
              <span>Appointments</span>
            </NavLink>
            <NavLink
              to={`/doctor/prescriptions?doctorId=${doctorId}`}
              className="list-group-item list-group-item-action py-2 ripple"
              activeClassName="active"
            >
              <i className="fas fa-file-prescription fa-fw me-3" />
              <span>Prescriptions</span>
            </NavLink>
            <NavLink
              to={`/doctor/patients?doctorId=${doctorId}`}
              className="list-group-item list-group-item-action py-2 ripple"
              activeClassName="active"
            >
              <i className="fas fa-users fa-fw me-3" />
              <span>Patients</span>
            </NavLink>
            <NavLink
              to={`/doctor/messages?doctorId=${doctorId}`}
              className="list-group-item list-group-item-action py-2 ripple"
              activeClassName="active"
            >
              <i className="fas fa-comment-medical fa-fw me-3" />
              <span>Messages</span>
            </NavLink>
          </div>
        </div>
      </nav>
      {/* Sidebar */}
      
    </>
  );
};

export default Dsidebar;
