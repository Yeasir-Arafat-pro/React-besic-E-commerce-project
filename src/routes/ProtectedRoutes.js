import React from 'react'
import { Outlet } from 'react-router-dom'
import SignIn from '../pages/SignIn'

const ProtectedRoutes = () => {

    const isLoggedIn = false

    return isLoggedIn ? <Outlet/> : <SignIn/>

}

export default ProtectedRoutes