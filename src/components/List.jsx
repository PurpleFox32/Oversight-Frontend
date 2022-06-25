import { React, useState } from 'react';
import data from '../games.json'
import '../stylesheets/List.css'


function List(props) {
 
  return (
    <div className="row">
      <div className="games">
          
          {data.map((game) => (
            <div key={ game.id } className="card">
              <div class="d-flex justify-content-center flex-wrap">
              <div class="card d-flex position-relative flex-column">
              <div class='imgContainer'>
              <img src="https://library.sportingnews.com/2021-08/fifa-22-release-date_yxgrfxd4qqx71awy9dukkjxyx.jpg" class="rounded rounded mx-auto d-block"  width="175px" height="100px" alt="..."></img>
              </div>
              <h2>{game.title} Game Title</h2>
              <p>{game.description} Game Details</p>
              <a class="btn btn-outline-info" href="http://localhost:3000/reviewBoard" tabindex="-1" aria-disabled="true" id="cancel">Leave a Review</a>
              <br/>
              </div>
              </div>
              </div>
          ))}
      </div>
      </div>
  )
}

export default List
