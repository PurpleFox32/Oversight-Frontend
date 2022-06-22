
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../UTILS/API';
import NavBar from '../components/NavBar2'
import Rating from '../components/Rating'

const Profile = () => {
  const [user, setUser] = useState({});
   const { id } = useParams();

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
  
  return (
    
    <div className='view-user'>
      <NavBar/>
      <Rating />
      <h1>{user.email}</h1>
    </div>
    
  )
}

export default Profile
