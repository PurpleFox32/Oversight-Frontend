import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import API from '../UTILS/API';
import NavBar from '../components/NavBar2';
import axios from 'axios';




const Profile = () => {
  const params = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    let url = 'http://localhost:3001/users/profile/' + params.id;

    axios.get(url).then((response) => {
      console.log(response);
      setUser(response.data);
    })

  }, []
  )


  return (

    <div className='view-user'>
      <NavBar />
      <h1>Welcome  </h1>
      <hr style={{
          color: '#32FBE2',
          height: '4px'
        }}/>
      <h3>Email: </h3>
      <h3>Admin: </h3>
      <h6>User Id: </h6>

    </div>

  )
}

export default Profile
