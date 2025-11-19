import React from "react";
import aboutImage from "../../assets/about/aboutImage.jpg";
import cursorIcon from "../../assets/about/cursorIcon.png";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage} height={200} width={200}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I’m a Frontend Developer and Solutions Engineer with over 3 years of experience in delivering scalable web solutions and supporting enterprise-level integrations. I’ve led the development of a Human Resource Management System for a $300M healthcare company, integrating 20+ REST APIs and WebSockets to enable real-time data workflows and automation. My core strengths include ReactJS, JavaScript, HTML/CSS, and I’m well-versed in tools like Docker, Git, Grafana, and VMware. I regularly work with REST APIs, JSON payloads, browser DevTools, and basic SQL for reporting needs. I’ve also set up GTM events, debugged embedded content, and managed DNS configurations. I bring a strong ownership mindset, enjoy solving ambiguous technical challenges, and thrive in fast-paced startup environments.
              </p>
            </div>
          </li>
          {/*
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
          */}
        </ul>
      </div>
    </section>
  );
};
