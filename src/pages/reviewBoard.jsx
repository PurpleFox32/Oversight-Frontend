import React from 'react'
import NavBar2 from '../components/NavBar2'
import Comment from '../components/comment'


const ReviewBoard = () => {
  return (
  <div>
    <div className="navBar">
      <NavBar2 />
      This is the review boar
    </div>
    <div className="review">
      <Comment />
    </div>
    </div> 
   
    
  )
}

export default ReviewBoard
