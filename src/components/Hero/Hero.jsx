import React from "react";
import Rounded_me from "../../assets/hero/Rounded_me.jpeg";

import styles from "./Hero.module.css";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rohit Rana</h1>
        <p className={styles.description}>
        I am a Frontend Developer specializing in building scalable web applications using ReactJS, Redux, RESTful APIs, and
WebSocket integration. I focus on optimizing UI performance with lazy loading, code splitting, and memoization.
With an M.Tech from IIT Ropar and I work hands-on with JavaScript and DevOps practices to deliver measurable
technical outcomes. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:rohitrana349@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={Rounded_me}
        loading="lazy"
        height={300} width={300}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
