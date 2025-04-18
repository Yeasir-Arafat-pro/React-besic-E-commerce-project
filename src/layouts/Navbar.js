import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleSignOut = () => {
    // Remove user data from localStorage
    localStorage.removeItem('user');
    navigate('/sign-in');
  };

  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {user ? (
          <>
            <NavLink to="/dashboard/admin/profile">Profile</NavLink>
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        ) : (
          <NavLink to="/sign-in">Sign In</NavLink>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;