import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-info">
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:ashwaniraj084@gmail.com">ashwaniraj084@gmail.com</a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/ashwani-raj-57480028a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/ashwani-raj
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{' '}
          <a href="tel:+919798018523">+91 97980 18523</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
