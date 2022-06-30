import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar2 from './NavBar2';
import API from '../UTILS/API';
import '../stylesheets/bootstrap.css'

const DisplayGame = () => {
  const params = useParams();
  const [game, setGame] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [posts, setPost] = useState([]);

  useEffect(() => {
    function getGame() {
      API.getGame(params.gameId).then((res) => {
        console.log(res.data);
        setGame(res.data);
      });
    }

    function getPosts() {
      API.getPosts(params.gameId).then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
    }

    //get game that was selected and display all post.
    //user should then be able to add a post(review)

    getGame();
    getPosts([]);
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

  function getPosts() {
    return posts.map((posts) => (
      <div key={posts.gameId} id='list'>
        <p>{posts.post}</p>
      </div>
    ))
  }

  return (
    <div>
      <NavBar2 />
      <img src={game.GameThumbnail} alt='thumbnail' />
      <h1>{game.Name}</h1>
      <div className='postList flex-wrap'>
        {posts === null ? <div>Loading</div> : getPosts()}
      </div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder='type a review' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default DisplayGame;
