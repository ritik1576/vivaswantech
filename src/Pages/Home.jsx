import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Services from '../Components/Services';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;