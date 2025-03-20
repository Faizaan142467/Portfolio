import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div style={styles.container}>
      {/* Profile Image */}
      <img 
        src="/profile.jpg" 
        alt="Profile" 
        style={styles.profileImage} 
      />

      {/* Heading */}
      <h2 style={styles.heading}>Contact & Socials</h2>

      {/* Social Icons */}
      <div style={styles.iconsContainer}>
        <a href="https://github.com/Faizaan142467" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaGithub size={40} color="black" />
        </a>
        <a href="https://www.linkedin.com/in/faizaan-faruque-1b8a04246" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaLinkedin size={40} color="#0A66C2" />
        </a>
        <a href="mailto:faruquefaizaan562@gmail.com" style={styles.icon}>
          <FaEnvelope size={40} color="#D44638" />
        </a>
        <a href="https://www.instagram.com/___faixu___" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaInstagram size={40} color="#E4405F" />
        </a>
      </div>
    </div>
  );
};

// Styles for centering and spacing
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  profileImage: {
    width: "200px", // Increased size
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid black",
    marginBottom: "8px",
  },
  heading: {
    fontSize: "28px", // Increased font size
    fontWeight: "bold",
    marginBottom: "20px",
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px", // Increased space between icons
    paddingTop: "10px",
  },
  icon: {
    textDecoration: "none",
    padding: "10px", // Added padding for better spacing
  },
};

export default Contact;

