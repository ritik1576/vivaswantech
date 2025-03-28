import React from 'react';
import Button from './Common/Button';
import '../Styles/Components/hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Top-notch Digital Products</h1>
        <h2>Creating with a Digital Perspective!</h2>
        <p className="hero-description">
          Small and medium enterprises, time to think BIG to futurify your business!
          For enormous returns, let's use digital innovation!
        </p>
        <div className="hero-buttons">
          <Button text="Our Services" link="#services" />
          <Button text="Contact Us" link="#contact" variant="outline" />
        </div>
      </div>
    </section>
  );
};

export default Hero;