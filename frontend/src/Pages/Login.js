import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="youremail@example.com"
            id="email"
            name="email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="*********"
            id="password"
            name="password"
            required
          />
          <button>Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>
          Don't have an account? Register here.
        </button>
      </>
    </div>
  );
}

export default Login;
