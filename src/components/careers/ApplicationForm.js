import React, { useState } from 'react';
import './ApplicationForm.css';

const ApplicationForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }

      const response = await fetch('http://localhost:5000/api/career-form', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          resume: null,
          message: ''
        });
    setTimeout(() => {
      onClose();
          setSubmitStatus(null);
    }, 1500);
      } else {
        setError(data.error || 'Error submitting application. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error submitting application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="application-modal">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-container">
        <div className="modal-header">
          <h2>Apply Now</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        {submitStatus === 'success' ? (
          <div className="success-message">Your application was submitted successfully!</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="input-group">
              <label htmlFor="resume">Upload Resume</label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
                disabled={isSubmitting}
              />
              <span className="file-info">Accepted formats: PDF, DOC, DOCX</span>
            </div>
            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message (optional)"
                rows="3"
                disabled={isSubmitting}
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ApplicationForm; 