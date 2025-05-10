import React from 'react';
import '../css/Services.css';
import '../css/SharedStyles.css';
import blendImage from '../../assets/images/blend.png';

const Services = () => {
  return (
    <div className="page-container services-container">
      <div className="page-header">
        <div className="header-content">
          <div className="header-text">
            <span className="company-text">Company</span>
            <span className="arrow">▶</span>
            <span className="page-text">Our Services</span>
          </div>
        </div>
      </div>

      <div className="page-content">
        <h1 className="page-title">Our Services</h1>
        
        <div className="services-grid">
          <div className="services-image">
            <img src={blendImage} alt="Our Strategy" />
          </div>

          <div className="services-descriptions">
            <div className="services-card">
              <h2>Digital Transformation</h2>
              <p>We help businesses navigate their digital transformation journey with innovative solutions and cutting-edge technologies.</p>
            </div>

            <div className="services-card">
              <h2>Customer-Centric Approach</h2>
              <p>Our strategy revolves around understanding and meeting our clients' unique needs, ensuring solutions that drive real business value.</p>
            </div>

            <div className="services-card">
              <h2>Sustainable Growth</h2>
              <p>We focus on creating sustainable, long-term solutions that enable our clients to scale and adapt to changing market demands.</p>
            </div>

            <div className="services-card">
              <h2>Technology Leadership</h2>
              <p>We stay at the forefront of technological advancement, leveraging emerging technologies to deliver competitive advantages for our clients.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 