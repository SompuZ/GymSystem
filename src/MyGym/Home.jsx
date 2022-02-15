 import React from "react";
 import "./gym.css";
 
 class Home extends React.Component {
   render(){
     return <div>
       <nav class="navbar">
        <div class="navbar__container">
            <a href="#home" id="navbar__logo">GYM management</a>
            <div class="navbar__toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>

            </div>
            <ul class="navbar__menu">
                <li class="navbar__item">
                    <a href="/" class="navbar__links" id="home-page">
                        Home
                    </a>
                </li>
                <li class="navbar__item">
                    <a href="/about" class="navbar__links" id="about-page">
                       About
                    </a>
                </li>
                <li class="navbar__item">
                    <a href="services" class="navbar__links" id="services-page">
                        Services
                    </a>
                </li>
                <li class="navbar__btn">
                    <a href="Login" class="button" id="sigup">
                        Log In
                    </a>
                </li>
                <li class="navbar__btn">
                    <a href="sign-up" class="button" id="sigup">
                        sign up
                    </a>
                </li>
            </ul>

        </div>
        
    </nav>




    <div class="container">
    
    <h1>
        join us with
        60% OFF
    </h1>
    <form name="form1" action="bmi.html" onsubmit="validateData()"/>
        <div class="formg-att">
            <input type="text" name="name" placeholder="ENTER NAME"/>
        </div>
        <div class="formg-att">
            <input type="number" name="age" placeholder="Your age"/>
            
        </div>
        <div class="formg-att">
            <input type="number" name="phnumber" placeholder="Ph.no"/> 
        </div>
        <div class="formg-att">
            <select name="gender" id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              
            
            </select>
            <input type="submit" value="Submit"/>
        </div>
      
    
    <div class="calculate"><a href="bmi.html">CALCULATE BMI</a></div>
</div>
     </div>;
   }
 }
  export default Home;