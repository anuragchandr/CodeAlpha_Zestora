import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/signup', formData);
      setMessage(response.data.message);
      // Clear form after successful submission
      setFormData({
        username: '',
        email: '',
        password: ''
      });
    } catch (error) {
      setMessage(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div>
      <div id="signupForm">
        <h3>Sign Up</h3>
        {message && <div className="message">{message}</div>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="newUsername">Username:</label>
          <input type="text" id="newUsername" value={formData.username}
            onChange={handleChange} name="username" required />


          <label htmlFor="newEmail">Email-id</label>
          <input type="email" id="newEmail" value={formData.email}
            onChange={handleChange} name="email" required />


          <label htmlFor="newPassword">Password:</label>
          <input type="password" id="newPassword" value={formData.password}
            onChange={handleChange}
            name="password" required />


          <button type="submit">Sign Up</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: 10 }}>
          Already have an account?
          <Link to="/login" id="signupButton" > Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
