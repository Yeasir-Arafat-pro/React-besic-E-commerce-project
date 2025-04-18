import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
   

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Check if the user is already signed in
  
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  if (user) {  
    return <Navigate to="/dashboard/admin/profile" />;
  }
 

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock authentication
    if (email === 'admin@gmail.com' && password === '123') {
      const user = {
        name: 'Admin User',
        email: email,
        city: 'Gazza',
        country: 'Palestine',
        isAdmin: true,
      };

      // Save user data to localStorage
      localStorage.setItem('user', JSON.stringify(user));

      navigate('/dashboard/admin/profile');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="signIn">
      <h1>User Sign In</h1>
      <form className="signForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <input type="text" placeholder="Email" name="email" onChange={handleEmail} />
        </div>
        <div className="formGroup">
          <input type="password" placeholder="Password" name="password" onChange={handlePassword} />
        </div>
        <button type="submit" >Sign In</button>
        <p>
          Don't have an account? <a href="/sign-up">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;