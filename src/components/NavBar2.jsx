import React from "react"



function NavBar2 () {
    
    return (
<nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="http://localhost:3000/home">OverSight</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="btn btn-outline-primary" aria-current="page" href="http://localhost:3000/about">About</a>
        </li>
        <li class="nav-item">
          <a class="btn btn-outline-secondary" href="http://localhost:3000/reviewBoard">Reviews</a>
        </li>
        <li class="nav-item">
          <a class="btn btn-outline-info" href="http://localhost:3000/home" tabindex="-1" aria-disabled="true">Logout</a>
        </li>
      </ul>
      
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            </input>
        <button class="btn btn-outline-info" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

);}

export default NavBar2