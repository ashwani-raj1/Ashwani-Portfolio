import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Netra 2.0',
      description:
        'AI-powered smart traffic system using YOLOv8, Flask, and dynamic dashboards.',
    },
    {
      title: 'Pixel Vault',
      description:
        'Python-based image archive with automatic tagging and AI-assisted search.',
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div className="project-item" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
