import React from 'react';
import { 
  FaCode, 
  FaMobileAlt, 
  FaCloud, 
  FaPalette, 
  FaUsers, 
  FaBug,
  FaDatabase,
  FaShieldAlt,
  FaCogs,
  FaProjectDiagram,
  FaRobot
} from 'react-icons/fa';
import '../Styles/Components/services.css';

const Services = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "We design and develop tailored solutions to achieve highest business outcomes within your existing technology ecosystem. Our distinct approach includes an exemplary blend of new technologies and industry-leading practices.",
      icon: <FaCode className="service-icon" />,
      offerings: [
        "Legacy system modernization",
        "Process automation and product scaling",
        "Enterprise software solutions",
        "Real-time analytics and agile innovation",
        "End-to-end software product development"
      ]
    },
    {
      title: "Mobile Application Development",
      description: "Our group of highly skilled IT professionals delivers flawless apps designed with user experience, optimal performance, and scalability in mind.",
      icon: <FaMobileAlt className="service-icon" />,
      offerings: [
        "iOS development with UX-focused design",
        "High-performance Android applications",
        "Cross-platform app development",
        "Progressive Web Apps (PWAs)",
        "App maintenance and support"
      ]
    },
    {
      title: "Web Development",
      description: "We create scalable, reliable web applications using modern frameworks to support your business goals and enable maximum growth.",
      icon: <FaCogs className="service-icon" />,
      offerings: [
        "Custom web application development",
        "E-commerce solutions",
        "SaaS application development",
        "Node.js backend services",
        "Web app modernization"
      ]
    },
    {
      title: "Cloud Application Development",
      description: "Businesses can create apps optimized for cloud platforms like Microsoft Azure or Amazon Web Services with our cloud application development service.",
      icon: <FaCloud className="service-icon" />,
      offerings: [
        "Cloud-native application development",
        "Cloud-to-cloud migration",
        "SaaS implementation",
        "Multi-cloud solutions",
        "Managed cloud services"
      ]
    },
    {
      title: "UI/UX Design & Development",
      description: "Our service assists companies in developing software that is aesthetically pleasing, intuitive, and easy to use, tailored to their individual needs.",
      icon: <FaPalette className="service-icon" />,
      offerings: [
        "User research and analysis",
        "Interactive prototyping",
        "Information architecture",
        "Usability testing",
        "Design system development"
      ]
    },
    {
      title: "IT Staffing Solutions",
      description: "Your premier partner for finding top IT talent with our extensive network of skilled professionals including developers, engineers, and specialists.",
      icon: <FaUsers className="service-icon" />,
      offerings: [
        "Permanent staffing solutions",
        "Contract staffing for projects",
        "Temporary staffing needs",
        "Technical recruitment process",
        "Team augmentation"
      ]
    },
    {
      title: "QA & Testing Services",
      description: "Our specialized quality analysis and testing teams ensure your products meet and surpass necessary market regulations and standards.",
      icon: <FaBug className="service-icon" />,
      offerings: [
        "Test automation",
        "Performance testing",
        "Security testing",
        "Compliance testing",
        "Continuous testing integration"
      ]
    },
    {
      title: "Data Analytics Consulting",
      description: "We offer expert insights and solutions to help businesses make data-driven decisions through tailored analytics services.",
      icon: <FaDatabase className="service-icon" />,
      offerings: [
        "Data visualization",
        "Predictive modeling",
        "Data mining",
        "Business intelligence",
        "Data strategy consulting"
      ]
    },
    {
      title: "DevOps & Automation",
      description: "We implement cutting-edge DevOps practices and automation solutions to streamline your development lifecycle and improve deployment frequency.",
      icon: <FaRobot className="service-icon" />,
      offerings: [
        "CI/CD pipeline implementation",
        "Infrastructure as Code (IaC)",
        "Containerization & Orchestration",
        "Monitoring & Logging solutions",
        "DevSecOps integration"
      ]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">OUR SERVICES</h2>
        <h3 className="section-subtitle">World-Class Digital Transformation Solutions</h3>
        <p className="services-intro">
          Vivaswan combines world-class technological expertise with strong business focus to deliver 
          comprehensive digital solutions that drive growth and innovation.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h4>{service.title}</h4>
              </div>
              <div className="card-content">
                <p className="service-description">{service.description}</p>
                <div className="offerings-section">
                  <h5>Key Offerings:</h5>
                  <ul>
                    {service.offerings.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="service-cta">
          <h3>Ready to Transform Your Business?</h3>
          <p>
            Our consistent, clearly defined methodology and open process make us the ideal choice 
            for your custom software development project. We position ourselves as proactive experts 
            who seek to lower operational costs through continuous communication.
          </p>
          <button className="cta-button">Get a Free Consultation</button>
        </div>
      </div>
    </section>
  );
};

export default Services;