import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaChartArea, FaLock, FaChartLine, FaChartPie } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
     
      localStorage.removeItem('token');

      // Redirect to the login page
      navigate("/");
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="sidebar">
      <header>
        {/* Sidebar */}
       
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-dark">
          <div className="position-sticky">
            <h4 className='mai'>Admin Dashboard</h4>
            <div className="list-group list-group-flush mx-3 mt-4 ">
              <NavLink to="/Ahome" className="list-group-item list-group-item-action mt-4 py-2  ripple" activeClassName="active">
                <FaTachometerAlt className="fa-fw me-3" />
                <span>Home</span>
              </NavLink>
              <NavLink to="/Aappointments" className="list-group-item list-group-item-action  py-2 ripple" activeClassName="active">
                <FaChartArea className="fa-fw me-3" />
                <span>Appointments</span>
              </NavLink>
              <NavLink to="/Apatients" className="list-group-item list-group-item-action py-2 ripple" activeClassName="active">
                <FaLock className="fa-fw me-3" />
                <span>Patients</span>
              </NavLink>
              <NavLink to="/Adoctor" className="list-group-item list-group-item-action py-2 ripple" activeClassName="active">
                <FaChartLine className="fa-fw me-3" />
                <span>Doctors</span>
              </NavLink>
              <NavLink to="/Adddoctor" className="list-group-item list-group-item-action py-2 ripple" activeClassName="active">
                <FaChartPie className="fa-fw me-3" />
                <span>Add Doctor</span>
              </NavLink>
            </div>
          </div>
        </nav>
        {/* Sidebar */}

        {/* Navbar */}
        <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Toggle button */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars" />
            </button>
            {/* Brand */}
            <a className="navbar-brand" href="#" style={{color:"aliceblue"}}>
                   Trace 
            </a>
            {/* Search form */}
            <form className="d-none d-md-flex input-group w-auto my-auto">
              <input autoComplete="off" type="search" className="form-control rounded" placeholder='Search (ctrl + "/" to focus)' style={{ minWidth: 225 }} />
              <span className="input-group-text border-0">
                <i className="fas fa-search" />
              </span>
            </form>
      
        
           
            {/* Right links */}
            <ul className="navbar-nav ms-auto d-flex flex-row">
              {/* Notification dropdown */}
              <button onClick={handleLogout} className="btn btn-primary btn-lg  ">
      Logout
    </button>
              <li className="nav-item dropdown">
                <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-bell" />
                  <span className="badge rounded-pill badge-notification bg-danger">1</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Some news</a></li>
                  <li><a className="dropdown-item" href="#">Another news</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              {/* Icon */}
              <li className="nav-item">
                <a className="nav-link me-3 me-lg-0" href="#">
                  <i className="fas fa-fill-drip" />
                </a>
              </li>
              {/* Icon */}
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="#">
                  <i className="fab fa-github" />
                </a>
              </li>
              {/* Icon dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="flag-united-kingdom flag m-0" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#"><i className="flag-united-kingdom flag" /> English <i className="fa fa-check text-success ms-2" /></a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#"><i className="flag-poland flag" /> Polski</a></li>
                  <li><a className="dropdown-item" href="#"><i className="flag-china flag" /> 中文</a></li>
                  <li><a className="dropdown-item" href="#"><i className="flag-japan flag" /> 日本語</a></li>
                  <li><a className="dropdown-item" href="#"><i className="flag-germany flag" /> Deutsch</a></li>
                  <li><a className="dropdown-item" href="#"><i className="flag-france flag" /> Français</a></li>
                  <li><a className="dropdown-item" href="#"><i className="flag-spain flag" /> Español</a></li>
                  <li><a className="dropdown-item" href="#"><i className="flag-russia flag" /> Русский</a></li>
                  <li><a className="dropdown-item" href="#"><i className="flag-portugal flag" /> Português</a></li>
                </ul>
              </li>
              {/* Avatar */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" className="rounded-circle" height={22} alt="Avatar" loading="lazy" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">My profile</a></li>
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </header>
      {/* Main layout */}
      <main style={{ marginTop: 58 }}>
        <div className="container pt-4">
          {/* Main content goes here */}
        </div>
      </main>
      {/* Main layout */}
    </div>
  );
};

export default Sidebar;
