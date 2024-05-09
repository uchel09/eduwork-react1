import "./about.scss";
import { motion } from "framer-motion";

const About = () => {
  const textVariants = {
    initial: {
      x: 400,
      y:-300,
      opacity: 0,
    },
    animate: {
      x: 0,
      y:0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  const frontend = [
    "html",
    "css",
    "tailwind",
    "Javascript",
    "react",
    "flutter/dart",
  ];
  const backend = [
    "Golang",
    "Golang/fiber",
    "Golang/gorm",
    "nodejs",
    "express",
  ];
  return (
    <motion.div
      className="about"
      variants={textVariants}
      initial="initial"
      whileInView="animate"
    >
      <h1>About Me</h1>

      <div className="about-info">
        <div className="left">
          <h3>My Introduction</h3>
          <p>
            Ia well-versed in HTML, CSS, and Javascript, and other cutting edge
            frameworks and libraries, which allows me to implement interactive
            feature Additionally, I have experience working with Content
            Managment system (CMS) like WordPress
          </p>
          <div className="about-button">
            <button className="btn">Download Cv</button>
          </div>
        </div>
        <div className="right">
          <div className="skills-box">
            <div className="skills-header">
              <h3>FrontEnd</h3>
            </div>
            <div className="skills-list">
              {frontend.map((item, index) => {
                return <span key={index}>{item}</span>;
              })}
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Backend</h3>
            </div>
            <div className="skills-list">
              {backend.map((item, index) => {
                return <span key={index}>{item}</span>;
              })}
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Database</h3>
            </div>
            <div className="skills-list">
              <span>Mysql</span>
              <span> Postgre sql</span>
              <span>Mongo db</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
