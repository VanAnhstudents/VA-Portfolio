import React from 'react';
import { personalInfo } from '../../../data/personal';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>{personalInfo.name}</h2>
        </div>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skill</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <a href="#">Resume</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
