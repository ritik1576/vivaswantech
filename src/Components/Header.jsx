// Header.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Styles/Components/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">Vivaswan</div>
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="/" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;