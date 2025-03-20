import React from "react";
import "./Home.css"; // Ensure you create and use this file
import profile from "../assets/profilephoto.jpeg"; // Ensure this path is correct
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>
          Hi, I’m <span className="gradient-text">Faizaan Faruque</span>
        </h1>
        <p className="subtext">
          Web Developer | Graphic Designer | AI Tools Expert
        </p>
        <Link to="/contact" className="contact-btn">  {/* Fixed Link */}
          Contact Me
        </Link>
      </div>
      <div className="home-image">
        <img src={profile} alt="Faizaan Faruque" />
      </div>
    </div>
  );
};

export default Home;
