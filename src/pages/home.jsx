import React from "react";
import NavBar3 from "../components/NavBar3";
import Search from "../components/search";
import "../stylesheets/home.css";

const Home = () => {
    return (
        <div>
           <NavBar3 />
         
            
            <div class="container">
            
                <div class="d-flex justify-content-center">
                    <div class="card d-flex position-relative flex-column">
                        <div class='imgContainer'>
                            <img src='https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/kronos/common/social-share/social-share-image.jpg' alt=''/>
                        </div>
                        <div class="content">
                            <h2 class='text-primary'>Call of Duty: Modern Warfare</h2>
                            <p class='text-info'>Call of Duty: Modern Warfare is a first-person shooter video game developed by Infinity Ward for the Xbox One, PlayStation 4 and Windows. It is a reboot of the original Modern Warfare trilogy. Part of the Modern Warfare series, Call of Duty: Modern Warfare is the sixteenth game in the Call of Duty franchise.</p>
                        </div>
                    </div>
                    <div class="card d-flex position-relative flex-column">
                        <div class='imgContainer'>
                            <img src='https://library.sportingnews.com/2021-08/fifa-22-release-date_yxgrfxd4qqx71awy9dukkjxyx.jpg' alt=''/>
                        </div>
                        <div class="content">
                        <h2 class='text-primary'>FIFA22</h2>
                            <p class='text-info'>FIFA 22 is a football simulation video game published by Electronic Arts. It is the 29th installment in the FIFA series, and was released worldwide on 1 October 2021 for Microsoft Windows, Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One and Xbox Series X/S.</p>
                        </div>
                    </div>
                    <div class="card d-flex position-relative flex-column">
                        <div class='imgContainer'>
                            <img src='https://upload.wikimedia.org/wikipedia/en/a/a1/Mario_Kart_64.jpg' alt=''/>
                        </div>
                        <div class="content">
                        <h2 class='text-primary'>Mario Cart 64</h2>
                            <p class='text-info'>Mario Kart 64 is a kart racing game in which the player controls one of eight selectable Mario characters in several race tracks that vary in shape and theme.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>





    );
};

export default Home;
