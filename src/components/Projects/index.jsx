import "./project.scss";
import { CgProfile } from "react-icons/cg";
import { BsCalendarCheckFill } from "react-icons/bs";
import { FaMedal } from "react-icons/fa6";
import {motion} from "framer-motion"

const Projects = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className="projects"
      variants={textVariants}
      initial="initial"
      whileInView="animate"
    >
      <div className="top-header">
        <h1>Projects</h1>
      </div>
      <motion.div className="projects-container" variants={textVariants}>
        <motion.div className="projects-box" variants={textVariants}>
          <BsCalendarCheckFill size={30} className="i" />
          <h3>Completed</h3>
          <label htmlFor="">3+ projects</label>
        </motion.div>
        <motion.div className="projects-box" variants={textVariants}>
          <CgProfile size={30} className="i" />
          <h3>Clients</h3>
          <label htmlFor="">0 Client</label>
        </motion.div>
        <motion.div className="projects-box" variants={textVariants}>
          <FaMedal size={30} className="i" />
          <h3>Experience</h3>
          <label htmlFor="">0 Years</label>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
