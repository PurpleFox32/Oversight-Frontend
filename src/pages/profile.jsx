
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../UTILS/API';
import NavBar2 from '../components/NavBar2'
const Profile = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    API.getOneById(id).then(res => {
      console.log(res);
      setUser(res.data);
      console.log(user)
    })
  }, [])

  
  return (
    
    <div className='view-user'>
      <NavBar2/>
     <h2> Welcome {user.username}  </h2>
    </div>
    
  )
}

export default Profile
