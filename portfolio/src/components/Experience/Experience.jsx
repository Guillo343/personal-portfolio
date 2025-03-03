import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';
import SectionTitle from '../Contact/SectionTitle';
import { useTheme } from '../../../Context/ThemeContext';

const Experience = () => {
  const { darkMode } = useTheme();
  
  // Timeline item types with their respective icons and colors
  const itemTypes = {
    work: {
      icon: <FaBriefcase />,
      iconBg: '#1d4ed8',
      iconColor: '#ffffff',
    },
    education: {
      icon: <FaGraduationCap />,
      iconBg: '#0f766e',
      iconColor: '#ffffff',
    },
    award: {
      icon: <FaAward />,
      iconBg: '#b45309',
      iconColor: '#ffffff',
    },
  };

  // In a real application, this would come from your data file
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      description: "Led the development of responsive web applications using React, Redux, and TypeScript. Implemented state-of-the-art UI/UX designs and optimized application performance.",
      date: "2022 - Present",
      type: "work"
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations",
      location: "New York, NY",
      description: "Developed and maintained multiple client-facing applications. Collaborated with designers and backend developers to deliver seamless user experiences.",
      date: "2020 - 2022",
      type: "work"
    },
    {
      title: "Master's Degree in Computer Science",
      company: "Stanford University",
      location: "Stanford, CA",
      description: "Specialized in Human-Computer Interaction and Web Technologies. Thesis on optimizing interactive web experiences through predictive loading patterns.",
      date: "2018 - 2020",
      type: "education"
    },
    {
      title: "Best Web App Award",
      company: "National Tech Conference",
      location: "Chicago, IL",
      description: "Received recognition for developing an innovative accessibility-focused web application that helps users with visual impairments navigate complex websites.",
      date: "2021",
      type: "award"
    },
    {
      title: "Junior Developer",
      company: "Startup Hub",
      location: "Austin, TX",
      description: "Built and maintained web applications using React and Node.js. Participated in agile development processes and contributed to open-source projects.",
      date: "2018 - 2020",
      type: "work"
    },
    {
      title: "Bachelor's Degree in Information Technology",
      company: "MIT",
      location: "Cambridge, MA",
      description: "Focused on software development and web technologies. Participated in multiple hackathons and coding competitions.",
      date: "2014 - 2018",
      type: "education"
    }
  ];

  // Animation variants for the section title
  const textVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="experience" className="experience-section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariant}
      >
        <SectionTitle title="Experience" subtitle="My professional journey" />
      </motion.div>

      <div className="timeline-container">
        <VerticalTimeline lineColor={darkMode ? "#4b5563" : "#e5e7eb"}>
          {experiences.map((experience, index) => {
            const { icon, iconBg, iconColor } = itemTypes[experience.type];
            
            return (
              <VerticalTimelineElement
                key={index}
                contentStyle={{
                  background: darkMode ? '#1f2937' : '#ffffff',
                  color: darkMode ? '#e5e7eb' : '#1f2937',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  borderRadius: '12px',
                  border: darkMode ? '1px solid #374151' : '1px solid #e5e7eb'
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${darkMode ? '#1f2937' : '#ffffff'}`
                }}
                date={experience.date}
                dateClassName={darkMode ? "text-white" : "text-gray-600"}
                iconStyle={{
                  background: iconBg,
                  color: iconColor,
                  boxShadow: '0 0 0 4px #e5e7eb'
                }}
                icon={icon}
              >
                <div>
                  <h3 className="experience-title">{experience.title}</h3>
                  <h4 className="experience-company">
                    {experience.company} • <span>{experience.location}</span>
                  </h4>
                  <p className="experience-description">{experience.description}</p>
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;