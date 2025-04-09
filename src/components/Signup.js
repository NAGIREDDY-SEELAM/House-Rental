
import React, { useState } from "react";
import { registerUser } from "../services/firebaseAuth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await registerUser(email, password, name);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <form className="signup-form" onSubmit={handleSignup}>
        <h2 className="form-heading">Create Profile</h2>
        {error && <p className="form-error">{error}</p>}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
          required
        />
        <button type="submit" className="form-button">Sign Up</button>
      </form>

      <style>{`
        .signup-form {
          max-width: 400px;
          margin: 60px auto;
          padding: 30px;
          border: 1px solid #ddd;
          border-radius: 12px;
          background-color: #f9f9f9;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          font-family: 'Segoe UI', sans-serif;
        }

        .form-heading {
          font-size: 24px;
          margin-bottom: 20px;
          text-align: center;
          font-weight: bold;
          color: #2c3e50;
        }

        .form-input {
          width: 100%;
          padding: 10px 14px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 16px;
          outline: none;
          transition: border 0.2s ease-in-out;
        }

        .form-input:focus {
          border-color: #007bff;
        }

        .form-button {
          width: 100%;
          background-color: #007bff;
          color: white;
          padding: 12px;
          font-size: 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out;
        }

        .form-button:hover {
          background-color: #0056b3;
        }

        .form-error {
          color: red;
          margin-bottom: 12px;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Signup;
