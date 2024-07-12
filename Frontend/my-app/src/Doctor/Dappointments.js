import React from 'react';
import Dsidebar from './Dsidebar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Dappointment.css';

const localizer = momentLocalizer(moment);

const Dappointments = () => {
  // Temporary list of events
  const myEventsList = [
    {
      title: 'Appointment with Patient 1',
      start: new Date(2024, 5, 20, 10, 0), // June 20, 2024, 10:00 AM
      end: new Date(2024, 5, 20, 11, 0)    // June 20, 2024, 11:00 AM
    },
    {
      title: 'Appointment with Patient 2',
      start: new Date(2024, 5, 21, 14, 0), // June 21, 2024, 2:00 PM
      end: new Date(2024, 5, 21, 15, 0)    // June 21, 2024, 3:00 PM
    },
    {
      title: 'Appointment with Patient 3',
      start: new Date(2024, 5, 22, 9, 0),  // June 22, 2024, 9:00 AM
      end: new Date(2024, 5, 22, 10, 0)    // June 22, 2024, 10:00 AM
    }
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <Dsidebar />
      </div>
      <div className="main-content">
        <h2 className="calendar-header">Doctor Appointments</h2>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
};

export default Dappointments;
