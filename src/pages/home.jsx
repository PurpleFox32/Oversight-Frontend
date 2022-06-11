import React from "react";
import NavBar3 from "../components/NavBar3";
import "./home.css";

const Home = () => {
  return (
    <div>
      <NavBar3 />
      <div class="container">
      <div class="d-flex justify-content-center">
        <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
                <img src='https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/kronos/common/social-share/social-share-image.jpg'/>
            </div>
            <div class="content">
                <h2>Card One</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
            </div>
        </div>
        <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
                <img src='https://library.sportingnews.com/2021-08/fifa-22-release-date_yxgrfxd4qqx71awy9dukkjxyx.jpg'/>
            </div>
            <div class="content">
                <h2>Card Two</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
            </div>
        </div>
        <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
                <img src='https://upload.wikimedia.org/wikipedia/en/a/a1/Mario_Kart_64.jpg'/>
            </div>
            <div class="content">
                <h2>Card Three</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
            </div>
        </div>
    </div>
    </div>
      
      
      </div>
      
      
    
 

  );
};

export default Home;
