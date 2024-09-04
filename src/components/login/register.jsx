import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { registerUser } from "../../Requests/user-requests";
import loginImg from "./login.svg";

export const Register = (props) => {
  let location = useLocation();
  let navigate = useNavigate(); 

  const [formdata, setFromdata] = useState({
    username: "",
    fname: "",
    lname: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    password: ""
  })

  const handleClose = () => {
    console.log("trying to check navigate methods : ", navigate("/", location.search))
  }

  const register = () => {
    registerUser(formdata);
  }

  const handleChange = (event) => {
    console.log("handling change :",event);

    setFromdata({
      ...formdata,
      [event.target.name] : event.target.value,
    })
  }
  return (
    <div className="base-container" ref={props.containerRef}>
      <div><button className="form-close-button" onClick={handleClose}>x</button></div>
      <div className="header">Register</div>
      <form className="content" >
        <div className="image">
          <img src={loginImg} alt="login-img"/>
        </div>
        <div className="form"> 
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username" 
              value={formdata.username} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="username">First Name</label>
            <input type="text" name="fname" placeholder="firstName" value={formdata.fname} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="username">Last Name</label>
            <input type="text" name="lname" placeholder="lastName" value={formdata.lname} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="username">Gender</label>
            <input type="text" name="gender" placeholder="gender" value={formdata.gender} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="username">Date Of Birth</label>
            <input type="date" name="dob" placeholder="dob" value={formdata.dob} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="email" value={formdata.email} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" value={formdata.password} onChange={handleChange}/>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={register}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
