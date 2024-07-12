import React from 'react'
import Dsidebar from './Dsidebar'
import LineChart from './LineChart';
const Dprofile = () => {
    const appointmentData = [10, 15, 20, 18, 25, 30, 28];
  return (
    <div>
      <Dsidebar/>
      <div className="line-chart-container">
          <LineChart data={appointmentData} />
        </div>
    </div>
  )
}

export default Dprofile
