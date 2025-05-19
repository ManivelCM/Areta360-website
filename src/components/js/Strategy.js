import React, { useState } from 'react';
import '../css/Strategy.css';
import '../css/SharedStyles.css';
import Modal from '../modal/Modal';
import icon1 from '../../assets/images/icon1.png';
import icon2 from '../../assets/images/icon2.png';
import icon3 from '../../assets/images/icon3.png';
import icon4 from '../../assets/images/icon4.png';
import icon5 from '../../assets/images/icon5.png';
import icon6 from '../../assets/images/icon6.png';
import Button from '../button/Button';
import cellIcon from '../../assets/icons/cell.png';


const Strategy = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const uspData = [
    {
      icon: icon1,
      title: "Innovation Design",
      desc: "Experience immersive digital solutions with our creative approach that blends functionality and aesthetics."
    },
    {
      icon: icon2,
      title: "Cost Efficiency",
      desc: "We prioritize cost efficiency to streamline operations and maximize value at every stage, keeping expenses low."
    },
    {
      icon: icon3,
      title: "Transparent Collaboration",
      desc: "Our philosophy is built on clear workflows and well-defined roles, fostering agility and empowering teams."
    },
    {
      icon: icon4,
      title: "Passionate Team",
      desc: "Our experts bring groundbreaking solutions that tackle real-world challenges with passion and purpose."
    },
    {
      icon: icon5,
      title: "Swift Deployment",
      desc: "Our technical expertise guarantees seamless deployment, transforming your vision into reality efficiently."
    },
    {
      icon: icon6,
      title: "Unwavering Security",
      desc: "Reducing risks and accelerating growth. Our solutions help you tackle challenges with confidence and resilience."
    }
  ];

  return (
    <div className="page-container usp-container">
      <div className="page-header">
        <div className="header-content">
          <div className="header-text">
            <span className="company-text">Company</span>
            <span className="arrow">▶</span>
            <span className="page-text">Our Strategy</span>
          </div>
        </div>
      </div>

      <div className="page-content">
        <h1 className="page-title">Our Unique Selling Point</h1>
        <p className="usp-subtitle">
          Our technology solution offers a comprehensive view of consumer behavior and support, unified cross-channel
          strategies to deliver real-time omnichannel experiences. We are committed to creating personalized and consistent
          customer interactions that make a measurable impact.
        </p>

        <div className="button-container">
          <Button 
            text="Let's Connect" 
            icon={cellIcon}
            onClick={handleOpenModal}
          />
        </div>

        <div className="usp-grid">
          {uspData.map((usp, index) => (
            <div key={index} className="usp-card">
              <div className="usp-icon">
                <img src={usp.icon} alt={usp.title} />
              </div>
              <h3 className="usp-card-title">{usp.title}</h3>
              <p className="usp-card-desc">{usp.desc}</p>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <Modal 
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
};

export default Strategy; 