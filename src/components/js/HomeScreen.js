import React, { useState } from 'react';
import "../css/HomeScreen.css";
import Button from '../button/Button';
import Modal from '../modal/Modal';
import cellIcon from '../../assets/icons/cell.png';
import ceoImg from '../../assets/images/ceo-img.png';

const HomeScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: `"ARETA360 has transformed our customer\ninteractions with real-time, personalized experiences\nacross all channels."`,
      author: "Warren Adly",
      position: "FOUNDER TERNAK DUIT",
      image: ceoImg
    },
    {
      text: `"ARETA360 has transformed our customer\ninteractions with real-time, personalized experiences\nacross all channels."`,
      author: "Warren Adly",
      position: "FOUNDER TERNAK DUIT",
      image: ceoImg
    },
    {
      text: `"ARETA360 has transformed our customer\ninteractions with real-time, personalized experiences\nacross all channels."`,
      author: "Warren Adly",
      position: "FOUNDER TERNAK DUIT",
      image: ceoImg
    }
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Empower, Transform, Accelerate</h1>
        <p className="hero-subtext">
          Empower your team to turn leads into lasting relationships and 
          accelerate sales with precision and seamless automation.
        </p>
        <div className="button-container">
          <Button 
            text="Let's Connect" 
            icon={cellIcon}
            onClick={handleOpenModal}
          />
        </div>
        <div className="testimonial">
          <button className="nav-arrow prev" onClick={prevTestimonial} aria-label="Previous testimonial">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 16L10 12L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="testimonial-content">
            <p className="testimonial-text">
              {testimonials[currentTestimonial].text.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <div className="testimonial-author">
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].author} 
                className="author-image"
              />
              <div className="author-info">
                <h3>{testimonials[currentTestimonial].author}</h3>
                <p>{testimonials[currentTestimonial].position}</p>
              </div>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`dot ${currentTestimonial === index ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <button className="nav-arrow next" onClick={nextTestimonial} aria-label="Next testimonial">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 16L14 12L10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="bottom-box">
        <div className="box-content">
          <h2>Are you ready to get started?</h2>
          <p>No matter if you're a professional, student, or entrepreneur, our powerful tools are crafted to drive your success. Join today and discover endless opportunities!</p>
          <Button 
            text="Let's Connect" 
            icon={cellIcon}
            onClick={handleOpenModal}
          />
        </div>
      </div>
      {isModalOpen && (
        <Modal 
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default HomeScreen; 