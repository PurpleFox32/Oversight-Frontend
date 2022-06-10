import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/stylesheets/bootstrap.css'
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import ReviewBoard from'./pages/ReviewBoard';
import Searchresults from './pages/SearchResults';

function App() {
  return (
    
    <div className='auth-wrapper'>
      <div className='auth-inner'>
        <Routes>
          {/* <Route exact path="/" element={<Login />} /> */}
          <Route path='/' element={<Layout />}>
            <Route path='home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/profile/:id' element={<Profile />} />
            <Route path='/reviewBoard' element={<ReviewBoard />} />
            <Route path='/searchResults' element={<Searchresults />} />

            <Route path='/sign-in' element={<Login />} />
            <Route path='/sign-up' element={<Signup />} />
          </Route>
        </Routes>
      </div>
    </div>
    //     </div>

    // )
  );
}
export default App;
