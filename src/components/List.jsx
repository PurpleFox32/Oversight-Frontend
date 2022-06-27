import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../stylesheets/List.css';
import NavBar from './NavBar2';

function List() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/games/list').then((response) => {
      console.log(response);
      setGames(response.data);
    });
  }, []);

  return (
    <div>
      <NavBar />

      <div className="row">
        <div>
          {games.map((game) => (
            <div key={game.GameId} id='listItem'>
              <img src={game.GameThumbnail} />
              <h1>{game.Name}</h1>
              <h3>{game.Description}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default List;
