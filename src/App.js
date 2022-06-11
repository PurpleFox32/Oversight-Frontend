import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/stylesheets/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Layout from './pages/layout';
import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile';
import ReviewBoard from './pages/reviewBoard';
import SearchResults from './pages/searchresults';

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
            <Route path='/searchResults' element={<SearchResults />} />

            <Route path='/sign-in' element={<Login />} />
            <Route path='/sign-up' element={<Signup />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
export default App;
