import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar2 from './NavBar2';
import API from '../UTILS/API';
import '../stylesheets/bootstrap.css'
import axios from 'axios';

const DisplayGame = () => {
  const params = useParams();
  const [game, setGame] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [posts, setPost] = useState([]);

  useEffect(() => {

    let url = 'http://localhost:3001/games/' + params.id;

    //Get the single game
    function getGame() {
      API.getGame(params.gameId).then((res) => {
        console.log(res.data);
        setGame(res.data);
      });
    }

    /********************** Get posts *****************************/

    // function getPosts() {
    //   API.getPosts(params.gameId).then((res) => {
    //     console.log(res.data);
    //     setPost(res.data);
    //   })
    // }

    //get game that was selected and display all post.
    //user should then be able to add a post(review)

    axios.get(url).then((response) => {
      console.log(response);
      setPost(response.data)
    })

    /**************************************************************/

    getGame();
    // getPosts([]);
  }, [params.gameId, params.id]);

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
    return posts.map((post) => (
      <div key={post.gameId} id='list'>
        <p>{post.post}</p>
      </div>
    ))
  }

  return (
    <div>
      <NavBar2 />
      <img src={game.GameThumbnail} alt='thumbnail' />
      <h1>{game.Name}</h1>
      <div className='postList flex-wrap'>
        {getPosts()}
      </div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder='type a review' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default DisplayGame;
