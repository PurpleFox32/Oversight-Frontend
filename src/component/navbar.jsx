import React from "react";



function Navbar() {
  return (
    <nav>
      <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="http://localhost:3000/">OverSight</a>
      <a class="btn btn-outline-primary" href="http://localhost:3000/sign-in" role="button"> Login</a>
      <a class="btn btn-outline-secondary" href="http://localhost:3000/sign-up" role="button">SignUp</a>
      <a class="btn btn-outline-primary" href="http://localhost:3000/about" role="button">About</a>
      <a class="btn btn-outline-secondary" href="http://localhost:3000/home" role="button">Home</a>
      <a class="btn btn-outline-info" href="http://localhost:3000/profile" role="button">Profile</a>
      <a class="btn btn-outline-info" href="http://localhost:3000/reviewBoard" role="button">Review</a>
      <a class="btn btn-outline-info" href="http://localhost:3000/searchResults" role="button">Search</a>
      
</nav>
    
    </nav>
  );
}

export default Navbar;