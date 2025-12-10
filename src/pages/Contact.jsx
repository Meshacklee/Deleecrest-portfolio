import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch("https://formspree.io/f/xeovqgor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to open Tawk.to chat
  const openTawkChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle();
    } else {
      // If Tawk_API is not loaded yet, show an alert or try again
      alert('Chat service is loading, please try again in a moment.');
    }
  };

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title fade-in">Contact Us</h1>
        <div className="contact-grid">
          <div className="card fade-in">
            <h2 className="card-title">Get In Touch</h2>
            {submitStatus === 'success' && (
              <div className="form-message success">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-message error">
                Error sending message. Please try again.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          <div className="card fade-in">
            <h2 className="card-title">Contact Information</h2>
            <div className="contact-info">
              <p><strong>Email:</strong> your-email@example.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Location:</strong> Your Location</p>
            </div>
            
            <h3 className="card-title">Request a Quote</h3>
            <p>Have a project in mind? Request a custom quote for your development needs.</p>
            <button className="btn">Request Quote</button>
            
            <h3 className="card-title">Live Chat</h3>
            <p>Chat with our team in real-time for immediate assistance.</p>
            {/* Updated button to open Tawk.to chat */}
            <button className="btn pulse" onClick={openTawkChat}>
              Start Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;