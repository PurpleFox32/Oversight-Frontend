import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import '../src/stylesheets/bootstrap.css';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Login from './components/login';
=======
import '../src/stylesheets/bootstrap.css'
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
>>>>>>> 85a16e321dfc32f86eef6492fab2641866ee17c8
import Signup from './components/signup';
import Layout from './pages/layout';
import Home from './pages/home';
import About from './pages/about';
<<<<<<< HEAD
import Profile from './pages/profile';
import ReviewBoard from './pages/reviewBoard';
=======
import Profile from './pages/Profile';
import ReviewBoard from'./pages/reviewBoard';
>>>>>>> 85a16e321dfc32f86eef6492fab2641866ee17c8
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

<<<<<<< HEAD
            <Route path='/sign-in' element={<Login />} />
            <Route path='/sign-up' element={<Signup />} />
          </Route>
        </Routes>
      </div>
    </div>
    //     </div>
=======
    
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
        <div className="auth-wrapper">
          <div className="auth-inner">
            
            <Routes>
              {/* <Route exact path="/" element={<Login />} /> */}
            <Route  path="/" element={<Layout />}>
           <Route path="home" element={<Home/>} />
          <Route path="/about" element={<About />} />
           <Route path="/profile/:id" element={<Profile/>} />
           <Route path="/reviewBoard" element={<ReviewBoard/>} />
           <Route path="/searchResults" element={<Searchresults/>} />
>>>>>>> 85a16e321dfc32f86eef6492fab2641866ee17c8

    // )
  );
}
export default App;
