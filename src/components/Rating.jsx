import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../UTILS/API';
import "../stylesheets/Rating.css";
//import "../games.json"


const Rating = () => {
  const [body, setBody] = useState("");
  const [user, setUser] = useState({});
  const { id } = useParams();

  console.log(setBody.data);

  useEffect(() => {
    // API.getOneById(id).then(res => {
    //   console.log(res);
    //   setUser(res.data);
    //   console.log(user)
    // })

    let userToken = JSON.parse(localStorage.getItem("userToken"));

    function fetch() {
      console.log(userToken)
      API.getUserData(userToken).then(response => {
        console.log(response)
        setUser(response.data)
      })
    }

    fetch();
  }, []
  
  )
 

  function submitReview(e) {
    e.preventDefault();
    console.log(body);
    let userToken = JSON.parse(localStorage.getItem("userToken"));

    API.createPost({body}, userToken).then(res => {
      console.log(res)
    }).then(()=>{
      alert("succeful")
    })
  }

  return (
    <div>
    <div class="game-info">
      <div>
      <div class="card mb-3">
  <div class="row g-6">
    <div class="col-md-4">
      <img
        src="https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/kronos/common/social-share/social-share-image.jpg"
        alt=""
        class="img-fluid rounded"
      />
    </div>
    <div class="col-md-5">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">
        Call of Duty is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II. Over time, 
        the series has seen games set in the midst of the Cold War, futuristic worlds, and outer space. 
        </p>
      </div>

    </div>
  </div>
  </div>
</div>
    


  </div>

    <div className="create">
      <form>
        <label>Review</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button onClick={submitReview}>Add Review</button>
        

        
      </form>
    </div>
    </div>
    
   
  );
};

export default Rating;
