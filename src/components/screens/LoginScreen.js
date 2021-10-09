import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LoginScreen.css";


const LoginScreen = ({history})=>{

    return(
        <div className="login-screen"  >
        <form  className="login-screen__form">
          <h3 className="login-screen__title">Login</h3>
         
          <div className="form-group">
            <label htmlFor="email" className="label">Email:</label>
            <input className="email_input"
              type="email"
              required
              id="email"
              placeholder="Email address"
              tabIndex={1}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">
              Password:{" "}
              <Link to="/forgotpassword" className="login-screen__forgotpassword">
                Forgot Password?
              </Link>
            </label>
            <input
              type="password"
              required
              id="password"
              autoComplete="true"
              placeholder="Enter password"
              tabIndex={2}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
  
          <span className="login-screen__subtext">
            Don't have an account? <Link to="/register">Register</Link>
          </span>
        </form>
      </div>
    );
};

export default LoginScreen;