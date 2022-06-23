
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../UTILS/API';
import NavBar from '../components/NavBar2'
import Rating from '../components/Rating'
import profileList from '../components/profileList';




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


      <h1> Welcome Username {user.userName}</h1>
      <br/>
      <h3>Your most current game reviews</h3>
      <hr
      style={{
        color:'#32FBE2',
        height:'4px'
      }}/>

      <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action"> Fifa </a>
          <a href="" class="list-group-item list-group-item-action">Mario</a>
          <a href="#" class="list-group-item list-group-item-action">Call of Duty </a>
</div>
      
    </div>
    
  )
}

export default Profile
