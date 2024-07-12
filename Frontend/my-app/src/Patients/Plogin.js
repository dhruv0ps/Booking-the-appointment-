import React from 'react'
import { useState } from 'react';
import {Form,Button} from 'react-bootstrap';
import './Plogin.css';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
  
const Plogin = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();
  
  const handleemail = (event) => {
    
    setEmail(event.target.value);

  }
  const handlepassword = (event) => {
  
    setPassword(event.target.value);
  }
  const handleSubmit = async(event) => {
    event.preventDefault(); 
    
    console.log("Email:", email);
    console.log("Password:", password);
     try{
      const response = await axios.post("http://localhost:8000/user",{
        email: email,
        password: password
      })
      console.log(response)
      if (response.data.success) {
        const token = response.data.token;
        const patientId = response.data.id;
        console.log('Token:', token);
        console.log('Patient ID:', patientId);
  
      
        localStorage.setItem('patient-token', token);
        localStorage.setItem('patientId', patientId);
        Navigate('/user', { state: { patientId } });
      } else {
        console.error('Login failed');
      }
  
    }
     catch (error) {
      console.error("Error:", error);
    }
   
   
    setEmail('');
    setPassword('');
};
  return (
    <div>

<section className="main vh-100 ">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid"
          alt="Sample image"
        />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            
          </div>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>
          {/* Email input */}
          <div className="form-outline mb-4">
            <input
              type="email"
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Enter a valid email address"
              onChange={handleemail}
              value={email}
            />
            <label className="form-label" htmlFor="form3Example3">
              Email address
            </label>
          </div>
          {/* Password input */}
          <div className="form-outline mb-3">
            <input
              type="password"
              id="form3Example4"
              className="form-control form-control-lg"
              placeholder="Enter password"
              onChange={handlepassword}
              value={password}
            />
            <label className="form-label" htmlFor="form3Example4">
              Password
            </label>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            {/* Checkbox */}
            <div className="form-check mb-0">
              <input
                className="form-check-input me-2"
                type="checkbox"
                defaultValue=""
                id="form2Example3"
              />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">
              Forgot password?
            </a>
          </div>
          <div className="text-center text-lg-start mt-4 pt-2">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
            >
              Login
            </button>
            <Link to='/register'>
            <p className="small fw-bold mt-2 pt-1 mb-0">
              Don't have an account?{" "}
              <a href="#!" className="link-danger">
                Register
              </a>
              
            </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
  </section>


    </div>
  )
}

export default Plogin
