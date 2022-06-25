import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/stylesheets/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile';
import SearchResults from './pages/searchresults';
import { Outlet } from 'react-router-dom';
import ReviewBoard from './pages/reviewBoard';
import CurrentReview from './pages/CurrentReview';


function App() {
  return (
    <div className='auth-wrapper'>
      <div className='auth-inner'>
        <Outlet />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/home' element={<Home />} About />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/searchResults' element={<SearchResults />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/reviewBoard' element={<ReviewBoard/>}/>
          <Route path='/CurrentReview' element={<CurrentReview/>}/>
        </Routes>
      </div>
    </div>
  );
}
export default App;
