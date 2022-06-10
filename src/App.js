import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/stylesheets/bootstrap.css'
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Layout from './pages/layout';
import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/Profile';
import ReviewBoard from'./pages/reviewBoard';
import Searchresults from './pages/searchresults';

function App() {
  return (
    // <div className="App">
    //   <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    //     <div className="container">
    //       <Link className="navbar-brand" to={'/sign-in'}>
    //         OverSight
    //       </Link>
    //       <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    //         <ul className="navbar-nav ml-auto">
    //           <li className="nav-item">
    //             <Link className="nav-link" to={'/sign-in'}>
    //               Login
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to={'/sign-up'}>
    //               Sign up
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    <div className='auth-wrapper'>
      <div className='auth-inner'>
        <Routes>
          {/* <Route exact path="/" element={<Login />} /> */}
          <Route path='/' element={<Layout />}>
            <Route path='home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/profile' element={<Profile />} />
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
