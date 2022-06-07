import React, { useState } from "react";
import API from '../UTILS/API';
const Login = () => {
  const [ user, setUser ] = useState({
    email: "",
    password: ""
  })


function handleChange(event) {
  setUser({ ...user, [event.target.name]: event.target.value })
}



function submitUser(e) {
  e.preventDefault();
  API.createUser(user).then(res => {
    console.log(res)
  })
}


  return (
    <form onSubmit={submitUser}>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          onChange={handleChange}
        name="email"
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
        name="password"
          type="password"
          className="form-control"
          onChange={handleChange}
          placeholder="Enter password"
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
        <button type="submit" className="btn">
          {" "}
          {/* btn-primary  */}
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
