import React from 'react'
import './Profile.css'
const Profile = () => {
  return (
    <section style={{ backgroundColor: "#eee" }}>
    <div className="container py-5 " style={{marginRight:"0PX",marginLeft:"230px"}}>
      
      <div className="row">
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-body text-center">
            <img
      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
      alt="avatar"
      className="rounded-circle img-fluid"
      style={{ width: 150 }}
    />
    <h5 className="my-3">John Smith</h5>
    <p className="text-muted mb-1">Patient</p>
    <p className="text-muted mb-1">Blood Group: O+</p> 
        <p className="text-muted mb-3">Age: 45</p>
              <div className="d-flex justify-content-center mb-0">
                
                <button
                  type="button"
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-outline-primary ms-1"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
          
        </div>
        <div className="col-lg-8">
          <div className="card mb-4" style={{width:"800px"}}>
            <div className="card-body" style={{width:"inherit"}}>
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Full Name</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">Johnatan Smith</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Email</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">example@example.com</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3" >
                  <p className="mb-0">Phone</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">(097) 234-5678</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Mobile</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">(098) 765-4321</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Address</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                </div>
              </div>
              
            </div>
            
          </div>
          <div className="col">
            <div className="col-lg-12" >
              <div className="card mb-2 mb-md-0"style={{width:"800px"}}>
              <div className="card-body" style={{width:"inherit"}}>
  <p className="mb-3">
    <span className="text-primary font-italic me-2">
      Medical
    </span>{" "}
    Information
  </p>
  <div className="row">
        <div className="col-sm-3">
          <p className="mb-0">Medical Condition</p>
        </div>
        <div className="col-sm-9">
          <p className="text-muted mb-0">Diabetes</p>
        </div>
      </div>
      <hr />

      <div className="row">
        <div className="col-sm-3">
          <p className="mb-0">Blood Group</p>
        </div>
        <div className="col-sm-9">
          <p className="text-muted mb-0">O+</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <p className="mb-0">Allergies</p>
        </div>
        <div className="col-sm-9">
          <p className="text-muted mb-0">Penicillin</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <p className="mb-0">Insurance Provider</p>
        </div>
        <div className="col-sm-9">
          <p className="text-muted mb-0">XYZ Insurance</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <p className="mb-0">Policy Number</p>
        </div>
        <div className="col-sm-9">
          <p className="text-muted mb-0">ABC123456</p>
        </div>
      </div>
</div>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Profile
