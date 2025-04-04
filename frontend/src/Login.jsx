
import React, { useState } from "react";

const Login = ({ isLogin, toggleForm, onLogin }) => {
const[email, setEmail] = useState('')
const[password, setPassword] = useState('')

function handleSubmit(event) {
    event.preventDefault();
    if (email && password) {
      onLogin(); // Notify App.jsx to show the main site
    } else {
      alert("Please fill in both email and password");
    }
  }

  return (
    <div>
        <h1 className="text-center mt-5 fw-bold p-2">Welcome to ASHA AI</h1>
        <p className="lead text-center">Your AI-powered career assistant for women</p>

    <div className="d-flex justify-content-center align-items-top mt-5 pt-5">
      <div className="card p-4  shadow-lg border-primary rounded-4" style={{ width: "400px" }}>
        <h3 className="text-center text-primary">{isLogin ? "Login" : "Sign Up"}</h3>

    
        <form  onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control border-primary" placeholder="Enter Email" autoComplete="username"
            onChange={(e)=> setEmail(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
            type="password"
            className="form-control border-primary" 
            placeholder="Enter Password"
            autoComplete={isLogin ? "current-password" : "new-password"}
             onChange={(e)=> setPassword(e.target.value)}/>
          </div>

          {!isLogin && (
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input type="password" className="form-control border-primary" placeholder="Confirm Password" autoComplete="new-password" />
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100">{isLogin ? "Login" : "Sign Up"}</button>
        </form>

        <p className="text-center mt-3">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span className="text-primary" style={{ cursor: "pointer" }} onClick={toggleForm}>
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
        
      </div>
    </div>
    </div>
  );
};

export default Login;
