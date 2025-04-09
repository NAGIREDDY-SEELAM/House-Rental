
// src/components/Login.js
import React from 'react';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (err) {
      console.error('Google sign-in error:', err);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      alert('Login failed!');
      console.error(err);
    }
  };

  // Inline Styles
  const containerStyle = {
    maxWidth: '400px',
    margin: '80px auto',
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif'
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    border: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const emailLoginBtnStyle = {
    ...buttonStyle,
    backgroundColor: '#3b82f6',
    color: 'white',
    marginBottom: '16px'
  };

  const googleLoginBtnStyle = {
    ...buttonStyle,
    backgroundColor: '#ea4335',
    color: 'white'
  };

  const dividerStyle = {
    textAlign: 'center',
    margin: '16px 0',
    color: '#888'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Login</h2>
      <form onSubmit={handleEmailLogin}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          style={inputStyle}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          style={inputStyle}
          required
        />
        <button type="submit" style={emailLoginBtnStyle}>
          Login
        </button>
      </form>

      <div style={dividerStyle}>OR</div>

      <button onClick={handleGoogleLogin} style={googleLoginBtnStyle}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
