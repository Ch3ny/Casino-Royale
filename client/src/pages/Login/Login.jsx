import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const redirectToSuccessPage = (id) => {
    return navigate(`/Account/${id}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
      redirectToSuccessPage
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>

    
  );
};

export default Login;