import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import SectionTitle from "./SectionTitle";
import styles from "../../../Styles/contacts.module.css";

const Contact = () => {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
  }, []);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setSuccess(false);
    setErrors({});

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          title: "Contact Us",
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
        }
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error sending email:", error);
        setErrors({ general: "Something went wrong. Please try again." });
      });
  };

  const contactInfo = [
    { icon: <FaEnvelope />, text: "Guillemunozi2003@gmail.com" },
    { icon: <FaPhone />, text: "+593 98 972 5566" },
    { icon: <FaMapMarkerAlt />, text: "Guayaquil, Ecuador" },
  ];

  return (
    <section id="contact" className={styles.contactSection}>
      <SectionTitle title="Contact" subtitle="Get in touch" />
      <div className={styles.contactContainer}>
        <motion.div
          className={styles.contactInfo}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Let's talk about your project</h3>
          <p>
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect.
          </p>
          <div className={styles.contactDetails}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className={styles.contactItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className={styles.contactIcon}>{info.icon}</div>
                <p>{info.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.contactFormContainer}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={styles.contactForm}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={errors.name ? styles.error : ""}
              />
              {errors.name && (
                <p className={styles.errorMessage}>{errors.name}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={errors.email ? styles.error : ""}
              />
              {errors.email && (
                <p className={styles.errorMessage}>{errors.email}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className={errors.message ? styles.error : ""}
              />
              {errors.message && (
                <p className={styles.errorMessage}>{errors.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {success && (
              <motion.div
                className={styles.successMessage}
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
