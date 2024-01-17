import React from 'react'
import './Footer.css'
import facebook from '/Images/facebook1.png'
import linkedin from '/Images/linkedin1.png'
import twitter from '/Images/twitter1.png'
import { Link } from "react-router-dom";
export default function Footer() {
  return (
      <div className='wrapper' id = "fimp">
      <div class="foot_contain"> 
    <div class="robo_addr">
       <div><h2>ROBOCRAFT</h2></div>
       <div><p>Anmaya EdTech Pvt limited.9, V4-CENTRAL SQURE, KUKKIKATTE, NH 17 EAST ROAD B1, BADAGABETTU,UDUPI, 576257</p></div>
       <div class="social_media">
        <div class='item'> <a href="#"></a><img src={facebook} alt="" /></div>
        <div class='item'> <a href="#"></a><img src={linkedin} alt="" /></div>
        <div class='item'> <a href="#"></a><img src={twitter} alt="" /></div>
       </div>
    </div>

    <div class="links">
        <div class='link_head'>Quick Links</div>
        <div><hr className='line'/></div>
        <div className='quick'><a href="">Home</a></div>
        <div className='quick'><a href="">About Us</a></div>
        <div className='quick'><a href="">FAQ's</a></div>
        <div className='quick'><Link to='/contact'>Contact Us</Link></div>
    </div>

    <div className='location'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73925.2569020685!2d77.57400098243431!3d13.14866232578789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae21d7a91cc5e1%3A0xffb4274f03c2f114!2sAngsana%20Oasis%20Spa%20And%20Resort!5e0!3m2!1sen!2sin!4v1690285180397!5m2!1sen!2sin" 
        width="250" 
        height="250" 
        style={{ border: "5px" }} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
    </div>
    <div className='cpyright'> <p >© 2023 RoboCraft. All rights reserved.</p></div>
    </div>
  )
}
