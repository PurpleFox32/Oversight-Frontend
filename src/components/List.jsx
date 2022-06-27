import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../stylesheets/List.css';
import NavBar from './NavBar2';
import { Link } from 'react-router-dom';


function List() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/games/list').then((response) => {
      console.log(response);
      setGames(response.data);
    });
  }, []);

  function getGames() {
    return games.map((game) => (
      <div key={game.GameId} id='listItem'>
        <img src={game.GameThumbnail} />
        <h1>{game.Name}</h1>
        <h3>{game.Description}</h3>
        <Link to={`/oneGame/${game.GameId}`}>view</Link>
      </div>
    ));
  }

  return (
    <div>
      <NavBar />
      <div className='row'>
        <div className='gameList'>
          {games === null ? <div>loading</div> : getGames()}

      {/* <div className="row">
        <div>
          {games.map((game) => (
            <div key={game.GameId} id='listItem'>
              <img src={game.GameThumbnail} />
              <h1>{game.Name}</h1>
              <h3>{game.Description}</h3>
            </div> 
          ))} */}

        </div>
      </div>
    </div>
  );
}

export default List;
