import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap, FaAward } from "react-icons/fa";
import SectionTitle from "../Contact/SectionTitle";
import { useTheme } from "../../../Context/ThemeContext";
import styles from '../../../Styles/experience.module.css'

const Experience = () => {
  const { darkMode } = useTheme();

  // Timeline item types with their respective icons and colors
  const itemTypes = {
    work: {
      icon: <FaBriefcase />,
      iconBg: "#1d4ed8",
      iconColor: "#ffffff",
    },
    education: {
      icon: <FaGraduationCap />,
      iconBg: "#0f766e",
      iconColor: "#ffffff",
    },
    award: {
      icon: <FaAward />,
      iconBg: "#b45309",
      iconColor: "#ffffff",
    },
  };

  // In a real application, this would come from your data file
  const experiences = [
    // {
    //   title: "Senior Frontend Developer",
    //   company: "Tech Solutions Inc.",
    //   location: "San Francisco, CA",
    //   description: "Led the development of responsive web applications using React, Redux, and TypeScript. Implemented state-of-the-art UI/UX designs and optimized application performance.",
    //   date: "2022 - Present",
    //   type: "work"
    // },
    // {
    //   title: "Frontend Developer",
    //   company: "Digital Innovations",
    //   location: "New York, NY",
    //   description: "Developed and maintained multiple client-facing applications. Collaborated with designers and backend developers to deliver seamless user experiences.",
    //   date: "2020 - 2022",
    //   type: "work"
    // },
     {
       title: "Junior Developer",
       company: "Proinba Proyectos Inmobiliarios Batan S.A.",
       location: "Samborondon, Ecuador",
       description: "Developing and modernizing an internal application using Angular, alongside providing IT support for daily operations.",
       date: "2025 Octuber-Present",
       type: "work"
     },
     {
      title: "Junior Developer",
       company: "Empagran",
       location: "Guayaquil, Ecuador",
      description: "Designed and developed .NET applications (using .NET Framework) to manage and track production data in a shrimp processing facility.",
      date: "2025 July - 2025 Octuber",
      type: "work"
     },
    {
      title: "Bachelor's Degree in Information Technology",
      company: "UEES",
      location: "Samborondón, Ecuador",
      description:
        "Focused on software development and web technologies. Participated in multiple hackathons and coding competitions.",
      date: "2025 - Present",
      type: "education",
    },
    {
      title: "Web Development Bootcamp",
      company: "One oracle next education",
      location: "Remote",
      description:
        "Specialized in Human-Computer Interaction and Web Technologies. Thesis on optimizing interactive web experiences through predictive loading patterns.",
      date: "2022 - 2023",
      type: "education",
    },
  ];

  // Animation variants for the section title
  const textVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className={styles.experienceSection}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariant}
      >
        <SectionTitle title="Experience" subtitle="My professional journey" />
      </motion.div>

      <div className={styles.timelineContainer}>
        <VerticalTimeline lineColor={darkMode ? "#4b5563" : "#e5e7eb"}>
          {experiences.map((experience, index) => {
            const { icon, iconBg, iconColor } = itemTypes[experience.type];

            return (
              <VerticalTimelineElement
                key={index}
                contentStyle={{
                  background: darkMode ? "#1f2937" : "#ffffff",
                  color: darkMode ? "#e5e7eb" : "#1f2937",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                  border: darkMode ? "1px solid #374151" : "1px solid #e5e7eb",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${darkMode ? "#1f2937" : "#ffffff"}`,
                }}
                date={experience.date}
                dateClassName={darkMode ? "text-white" : "text-gray-600"}
                iconStyle={{
                  background: iconBg,
                  color: iconColor,
                  boxShadow: "0 0 0 4px #e5e7eb",
                }}
                icon={icon}
              >
                <div>
                  <h3 className={styles.experienceTitle}>{experience.title}</h3>
                  <h4 className={styles.experienceCompany}>
                    {experience.company} • <span>{experience.location}</span>
                  </h4>
                  <p className={styles.experienceDescription}>
                    {experience.description}
                  </p>
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
