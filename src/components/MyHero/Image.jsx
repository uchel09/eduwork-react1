import "./myHero.scss";
import { motion } from "framer-motion";

const MyImage = () => {
  const textVariants = {
    initial: {
      x: 400,
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
      className="hero"
      variants={textVariants}
      initial="initial"
      whileInView="animate"
    >
      <div className="img-container">
        <img src="/uchel.png" alt="" />
      </div>
    </motion.div>
  );
};

export default MyImage;
