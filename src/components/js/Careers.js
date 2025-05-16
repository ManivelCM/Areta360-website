import React, { useState } from 'react';
import '../css/Career.css';
import '../css/SharedStyles.css';
import cellIcon from '../../assets/icons/cell.png';
import ApplicationForm from '../careers/ApplicationForm';
import icon1 from '../../assets/icons/icon1.png';
import icon2 from '../../assets/icons/icon2.png';
import icon3 from '../../assets/icons/icon3.png';
import icon4 from '../../assets/icons/icon4.png';
import icon5 from '../../assets/icons/icon5.png';

const Career = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [resume, setResume] = useState(null);
  const [showModal, setShowModal] = useState(false);

  
  const uspData = [
    {
      icon: icon1,
    },
    {
      icon: icon2,
     },
    {
      icon: icon3,
     },
    {
      icon: icon4,
     },
    {
      icon: icon5,
     },
    ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('message', message);
      if (resume) {
        formData.append('resume', resume);
      }

      const response = await fetch('http://localhost:5000/api/career-form', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      
      if (response.ok) {
        alert('Application submitted successfully!');
        // Reset form
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setResume(null);
        setShowModal(false);
      } else {
        alert('Error submitting application. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting application. Please try again.');
    }
  };

  return (
    <>
      <div className="page-container career-container">
        
        <div className="career-content">
          <h1 className="page-title">Why Join Areta360?</h1>
          <p className="page-subtitle">
            At Areta360, we don't just offer jobs—we build careers. Whether you're starting out or looking to grow,<br />
            you'll find the opportunity to make a real impact here.<br/>
            Here's why we're the right place to launch or elevate your tech journey:
          </p>


     
          <button className="join-us-btn" onClick={() => setIsModalOpen(true)}>
            Apply here
          </button>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <img src={uspData[0].icon} alt="Work on Cutting-Edge Technology" />
              </div>
              <h3>Work on Cutting-Edge Technology</h3>
              <p>
                Engage with the latest tools, frameworks, and platforms across domains like Retail, Healthcare, Aviation, and Banking & Financial
                Services. Our projects solve real-world problems using innovative tech.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <img src={uspData[1].icon} alt="Learn from Industry Leaders" />
              </div>
              <h3>Learn from Industry Leaders</h3>
              <p>
                Work side-by-side with experienced professionals who have led global initiatives and built multi-million-dollar technology
                businesses. Their mentorship will guide your learning and growth.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <img src={uspData[2].icon} alt="Gain Hands-On Experience" />
              </div>
              <h3>Gain Hands-On Experience</h3>
              <p>
                From development to deployment, be part of the full software development lifecycle. You'll work on real projects, solve complex
                challenges, and see your ideas come to life.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <img src={uspData[3].icon} alt="Grow in a Diverse & Dynamic Team" />
              </div>
              <h3>Grow in a Diverse & Dynamic Team</h3>
              <p>
                Our team brings together talent from various backgrounds and perspectives. We believe diversity drives creativity, innovation, and better outcomes.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <img src={uspData[4].icon} alt="Build a Strong Career Foundation" />
              </div>
              <h3>Build a Strong Career Foundation</h3>
              <p>
                We empower you to grow through continuous learning, structured training, and meaningful projects. At Areta360, you're not just
                preparing for a job—you're building a future.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-box">
        <div className="box-content">
          <h2>Are you ready to get started?</h2>
          <button className="join-us-btn" onClick={() => setIsModalOpen(true)}>
            Apply here
          </button>
          <p>
            No matter if you're a professional, student, or entrepreneur, our powerful tools are crafted
            to drive your success. Join today and discover endless opportunities!
          </p>
        </div>
      </div>

      <ApplicationForm 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Career; 