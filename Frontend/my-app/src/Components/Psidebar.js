import React, { useState } from 'react';
import './Psidebar.css';
import { NavLink,useLocation } from 'react-router-dom';

const Psidebar = ({ patientId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Main Navigation */}
      <header>
        {/* Sidebar */}
        <nav id="sidebarMenu" className={`collapse d-lg-block sidebar collapse bg-dark ${isOpen ? 'show' : ''}`}>
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
              <NavLink
               to={`/user?patientId=${patientId}`}
                className="list-group-item list-group-item-action py-2 ripple"
                activeClassName="active"
              >
                <i className="fas fa-user-md fa-fw me-3" />
                <span>Profile</span>
              </NavLink>
              <NavLink
                to={`/appointment?patientId=${patientId}`}
                className="list-group-item list-group-item-action py-2 ripple"
                activeClassName="active"
                exact
              >
                <i className="fas fa-calendar-alt fa-fw me-3" />
                <span>Appointments</span>
              </NavLink>
              <NavLink
                to="/ahistory"
                className="list-group-item list-group-item-action py-2 ripple"
                activeClassName="active"
              >
                <i className="fas fa-history fa-fw me-3" />
                <span>Appointment History</span>
              </NavLink>
              <NavLink
                to="/prescriptions"
                className="list-group-item list-group-item-action py-2 ripple"
                activeClassName="active"
              >
                <i className="fas fa-file-prescription fa-fw me-3" />
                <span>Prescriptions</span>
              </NavLink>
              <NavLink
                to="/medicalrecords"
                className="list-group-item list-group-item-action py-2 ripple"
                activeClassName="active"
              >
                <i className="fas fa-notes-medical fa-fw me-3" />
                <span>Medical Records</span>
              </NavLink>
              <NavLink
                to="/message"
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
        {/* Navbar */}
        <nav id="main-navbar" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-collapse-init=""
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleSidebar}
            >
              <i className="fas fa-bars" />
            </button>
            <a className="navbar-brand" href="#">
              <p style={{ color: 'aliceblue', height: '20px' }}>Trace Hospital</p>
            </a>
            <form className="d-none d-md-flex input-group w-auto my-auto">
              <input
                autoComplete="off"
                type="search"
                className="form-control rounded"
                placeholder='Search (ctrl + "/" to focus)'
                style={{ minWidth: 225 }}
              />
              <span className="input-group-text border-2">
                <i className="fas fa-search" />
              </span>
            </form>
            <ul className="navbar-nav ms-auto d-flex flex-row">
              <li className="nav-item">
                <a className="nav-link me-3 me-lg-0" href="#">
                  <i className="fas fa-stethoscope" />
                </a>
              </li>
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="#">
                  <i className="fas fa-notes-medical" />
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  data-mdb-dropdown-init=""
                  className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="flag-united-kingdom flag m-0" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="flag-united-kingdom flag" />
                      English
                      <i className="fa fa-check text-success ms-2" />
                    </a>
                  </li>
                  {/* Add more language options here */}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  data-mdb-dropdown-init=""
                  className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                    className="rounded-circle"
                    height={22}
                    alt="Avatar"
                    loading="lazy"
                  />
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <a className="dropdown-item" href="#">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        {/* Navbar */}
      </header>
      {/* Main Layout */}
      <main style={{ marginTop: 58 }}>
        <div className="container pt-4">
          {/* Content Here */}
        </div>
      </main>
      {/* Main Layout */}
    </>
  );
};

export default Psidebar;
