import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios';

const Adoctor = () => {
  const [detail,setDetail] = useState(['']);

  const token = localStorage.getItem('token'); 

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000', 
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/getdata');
        console.log(response.data);
        setDetail(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Sidebar />
      <table className="table align-middle mb-0 bg-white" style={{ marginTop: '80px', width: '200px', marginLeft: '300px' }}>
        <thead className="bg-light  " >
          <tr>
          <th style={{ padding: '20px' }}>Name</th>
            <th style={{ padding: '20px' }}>Email</th>
            <th style={{ padding: '20px' ,whiteSpace:"nowrap"}}>Phone Number</th>
            <th style={{ padding: '20px' }}>Gender</th>
            <th style={{ padding: '20px',whiteSpace:"nowrap" }}>Consulting Fee</th>
            <th style={{ padding: '20px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {detail.map((det) => (
            <tr key={det.id}>
              <td>
                <div className="d-flex align-items-center">
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{det.name}</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="ms-3">
                  <p className="text-muted mb-0">{det.email}</p>
                </div>
              </td>
              <td>
                <div className="ms-3">
                  <p className="text-muted mb-0">{det.phonenumber}</p>
                </div>
              </td>
              <td>
                <div className="ms-3">
                  <p className="text-muted mb-0">{det.gender}</p>
                </div>
              </td>
              <td>
                <div className="ms-3">
                  <p className="text-muted mb-0">{det.consultingfee}</p>
                </div>
              </td>
              <td>
                <button type="button" className="btn btn-link btn-sm btn-rounded">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Adoctor
