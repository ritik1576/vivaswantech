import React from 'react';
import { FaGlobe, FaUsers, FaLightbulb, FaHandshake, FaBullseye, FaEye, FaCogs, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import '../Styles/Components/about.css';

const About = () => {
  const features = [
    {
      title: "Global Expertise",
      description: "We serve clients across BFSI, utility, and telco industries worldwide, helping them achieve business excellence and discover new prospects.",
      icon: <FaGlobe className="feature-icon" />
    },
    {
      title: "Skilled Team",
      description: "Our brilliant engineering team augments customers to build next-generation products and platforms with 70% guaranteed cost savings.",
      icon: <FaUsers className="feature-icon" />
    },
    {
      title: "Innovation at Core",
      description: "We specialize in cutting-edge technologies including AI/ML, multi-cloud, DevSecOps, and IoT to future-proof your business.",
      icon: <FaLightbulb className="feature-icon" />
    },
    {
      title: "Proven Methodology",
      description: "We adhere to industry best practices and CMMI Level 3 protocols to ensure high-quality digital solutions.",
      icon: <FaCogs className="feature-icon" />
    },
    {
      title: "Results-Driven",
      description: "We hold ourselves accountable for meeting client expectations and delivering substantial business outcomes.",
      icon: <FaChartLine className="feature-icon" />
    },
    {
      title: "Security Focus",
      description: "Our DevSecOps approach ensures security is integrated throughout the development lifecycle.",
      icon: <FaShieldAlt className="feature-icon" />
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header">
          <h2 className="about-title">ABOUT VIVASWAN</h2>
          <h3 className="about-subtitle">Engineering Next-Gen Digital Solutions</h3>
          <p className="about-intro">
            Vivaswan Software Technologies Private Limited is a neo technology firm focused and dedicated to clients 
            seeking help in futurifying their business with Design, Technology and Engineering across all stages 
            of their product life cycle.
          </p>
        </div>

        <div className="mission-vision">
          <div className="mission-card">
            <div className="icon-container">
              <FaBullseye className="mission-icon" />
            </div>
            <div>
              <h4>Our Mission</h4>
              <p>To be the most reliable partner for development of Small and Medium Enterprises by Engineering the Next-Gen products to embrace and accelerate Digital transformation.</p>
            </div>
          </div>
          <div className="vision-card">
            <div className="icon-container">
              <FaEye className="vision-icon" />
            </div>
            <div>
              <h4>Our Vision</h4>
              <p>To elevate businesses by helping them create great and robust modern applications empowering them to digitally transform their business leveraging our proven expertise across Devices, Apps and Analytics while backed by our AI, ML, IoT and Cloud capabilities.</p>
            </div>
          </div>
        </div>

        <div className="why-vivaswan">
          <h3>Why Choose Vivaswan?</h3>
          <div className="reasons">
            <div className="reason-item">
              <div className="reason-icon">✓</div>
              <p>Innovation and excellence at our heart with intense mobile and web application development craft</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">✓</div>
              <p>Most trusted partner for Digital transformation to our global clients to futurify their businesses</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">✓</div>
              <p>Proactive experts who seek to lower operational costs through continuous communication</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">✓</div>
              <p>Full-cycle partner in software development following industry best practices</p>
            </div>
          </div>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-container">
                {feature.icon}
              </div>
              <div className="feature-content">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="enterprise-solutions">
          <h3>Small and Medium Enterprise Solutions</h3>
          <p>
            Drive Increased Competitiveness and Improved User Experience with Tech built for tomorrow. 
            World-class technological expertise and a strong business focus are combined in Vivaswan's 
            Application Development and Modernization Services.
          </p>
          <p>
            For Small and medium enterprise companies, Vivaswan has been a valuable partner, assisting 
            them in achieving business excellence and discovering new prospects. We assist our privileged 
            clients to expedite their IT roadmaps and provide them with a competitive edge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;