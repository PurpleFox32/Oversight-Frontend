import React, { useState } from "react";
import API from '../UTILS/API';
import { useNavigate } from "react-router-dom";
import Navbar from "../component/navbar";


const Login = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: ""
  })


  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value })
  }



  function submitUser(e) {
    e.preventDefault();

    API.getOneByUsername({ username: user.username, password: user.password }).then(res => {
      console.log(res);
      localStorage.setItem("userToken", JSON.stringify(res.data))
      navigate("/profile")
    })



  }
  return (
    <div>
      <Navbar />
      <form onSubmit={submitUser} class="container">
        <h3>Login</h3>
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

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">

              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
