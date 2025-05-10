import React from 'react';
import "../css/AboutUs.css";
import '../css/SharedStyles.css';
import Button from '../button/Button';
import cellIcon from '../../assets/icons/cell.png';
import companyIcon from '../../assets/icons/company-icon.png';

const AboutUs = () => {
  return (
    <div className="page-container about-container">
      <div className="page-header">
        <div className="header-content">
          <div className="header-text">
            <span className="company-text">Company</span>
            <span className="arrow">▶</span>
            <span className="page-text">About Us</span>
          </div>
        </div>
      </div>

      <div className="page-content">
        <h1 className="page-title">About Us</h1>
        <div className="about-image-section">
          <div className="image-container">
            <div className="who-we-are-section">
              <div className="section-label">WHO WE ARE</div>
              <div className="aboutus-box-text">
                <div className="title-text">
                  ARETA360: Pioneering Intelligent Solutions Across Industries
                </div>
                <div className="description-text">
                  <p>
                    ARETA360, established in 2024 is based in the Silicon city of India, Bengaluru. We are a diverse<br/> 
                    group of people interested in building innovative and intelligent solutions in various domains like<br/>
                    Retail, Healthcare, Aviation and Banking and Financials etc.
                  </p>
                  <p>
                    Our technology solutions offer a comprehensive view of consumer behavior and support unified,<br/> 
                    cross-channel strategies to deliver real-time, omnichannel experiences. We're committed to 
                    <br/>creating personalized and consistent customer interactions that make a measurable impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 