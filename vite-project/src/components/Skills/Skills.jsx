import React from 'react';
import './skills.css';

const Skills = () => {

    const skills = [
    'JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 
    'PostgreSQL', 'Html', 'Css', 'Git', 'Wordpress', 'Sql'
  ];
  return (
    <section id="skills" className="skills">
          <div className="skills-section">
            <h3 className="skills-title">Technologies I Work With</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
    </section>
  );
};

export default Skills;