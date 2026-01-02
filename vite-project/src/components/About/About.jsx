import React from 'react';
import "./About.css"

const AboutSection = () => {
  return (
    <>
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <span className="section-label">About Me</span>
              <h2 className="about-title">
                I'm a <span className="highlight">Full Stack Developer</span> with Passion for Innovation
              </h2>
              <p className="about-description">
               Motivated and detail-oriented third-year B.Tech Computer Science student at RIT Roorkee, passionate about building 
innovative and efficient solutions using modern technologies.Along with a solid understanding of Data Structures and Algorithms, having solved 200+ coding problems on various 
platforms. I am also gaining hands-on experience with backend technologies like MongoDB, MySQL, Node.js, Express, and 
React for frontend. As a fast learner and effective team player, I am an aspiring software engineer, eager to contribute to impactful, real
world projects.
              </p>

              <div className="about-details">
                <div className="detail-item">
                  <div className="detail-icon"></div>
                  <span>Clean & Modern Code</span>
                </div>
                <div className="detail-item">
                  <div className="detail-icon"></div>
                  <span>Responsive Design</span>
                </div>
                <div className="detail-item">
                  <div className="detail-icon"></div>
                  <span>Fast Performance</span>
                </div>
                <div className="detail-item">
                  <div className="detail-icon"></div>
                  <span>Good Problem Solving Skills</span>
                </div>
              </div>

              <div className="cta-buttons">
                <a href="#projects" className="btn-primary">View My Work</a>
                <a href="#contact" className="btn-secondary">Get In Touch</a>
              </div>
            </div>

            <div className="about-image">
              <div className="image-wrapper">
              
                <div className="floating-card bottom-left">
                  <div className="card-number">5+</div>
                  <div className="card-label">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;