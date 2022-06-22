import React from "react";
import '../stylesheets/search.css'

function Search() {

    return (
      <div class="searchForm">
        <form class="d-flex">
            
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                
            <button class="btn btn-outline-info" type="submit">Search</button>
          </form>
        </div>

    )
}

export default Search;