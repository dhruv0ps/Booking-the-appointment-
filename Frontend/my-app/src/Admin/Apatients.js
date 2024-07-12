import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

const Apatients = () => {
  const [detail, setDetail] = useState([]);
  const [error, setError] = useState('');
  const token = localStorage.getItem("token");

    const axiosInstance = axios.create({
      baseURL: 'http://localhost:8000',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/getpatient');

        if (Array.isArray(response.data)) {
          setDetail(response.data);
          console.log(response.data);
        } else {
          console.error('Response data is not an array');
          setError('Invalid data format from API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching data');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Sidebar />
      <table className="table align-middle mb-0 bg-white" style={{ marginTop: '80px', width: '800px', marginLeft: '300px' }}>
        <thead className="bg-light">
          <tr>
            <th style={{ padding: "20px" }}>Name</th>
            <th style={{ padding: "20px" }}>Number</th>
            <th style={{ padding: "20px" }}>Gender</th>
            <th style={{ padding: "20px" }}>BirthDate</th>
            <th style={{ padding: "20px", whiteSpace: "nowrap" }}>Blood Group</th>
            <th style={{ padding: "20px", whiteSpace: "nowrap" }}>Medical Condition</th>
            <th style={{ padding: "20px", whiteSpace: "nowrap" }}>Policy Number</th>
            <th style={{ padding: "20px", whiteSpace: "nowrap" }}>Insurance Provider</th>
          </tr>
        </thead>

        <tbody>
          {detail.length > 0 ? (
            detail.map((det) => (
              <tr key={det._id}>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{det.username}</p>
                    </div>
                  </div>
                </td>
                <td>{det.number}</td>
                <td>{det.gender}</td>
                <td>{det. selectedDate}</td>
                <td style={{padding:"20px", paddingLeft:"40px"}}>{det.bloodGroup}</td>
                <td>{det.medicalConditions}</td>
                <td>{det.policyNumber}</td>
                <td>{det.insuranceProvider}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Apatients;
