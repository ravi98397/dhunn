import React, { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import loginImg from "./login.svg";
import { useLocation, useNavigate } from 'react-router-dom';
import { getSong } from "../../actions/asyncActions/getActions";

export const Login = (props) => {
    let dispatch = useDispatch();
    let location = useLocation();
    let navigate = useNavigate();   
    const handleClose = () => {
        console.log("trying to check navigate methods : ", navigate("/", location.search))
      }

    const handleLogin = () => {
      dispatch(getSong())
    }

    return (
      <div className="base-container" ref={props.containerRef}>
        <div className="close-div"><button className="form-close-button" onClick={handleClose}>x</button></div>
        <div className="header">Login</div>
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
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
}
