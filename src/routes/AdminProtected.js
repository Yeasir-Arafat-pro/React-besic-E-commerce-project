import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminProtected = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  // Check if the user is logged in and is an admin
  const isLoggedIn = user !== null;
  const isAdmin = user?.isAdmin;

  return isLoggedIn && isAdmin ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default AdminProtected;