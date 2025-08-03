// client/src/components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Please fill in all fields.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/login", { email, password });
      setMessage(response.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="neumorphic neumorphic-card">
    <h2>Login</h2>
    {message && <p className="text-danger">{message}</p>}
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        className="neumorphic neumorphic-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="neumorphic neumorphic-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="neumorphic neumorphic-button">
        Sign In
      </button>
    </form>
  </div>
  );
};

export default LoginForm;
