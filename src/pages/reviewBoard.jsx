import React from 'react'
import NavBar2 from '../components/NavBar2'
<<<<<<< HEAD
import Comment from '../components/comment'
import Search from '../components/search'
import gamesData from '../UTILS/games.json';

=======
import Rating from '../components/Rating'
>>>>>>> main

const ReviewBoard = () => {
  
  return (
  <div>
    <div className="navBar">
      <NavBar2 />
      
    </div>
<<<<<<< HEAD
    <Search />
    <div className="review">
      <Comment />
    </div>

=======
   <div className="form"><Rating />
    </div>
  

    
>>>>>>> main
    </div> 
    
  )
}

export default ReviewBoard
