import React from 'react';
import '../css/Leadership.css';
import '../css/SharedStyles.css';
import hareendranImage from '../../assets/images/hari.png';
import priyaImage from '../../assets/images/priya.png';

const Leadership = () => {
  return (
    <div className="page-container leadership-container">
      <div className="page-header">
        <div className="header-content">
          <div className="header-text">
            <span className="company-text">Company</span>
            <span className="arrow">▶</span>
            <span className="page-text">Leadership</span>
          </div>
        </div>
      </div>

      <div className="page-content">
        <h1 className="page-title">Leadership</h1>
        
        <div className="leadership-profiles">
          <div className="profile-card">
            <div className="profile-left">
              <div className="profile-image">
                <img src={hareendranImage} alt="Hareendran K" />
              </div>
              <h2 className="profile-name">Hareendran K</h2>
              <p className="profile-position">Founder</p>
            </div>
            <div className="profile-info">
              <p className="profile-description">
                With 24+ years of experience in the IT industry, Hareendran K has 
                built innovative products, high-performing teams, and successful 
                businesses. An entrepreneur at heart, he founded and scaled a 
                company and is now on his second startup journey. He has played 
                leadership roles in large enterprises as a technology executive and 
                management professional. Passionate about problem-solving and 
                technology, he operates at the intersection of innovation, strategy, 
                and execution.
              </p>
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-left">
              <div className="profile-image">
                <img src={priyaImage} alt="Priya Valaparla" />
              </div>
              <h2 className="profile-name">Priya Valaparla</h2>
              <p className="profile-position">Founder</p>
            </div>
            <div className="profile-info">
              <p className="profile-description">
                With 20+ years of industry experience and have worked in Europe & 
                UK ,US and APAC markets. Specialized in formulating IT sales, 
                Strategy and lead execution to drive business growth. Priya is an IT 
                executive with proven leadership skills for building, scaling and 
                transforming multi-hundred-million-dollar Technology services 
                business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;