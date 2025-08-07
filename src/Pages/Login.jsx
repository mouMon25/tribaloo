import React, { useState } from "react";
import "./Login.css";

const backend_url = "https://tribaloobackend.onrender.com";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Replace your login function with this:
const login = async () => {
  try {
    const response = await fetch('https://tribaloobackend.onrender.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    const data = await response.json();
    if (data.success) {
      localStorage.setItem('auth-token', data.token);
      window.location.replace("/tribaloo/");
    } else {
      alert(data.errors || "Login failed");
    }
  } catch (error) {
    alert("Network error. Please try again.");
  }
};
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
          />
        </div>
        <button onClick={login}>Continue</button>
        <p className="loginsignup-login">
          Don't have an account?{" "}
          <span
            className="here"
            onClick={() => (window.location.href = "/signup")}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Sign up here
          </span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">By continuing, I agree to the terms of use & privacy policy.</label>
        </div>
      </div>
    </div>
  );
};

export default Login;
