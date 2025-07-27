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
               I’m Ashwani Raj, a dedicated and enthusiastic student currently pursuing my B.Tech from Roorkee Institute of Technology currently in 3rd Year. With a strong foundation in computer science and a constant desire to learn, I enjoy exploring new concepts and turning ideas into reality. I believe in consistent growth, curiosity-driven learning, and making the most out of every opportunity.
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
                  <span>User Experience Focus</span>
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