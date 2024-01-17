import React from "react";
import "../App.css";
import homerobo from "/Images/homerobo.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero_body">
      {/* <!-------------------------- Header Area --------------------------> */}
      <header className="header-area">
        <div className="containerN">
          <div className="header">
            <div className="logo">
              <a href="">
                <h2>ROBOCRAFT</h2>
              </a>
            </div>
            <ul className="navbar">
              <li>
                <a href="#Aboutus">About Us</a>
              </li>
              <li>
                <Link to="login">Login</Link>
              </li>
              <li>
                <a href="#faq">FAQ's</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* <!-------------------------- landing page area --------------------------> */}
      <div className="container">
        <div className="text_hero">
          <div className="text_hero_container">
            <h2 className="">
              DIVE INTO THE WORLD OF <span>ROBOTICS</span>
            </h2>
            <p>Building Bridges with Robotics: Explore, Engineer, Excel!</p>
            <button className="button_cta">
              {" "}
              <Link to="/register">REGISTER NOW</Link>
            </button>
          </div>
        </div>
        <div className="image_div">
          <img className="robo_img" src={homerobo} alt="" />
        </div>
      </div>
    </div>
  );
}
