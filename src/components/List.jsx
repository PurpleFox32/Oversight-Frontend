import { React, useState } from 'react';
import data from '../games.json'
import '../stylesheets/List.css'


function List(props) {
 
  return (
    <div className="List">
      <div className="games">
      <ul>
          {data.map((game) => (
            <div key={ game.id } className="games">
              <h4>Image will go here</h4>
              <h2>{game.title} Game Title</h2>
              <p>{game.description} Game Details</p>
              </div>
          ))}
      </ul>
      </div>
      </div>
  )
}

export default List




