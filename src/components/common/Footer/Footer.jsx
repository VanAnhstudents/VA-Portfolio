import React from 'react';
import 'Footer.css';
import { personalInfo } from '../../../data/personal';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
          reserved.
        </p>
        <div className="social-links">
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={personalInfo.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
