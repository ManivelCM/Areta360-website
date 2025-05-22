import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';
import logo from '../../assets/icons/logo.png';

const Modal = ({ isOpen, onClose }) => {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://localhost:3000/api/blog-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        resetForm();
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
        }, 1500);
      } else {
        setError(data.error || 'Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  return createPortal(
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={handleCloseClick}>×</button>
        <div className="modal-header">
          <div className="check-icon-container">
            <img src={logo} alt="check" className="check-icon" />
          </div>
          <h2>Interested to talk to us?</h2>
        </div>
        <p className="modal-description">
          Looking to discuss a project with us? Looking to have a partnership
          with us? Your Query could be anything – Just fill in your details.
        </p>
        {submitStatus === 'success' ? (
          <div className="status-message success">
            Message sent successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="3"
                disabled={isSubmitting}
                placeholder="Enter your message"
              ></textarea>
            </div>
            {error && (
              <div className="status-message error">
                {error}
              </div>
            )}
            <button 
              type="submit" 
              className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Modal; 