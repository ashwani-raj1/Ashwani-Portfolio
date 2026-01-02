import React from 'react';
import './skills.css';

const Skills = () => {

    const skills = [
    'Html', 'css','JavaScript', 'ReactJs', 'Node.js', 'MongoDB', 'ExpressJs',
    'PostgreSQL',  'Git', 'Git Hub', 'Wordpress', 'Sql', 'Php'
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