import React from "react";
import "./aboutus.css";
import Aboutuspic from "/Images/abt_img.png";
export default function Aboutus() {
  return (
    <div class="about_us" id="Aboutus">
      <h2>ABOUT US</h2>
      <div className="abt_cnt">
        <div class="ab_img">
          <img src={Aboutuspic} alt="" />
        </div>

        <div class="ab_content">
          <p>
            We are passionate about igniting curiosity and fostering innovation
            through the exciting world of robotics. Our workshop brings together
            individuals of all ages who share a common interest in exploring the
            boundless possibilities of robotics technology. Whether you're a
            beginner or an advanced enthusiast, our workshop offers a
            comprehensive curriculum tailored to cater to your specific needs
            and interests.
          </p>
        </div>
      </div>
    </div>
  );
}
