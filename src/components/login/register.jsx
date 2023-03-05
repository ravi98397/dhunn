import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import loginImg from "./login.svg";

export const Register = (props) => {
    let location = useLocation();
    let navigate = useNavigate(); 
    const handleClose = () => {
    console.log("trying to check navigate methods : ", navigate("/", location.search))
  }
    return (
      <div className="base-container" ref={props.containerRef}>
        <div><button className="form-close-button" onClick={handleClose}>x</button></div>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
}
