import React from "react";
<<<<<<< HEAD
import { useState } from "react";
import './search.css';
import gamesData from '../UTILS/games.json';

=======
import '../stylesheets/search.css'
>>>>>>> main

function Search() {
const [searchTerm, setSearchTerm] = useState('');
    return (
      <div class="searchForm">
        <form class="d-flex">
            
          <input class="form-control me-2" type="text" placeholder="Search" onChange={event => {setSearchTerm(event.target.value)}} aria-label="Search"/>

          <button class="btn btn-outline-info" type="submit">Search</button>
        </form>
        <div className="searchOutPut">
        {gamesData.filter((val)=> {
            if (searchTerm == '') {
              return val 
            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
          }).map((val, key) => {
            return <div> <p>{val.title}</p></div>
          })}
          </div>
      </div>
    )
}

export default Search;