import React from 'react'
import img from '/Images/registerpic.png'
import './register.css'
export default function Register() {
  return (
    <div>register

    
    <div class="sp_body">
              <div className="img">
                  <img src={img} alt="" />
      </div>
              <div class="inputs">
                  <h2>Register now!!</h2>
        
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
  
        <input type="text" placeholder="College/Company Name" class="field" />

        <input type="text" placeholder="City" class="field" />
          
         <input type="text" placeholder="DOB(DD/MM/YYYY)" class="field" />
        
        
          

          < br />

        <input type="button" value="Register now" class="button_sp" />
      </div>










    </div>














    </div>
  )
}
