import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar2 from './Games-Page-Nav';
import API from '../UTILS/API';
import '../stylesheets/bootstrap.css'
import '../stylesheets/review.css'

const DisplayGame = () => {
  const params = useParams();
  const [game, setGame] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [posts, setPost] = useState([]);

  useEffect(() => {

    //Get the single game
    function getGame() {
      API.getGame(params.gameId).then((response) => {
        console.log(response.data);
        setGame(response.data);
      });
    }

    //Get Posts by GameId
    function getPosts() {
      API.getPosts(params.gameId).then((res) => {
        console.log(res.data.Posts);
        setPost(res.data.Posts);
      })
    }

    getGame();
    getPosts();
  }, [params.gameId]);

  const handleChange = (e) => {
    setNewPost(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    API.createPost2(game.GameId, newPost).then((response) => {
      console.log(response);
    });
  };

  //Reload Page
  function refreshPage() {
    window.location.reload(true);
  }

  return (

  <div>
    <NavBar2 />
  
    <div>
      <div class="gamelogo">
      <h1 class="text-primary" >{game.Name}</h1>
      <img src={game.GameThumbnail} alt=''/>
      </div>
      
      <div className='postList flex-wrap'>
        {posts.map((post) => (
      <div key={post.gameId} id='list'>
        <p>{post.post}</p>
        {/* <button type='submit' onClick={deletePost} >Delete</button> */}
      </div>
    ))}
      </div>
      
      <form onSubmit={handleSubmit} id='name'>
        <textarea onChange={handleChange} placeholder='type a review' /><br />
        <button class='btn btn-outline-primary btn' type='submit' onClick={refreshPage} >Submit</button>
      </form>
    </div>
    </div>
    
  );
};

export default DisplayGame;
