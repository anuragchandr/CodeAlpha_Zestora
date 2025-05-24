import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../../context/AuthContext'; // Import your login function from the API module
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:5000/api/login', {
      username,
      password
    });

    const token = res.data.token;

    localStorage.setItem('token', token);   // ✅ Save token
    localStorage.setItem('username', username);
    window.location.href = "/feed";         // ✅ Redirect to home
  } catch (err) {
    setError('Invalid username or password'); // ✅ Show error
    alert('Invalid username or password'); // Alert user	
  }
};



  return (
    <div>
      <div id="loginForm">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: 10 }}>
          Don't have an account?
          <Link to="/signup" id="loginButton" > Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
