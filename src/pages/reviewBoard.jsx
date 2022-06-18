import React from 'react'
import NavBar2 from '../components/NavBar2'
import Comment from '../components/comment'
import Search from '../components/search'
import gamesData from '../UTILS/games.json';


const ReviewBoard = () => {
  
  return (
  <div>
    <div className="navBar">
      <NavBar2 />
      This is the review board
    </div>
    <Search />
    <div className="review">
      <Comment />
    </div>

    </div> 
    
  )
}

export default ReviewBoard
