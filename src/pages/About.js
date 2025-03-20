import React from "react";
import "./About.css"; // Ensure this file exists
import profile from "../assets/profilephoto.jpeg"; // Use the correct image path

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-image">
          <img src={profile} alt="Faizaan Faruque" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
          Hi, I’m Faizaan Faruque, a passionate web developer, graphic designer, and AI tools expert. Currently pursuing my Bachelor’s in Computer Applications (BCA) at Techno India Kolkata, I’m dedicated to building innovative and efficient solutions using the latest technologies.

With a strong foundation in HTML, CSS, Python, Java, React.js, and AI tools, I enjoy creating dynamic web applications, automating workflows, and designing engaging user experiences.

My goal is to become a highly skilled full-stack developer, leveraging AI and automation to build impactful digital solutions. I am constantly learning, experimenting, and refining my skills to stay ahead in the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;


