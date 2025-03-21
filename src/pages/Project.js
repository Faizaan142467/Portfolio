import React from "react";
import "./Project.css";

const projects = [
  {
    name: "Weather App",
    link: "https://weather-app.vercel.app",
    description: "A real-time weather forecasting app.",
  },
  {
    name: "Recipe App",
    link: "https://recipe-app.vercel.app",
    description: "Find and save your favorite recipes.",
  },
  {
    name: "Mental Wellness App (On Going)",
    link: "https://mental-wellness.vercel.app",
    description: "Track and improve your mental health.",
  },
];

const Projects = () => {
  return (
    <div className="projects-page">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              {project.name}
            </a>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

