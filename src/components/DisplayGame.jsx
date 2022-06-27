import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../UTILS/API';

const DisplayGame = () => {
  const params = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    function getGame() {
      API.getPost(params.gameId).then((res) => {
        console.log(res.data);
        setPost(res.data);
      });
    }

    getGame();
  }, []);

  return <div>Hello</div>;
};

export default DisplayGame;
