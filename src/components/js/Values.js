import React from 'react';
import '../css/Values.css';
import '../css/SharedStyles.css';
import atomImage from '../../assets/images/star.png';
import vision from '../../assets/images/vission.png';
import mission from '../../assets/images/mission.png';

const Values = () => {
  return (
    <div className="page-container values-container">
      <div className="page-header">
        <div className="header-content">
          <div className="header-text">
            <span className="company-text">Company</span>
            <span className="arrow">▶</span>
            <span className="page-text">Our Values</span>
          </div>
        </div>
      </div>

      <div className="page-content">
        <h1 className="page-title">Our Core Values</h1>

        <div className="values-section">
          <div className="atom-img-container">
            <img src={atomImage} alt="Core Values Atom" className="atom-img" />
          </div>

          <div className="values-descriptions">
            <div className="value-card">
              <h2>Make Customers Successful</h2>
              <p>Empowering customers to achieve their goals – because their success is our success.</p>
            </div>
            <div className="value-card">
              <h2>Be Accountable</h2>
              <p>Own every action and deliver with integrity – because accountability drives excellence.</p>
            </div>
            <div className="value-card">
              <h2>Deliver Excellence</h2>
              <p>Strive for perfection in every detail – because delivering excellence is not just our goal but our standard.</p>
            </div>
          </div>
        </div>

        <div className="vision-mission-section">
          <h2 className="vision-mission-title">Our Vision and Mission</h2>

          <div className="vision-mission-card centered-card">
            <div className="vm-icon-label">
              <span className="vm-icon">
                <img src={vision} alt="Vision Icon" />
              </span>
              <span className="vm-label1">Vision</span>
            </div>
            <div className="vm-desc">
              Revolutionize businesses through cutting-edge technology solutions driving efficiency, innovation, and sustainable growth.
            </div>
          </div>

          <div className="vision-mission-card centered-card">
            <div className="vm-icon-label">
              <span className="vm-icon">
                <img src={mission} alt="Mission Icon" />
              </span>
              <span className="vm-label">Mission</span>
            </div>
            <div className="vm-desc">
              Be a leader in our domain by delivering innovative, reliable, and exceptional solutions that exceed customer expectations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
