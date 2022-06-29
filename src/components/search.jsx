import { React, useState, useEffect } from 'react';
import axios from 'axios';
import '../stylesheets/search.css';

function Search() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/games/list').then((response) => {
      console.log(response);
      setGames(response.data);
    });
  }, []);

  return (
    <div class='searchForm'>
      <form class='d-flex'>
        <input
          class='form-control me-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
        />
        <a href={`/oneGame/${games.GameId}`}>
          <button class='btn btn-outline-info' type='submit'>
            Search
          </button>
        </a>
      </form>
    </div>
  );
}

export default Search;
