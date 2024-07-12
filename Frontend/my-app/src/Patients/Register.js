import Header from "../Components/Header";
import Select from "react-select";
import "./Register.css";
import React, { useState, useMemo } from "react";
import DatePicker from "react-datepicker";
import countryList from "react-select-country-list";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from "axios";
import { Password } from 'primereact/password';
import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";
const Register = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [number, setNumber] = useState();
 const[firstname,setFirstname] = useState();
 const[lastname,setLastname] = useState();
  const [password, setPassword] = useState('');
  const[gender,setGender] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const [passwordmatch,setPasswordmatch] = useState(true);
  const[email,setEmail] = useState('');
const handleFname = (event) => {
  event.preventDefault();
  setFirstname(event.target.value);

}

const handleemail = (event)=> {
  event.preventDefault();
  setEmail(event.target.value);
}
const handleLname = (event) => {
  event.preventDefault();
  setLastname(event.target.value);
}

const handleGenderChange = (event) => {
  event.preventDefault();
  setGender(event.target.value)
}
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordmatch(event.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordmatch(event.target.value === password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const formData = {
      username: firstname.concat('', lastname),
      password,
      confirmPassword,
      selectedDate,
      number,
      bloodGroup,
      email,
      gender,
      ...medicalInfo,
    };

    const checkExisting = await axios.post("http://localhost:8000/check-existing", {
      email: formData.email,
      number: formData.number,
    });
    if (checkExisting.error) {
     
      console.error('Email or number already registered:', checkExisting.error);
      return;
    }
    try{
      const response = axios.post("http://localhost:8000/register",{formData})
    }
    catch (error) {
      console.error('Error sending data:', error.message);
    }
   
  
 
   
   setFirstname('')
   setLastname('')
    setPassword('');
    setConfirmPassword('');
    setSelectedDate(null);
    setNumber('');
    setBloodGroup('');
    setEmail('');
    setMedicalInfo({
      medicalConditions: '',
      allergies: '',
      
      insuranceProvider: 'ABC Insurance',
      policyNumber: '123456789',
      height : '',
      weight: '',
    });
    if(password === confirmPassword){
      console.log('Passwords match. Proceed with login logic.');
    }
    else{
      console.log('Passwords do not match. Please try again.');
    }
  };

  
  const handleChangeDate = (date) => {
    setSelectedDate(date);
    const formattedDate = moment(date).format('MM/DD/YYYY');
  };
  const [bloodGroup, setBloodGroup] = useState("");

  const handleBloodGroupChange = (event) => {
    setBloodGroup(event.target.value);
  };
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  const [medicalInfo, setMedicalInfo] = useState({
    medicalConditions: "",
    allergies: "",
  
    insuranceProvider: "ABC Insurance",
    policyNumber: "123456789",
  });
  const allergyOptions = [
    "Pollen",
    "Dust mites",
    "Pet dander",
    "Mold",
    "Insect stings",
    "Food allergies",
    "Medication allergies",
    "Latex",
    "Pollutants or chemicals",
    "Smoke",
    "Other",
    "None",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicalInfo({
      ...medicalInfo,
      [name]: value,
    });
  };
  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <section className="h-100 h-custom gradient-custom-2">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12">
                <div
                  className="card card-registration card-registration-2"
                  style={{ borderRadius: 15 ,width:"auto"}}
                >
                  <div className="card-body p-0">
                    <div className="row g-0">
                      <div className="col-lg-6">
                        <div className="p-5">
                          <h3
                            className="fw-normal mb-5"
                            style={{ color: "#4835d4" }}
                          >
                            Personal Information
                          </h3>
                          <div className="row">
                            <div className="col-md-6 mb-4 pb-2">
                              <div
                                data-mdb-input-init=""
                                className="form-outline"
                              >
                                <input
                                  type="text"
                                  id="form3Examplev2"
                                  className="form-control form-control-lg"
                                  value={firstname}
                                  onChange={handleFname}
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Examplev2"
                                >
                                  First name
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-4 pb-2">
                              <div
                                data-mdb-input-init=""
                                className="form-outline"
                              >
                                <input
                                  type="text"
                                  id="form3Examplev3"
                                  className="form-control form-control-lg"
                                  value={lastname}
                                  onChange={handleLname}
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Examplev3"
                                >
                                  Last name
                                </label>
                              </div>
                            </div>
                          </div>
                          <div style={{ display: "flex", gap: "1rem" }}>
                            <div className="mb-4 pb-2 ">
                              <div
                                data-mdb-input-init=""
                                className="form-outline"
                              >
                                  <DatePicker
  id="dob"
  selected={selectedDate}
  onChange={handleChangeDate}
  dateFormat="MM/dd/yyyy"
  className="form-control form-control-lg"
/>
{/* Display formatted date using Moment.js */}
{selectedDate && (
  <p>Formatted Date: {moment(selectedDate).format('MM/DD/YYYY')}</p>
)}
                                <br />
                                <label
                                  className="form-label "
                                  htmlFor="form3Examplev4"
                                >
                                  Birth Date
                                </label>
                              </div>
                            </div>

                            <div className="col-md-6 mb-4 pb-2 mb-md- pb-md-0">
                              <div
                                data-mdb-input-init=""
                                className="form-outline "
                              >
                                {" "}
                                <select
                                  className="form-select mb-5 pt-2 pb-2"
                                  style={{ height: "48px" }}
                                  value={gender}
                                  onChange={handleGenderChange}
                                >
                                  <option value="">Select gender</option>
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                  <option value="Other">Other</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div></div>
                          {/* Medical Information */}
                          <div>
                            <h2>Medical Information</h2>
                            <div className="mb-3">
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                id="medicalConditions"
                                name="medicalConditions"
                                value={medicalInfo.medicalConditions}
                                onChange={handleChange}
                              />
                              <label
                                htmlFor="medicalConditions"
                                className="form-label"
                              >
                                Medical Conditions
                              </label>
                            </div>
                            <div className="mb-3">
                              <select
                                type="text"
                                className="form-control "
                                id="allergies"
                                name="allergies"
                                value={medicalInfo.allergies}
                                onChange={handleChange}
                              >
                                <option value="">Select an allergy</option>
                                {allergyOptions.map((option, index) => (
                                  <option key={index} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>

                              <label
                                htmlFor="allergies"
                                className="form-label mt-2"
                              >
                                Allergies
                              </label>
                            </div>
                            <div className="mb-3">
    <div className="row">
      <div className="col-md-6">
        <label className="form-label">Height (cm)</label>
        <input
          type="number"
          className="form-control form-control-lg"
          id="height"
          name="height"
          value={medicalInfo.height}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Weight (kg)</label>
        <input
          type="number"
          className="form-control form-control-lg"
          id="weight"
          name="weight"
          value={medicalInfo.weight}
          onChange={handleChange}
        />
      </div>
    </div>
  </div>
                            <div className="mb-3">
                              <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                <div
                                  data-mdb-input-init=""
                                  className="form-outline"
                                >
                                  {""}
                                  <select
                                    className="form-select mb-5 pt-2 pb-2"
                                    style={{ height: "48px" }}
                                    onChange={handleBloodGroupChange}
                                    value={bloodGroup}
                                    {...props}
                                  >
                                    <option value="">Select blood group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="mb-3">
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                id="insuranceProvider"
                                name="insuranceProvider"
                                value={medicalInfo.insuranceProvider}
                                onChange={handleChange}
                              />
                              <label
                                htmlFor="insuranceProvider"
                                className="form-label"
                              >
                                Insurance Provider
                              </label>
                            </div>
                            <div className="mb-3">
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                id="policyNumber"
                                name="policyNumber"
                                value={medicalInfo.policyNumber}
                                onChange={handleChange}
                              />
                              <label
                                htmlFor="policyNumber"
                                className="form-label"
                              >
                                Policy Number
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 bg-white ">
                        <div className="p-5">
                          <h3 className="fw-normal mb-5">Contact Details</h3>
                          <div className="mb-4 pb-2">
                            <div
                              data-mdb-input-init=""
                              className="form-outline form-white"
                            >
                              <input
                                type="text"
                                id="form3Examplea2"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplea2"
                              >
                                Street + Nr
                              </label>
                            </div>
                          </div>
                          <div className="mb-4 pb-2">
                            <div
                              data-mdb-input-init=""
                              className="form-outline form-white"
                            >
                              <input
                                type="text"
                                id="form3Examplea3"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplea3"
                              >
                                Additional Information
                              </label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-5 mb-4 pb-2">
                              <div
                                data-mdb-input-init=""
                                className="form-outline form-white"
                              >
                                <input
                                  type="text"
                                  id="form3Examplea4"
                                  className="form-control form-control-lg"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Examplea4"
                                >
                                  Zip Code
                                </label>
                              </div>
                            </div>
                            <div className="col-md-7 mb-4 pb-2">
                              <div
                                data-mdb-input-init=""
                                className="form-outline form-white"
                              >
                                <input
                                  type="text"
                                  id="form3Examplea5"
                                  className="form-control form-control-lg"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Examplea5"
                                >
                                  Place
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-7 mb-4 ">
                              <div className="mb-4 pb-2 position-relative">
                                <div className="form-outline">
                                  <div>
                                    <span
                                      className="password-toggle-icon position-absolute end-0 top-0 pt-1 mt-2 pb-2     translate-middle-x"
                                      onClick={togglePasswordVisibility}
                                    >
                                      {showPassword ? (
                                        <i className="bi bi-eye-slash"></i>
                                      ) : (
                                        <i className="bi bi-eye"></i>
                                      )}
                                    </span>
                                    <input
                                      type={showPassword ? "text" : "password"}
                                      id="password"
                                      className="form-control form-control-lg"
                                      value={password}
                                      onChange={handlePasswordChange}
                                    />
                                  </div>
                                  <label
                                    className="form-label"
                                    htmlFor="password"
                                  >
                                    Password
                                  </label>
                                </div>
                                <div className="mb-0 pb-0 mt-2">
                                  <div className="form-outline pt-0">
                                    <input
                                      type="password"
                                      id="confirmPassword"
                                      className="form-control form-control-lg"
                                      value={confirmPassword}
                                      onChange={handleConfirmPasswordChange}
                                      style={{ marginTop: "14px" }}
                                    />
                                    <label
                                      className="form-label"
                                      htmlFor="confirmPassword"
                                    >
                                      Confirm Password
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-7 mb-4 pb-2">
                              <div
                                data-mdb-input-init=""
                                className="form-outline form-white"
                              >
                                <div className="phone_div">
                                  <PhoneInput
                                    country={"in"}
                                    placeholder="Enter phone number"
                                    value={number}
                                    //   style={{height:'40px'}}
                                    className="app"
                                    onChange={setNumber}
                                  />
                                </div>
                                <label
                                  className="form-label"
                                  htmlFor="form3Examplea8"
                                >
                                  Phone Number
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="mb-4">
                            <div
                              data-mdb-input-init=""
                              className="form-outline form-white"
                            >
                              <input
                                type="text"
                                id="form3Examplea9"
                                className="form-control form-control-lg"
                                value={email}
                                onChange={handleemail}
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplea9"
                              >
                                Your Email
                              </label>
                            </div>
                          </div>
                          <div className="form-check d-flex justify-content-start mb-4 pb-3">
                            <input
                              className="form-check-input me-3"
                              type="checkbox"
                              defaultValue=""
                              id="form2Example3c"
                            />
                            <label
                              className="form-check-label "
                              htmlFor="form2Example3"
                            >
                              I do accept the{" "}
                              <a href="#!" className="">
                                <u>Terms and Conditions</u>
                              </a>{" "}
                              of your site.
                            </label>
                          </div>
                          <button
                            type="sumbit"
                            data-mdb-button-init=""
                            data-mdb-ripple-init=""
                            className="btn btn-dark btn-lg"
                            data-mdb-ripple-color="dark"
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default Register;
