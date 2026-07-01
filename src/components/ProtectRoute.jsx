import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectRoute({isLogin}) {
 <h1>Route chal raha hai</h1>
    return isLogin?<Outlet/>:<Navigate to="/login"/>
  
}

export default ProtectRoute