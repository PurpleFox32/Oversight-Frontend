import React from "react";



function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">OverSight</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="btn btn-outline-primary" aria-current="page" href="http://localhost:3000/about">About</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-outline-secondary" href="http://localhost:3000/reviewBoard">Reviews</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-outline-info" href="http://localhost:3000/sign-in" tabindex="-1" aria-disabled="true">Sign In</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-outline-info" href="http://localhost:3000/sign-up" tabindex="-1" aria-disabled="true">Sign Up</a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
    
    );
}

export default Navbar;



// function Navbar() {
//   return (
//     <nav>
//       <nav class="navbar navbar-dark bg-dark">
//       <a class="navbar-brand" href="http://localhost:3000/">OverSight</a>
//       <a class="btn btn-outline-primary" href="http://localhost:3000/sign-in" role="button"> Login</a>
//       <a class="btn btn-outline-secondary" href="http://localhost:3000/sign-up" role="button">SignUp</a>
//       <a class="btn btn-outline-primary" href="http://localhost:3000/about" role="button">About</a>
//       <a class="btn btn-outline-secondary" href="http://localhost:3000/home" role="button">Home</a>
//       <a class="btn btn-outline-info" href="http://localhost:3000/profile" role="button">Profile</a>
//       <a class="btn btn-outline-info" href="http://localhost:3000/reviewBoard" role="button">Review</a>
//       <a class="btn btn-outline-info" href="http://localhost:3000/searchResults" role="button">Search</a>
      
// </nav>
    
//     </nav>
//   );
// }

