import {Navigate,Outlet} from 'react-router-dom'

import {useSelector} from 'react-redux'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import React from 'react'


const PrivateRoute = () => {
    const {adminInfo}=useSelector((state)=>state.admin)

    return adminInfo ?  <Outlet/> : <Navigate to='/login' replace/>
    
}

export default PrivateRoute
