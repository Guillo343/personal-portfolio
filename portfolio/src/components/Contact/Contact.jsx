import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import SectionTitle from './SectionTitle';
import '../../../Styles/contacts.css'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    // Replace with your EmailJS service ID, template ID, and public key
    emailjs.send(
      'service_y3c8b4m',
      'template_02ekyuv',
      {
        from_name: form.name,
        to_name: 'Guillermo Muñoz',
        from_email: form.email,
        to_email: 'Guillemunozi2003@gmail.com',
        message: form.message,
      },
      'GOKgM-9cIwNeums8T'
    )
    .then(() => {
      setLoading(false);
      setSuccess(true);
      
      // Reset form
      setForm({
        name: '',
        email: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    })
    .catch((error) => {
      setLoading(false);
      console.error('Error sending email:', error);
      alert('Something went wrong. Please try again.');
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      text: 'Guillemunozi2003@gmail.com',
    },
    {
      icon: <FaPhone />,
      text: '+593 98 972 5566',
    },
    {
      icon: <FaMapMarkerAlt />,
      text: 'Guayaquil, Ecuador',
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <SectionTitle title="Contact" subtitle="Get in touch" />
      
      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Let's talk about your project</h3>
          <p>
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
          
          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="contact-icon">{info.icon}</div>
                <p>{info.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
              />
              {errors.message && <p className="error-message">{errors.message}</p>}
            </div>
            
            <motion.button
              type="submit"
              className="submit-button"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
            
            {success && (
              <motion.div 
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;