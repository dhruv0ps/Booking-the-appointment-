import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
const PrivateRoute = () => {

    let auth = localStorage.getItem("token")
    
  return (
    <>
     {auth  ? <Outlet/> : <Navigate to="/"/>

}
    </>
   
  
  )
}

export default PrivateRoute
