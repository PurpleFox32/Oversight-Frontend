import React, { useState } from "react";
import API from '../UTILS/API';
import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";


const Login = () => {
  let navigate = useNavigate();

  const [ user, setUser ] = useState({
    username: "",
    password: "",
    id: ""
  })


function handleChange(event) {
  setUser({ ...user, [event.target.name]: event.target.value })
}



function submitUser(e) {
  e.preventDefault();

  let parsedId = parseInt(user.id)

  API.getOneById(parsedId).then(res => {
    console.log(res)
    navigate("/profile/"+res.data.id)
  })
  
}


  return (
    <form onSubmit={submitUser}>
      <Navbar/>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Username</label>
        <input
          onChange={handleChange}
          name="username"
          type="text"
          className="form-control"
          placeholder="Username"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div className="mb-3">
        <label>Id</label>
        <input
          onChange={handleChange}
          name="id"
          type="text"
          className="form-control"
          placeholder="Enter id"
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
};

export default Login;
