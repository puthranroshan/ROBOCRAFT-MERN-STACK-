import React from 'react'
//import loginPage from '.\public\Images\LoginPage.png'
//import loginrobo from 'C:/Users/HP/OneDrive/Desktop/robonew/rlpnew/public/Images/loginrobo.png'
import './signup.css'
import img from '/Images/sign_up_bot.png'
export default function Signup() {
  return (
 
     
    <div class="sp_body">
              <div className="img">
                  <img src={img} alt="" />
      </div>
              <div class="inputs">
                  <h2>Get Started</h2>
        
        <input type="text" placeholder="Full Name" class="name" />
       
        <input
          type="text"
          placeholder="Email"
          class="name"
        />
  
        <input
          type="text"
          placeholder="Phone number"
          class="field"
        />
  
        <input type="text" placeholder="Create password" class="field" />

        <input type="text" placeholder="Confirm password" class="field" />
        <br />
        <input type="button" value="Sign Up" class="button_sp" />
      </div>










    </div>
  )
}
