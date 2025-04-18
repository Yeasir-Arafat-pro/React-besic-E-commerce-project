import React from 'react';

const AdminProfile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="userProfile">
      {user ? (
        <>
          <h1>User Profile</h1>
          <p>
            <span>Name: </span> {user.name}
          </p>
          <p>
            <span>Email: </span> {user.email}
          </p>
          <p>
            <span>City: </span> {user.city}
          </p>
          <p>
            <span>Country: </span> {user.country}
          </p>
        </>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default AdminProfile;