import React from 'react'
import NavBar2 from '../components/NavBar2'
import Comment from '../components/comment'
import Search from '../components/NavBar3'


const ReviewBoard = () => {
  
  return (
  <div>
    <div className="navBar">
      <NavBar2 />
      This is the review board
    </div>
    <div className="review">
      <Comment />
    </div>
    </div> 
   
    
  )
}

export default ReviewBoard
