
import './App.css';

import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import User from './Patients/User';
import Appointment from './Patients/Appointment';
import Ahistory from './Patients/Ahistory';
import Prescriptions from './Patients/Prescriptions';
import Medicalrecords from './Patients/Medicalrecords';
import Message from './Patients/Message';
import Register from './Patients/Register';
import Ahome from './Admin/Ahome';
import Aappointments from './Admin/Aappointments';
import Apatients from './Admin/Apatients';
import Adoctor from './Admin/Adoctor';
import Adddoctor from './Admin/Adddoctor';
import PrivateRoute from './Utils/PrivateRoute';
import Psidebar from './Components/Psidebar';
import Profile from './Patients/Profile';
import Dsidebar from './Doctor/Dsidebar';
import Dappointments from './Doctor/Dappointments';
import Dprofile from './Doctor/Dprofile';
function App() {
  return (
    <div className="App">
     
      <Router>

      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/user" element={<SidebarWrapper />} />
       <Route path='/appointment' element={<Appointment/>}/>
       <Route path='/ahistory' element={<Ahistory/>}/>
       <Route path='/prescriptions' element={<Prescriptions/>}/>
       <Route path='/medicalrecords' element={<Medicalrecords/>}/>
       <Route path='/message' element={<Message/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/dprofile' element={<Dprofile/>}/>
       <Route path='/dappointments' element={<Dappointments/>}/>
       <Route element={<PrivateRoute/>}>
       <Route path='/Ahome' element={<Ahome/>}/>
       <Route path='/Aappointments' element={<Aappointments/>}/>
       <Route path='/Apatients' element={<Apatients/>}/>
       <Route path='/Adoctor' element={<Adoctor/>}/>
       <Route path='/Adddoctor' element={<Adddoctor/>}/>
       
       </Route>
        
      </Routes>
      </Router>
    </div>
  );
}

const SidebarWrapper = () => {
  const location = useLocation();
  const { patientId } = location.state || {}; 
  return (
    <>
      <Profile patientId={patientId} />
      <Psidebar patientId={patientId} />
      
    </>
  );
};

export default App;
