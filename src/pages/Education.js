import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="section-title">Education & Skills</h2>
      <div className="education-grid">
        
        {/* Education Card */}
        <div className="education-card">
          <h3>Education</h3>
          <ul>
            <li><strong>Class 10th:</strong> 85% (Young Horizons School)</li>
            <li><strong>Class 12th:</strong> 80% (Young Horizons School)</li>
            <li><strong>BCA:</strong> Techno India Kolkata (Ongoing)</li>
          </ul>
        </div>

        {/* Qualifications Card */}
        <div className="education-card">
          <h3>Qualifications</h3>
          <ul>
            <li><strong>MERN stack</strong> (EUPHORIA GENX) </li>
          </ul>
        </div>

        {/* Skills Card */}
        <div className="education-card">
          <h3>Skills</h3>
          <ul>
            <li>Web Development</li>
            <li>Graphic Designing</li>
            <li>AI Tools</li>
          </ul>
        </div>

        {/* Expertise Card */}
        <div className="education-card">
          <h3>Expertise</h3>
          <ul>
            <li>HTML,CSS</li>
            <li>Java Script</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Education;
