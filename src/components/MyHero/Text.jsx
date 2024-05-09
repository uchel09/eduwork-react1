import { useEffect, useRef } from "react";
import "./myHero.scss";
import Typed from "typed.js";
import { motion } from "framer-motion";

const MyText = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Fullstack Developer", "Mobile Developer"], // Daftar teks yang ingin ditampilkan secara berurutan
      typeSpeed: 50, // Kecepatan pengetikan (ms per karakter)
      backSpeed: 50, // Kecepatan penghapusan (ms per karakter)
      loop: true, // Mengulangi teks dari awal setelah selesai
    };

    const typed = new Typed(typedTextRef.current, options);

    return () => {
      typed.destroy(); // Membersihkan Typed.js instance saat komponen dilepas dari DOM
    };
  }, []);

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
      className="hero-info"
      variants={textVariants}
      initial="initial"
      whileInView="animate"
    >
      <motion.p className="myname" variants={textVariants}>
        My name is <br /> RUSSEL EMILIAN RUMBINO
      </motion.p>
      <motion.p className="myskill" variants={textVariants}>
        I{"'"}m A <span ref={typedTextRef}></span>
      </motion.p>

      <motion.div className="text-info" variants={textVariants}>
        <motion.p variants={textVariants}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quis
          dignissimos fugiat sunt aliquid natus, rem corrupti debitis dicta
          ratione dolore quisquam veritatis possimus minus voluptatem vitae nam!
          Nesciunt omnis, ab ipsum voluptas rem id fugit! Dolores, nobis.
        </motion.p>
      </motion.div>
      <motion.div className="button-hero">
        <motion.button>Hire me</motion.button>
        <motion.button>Download CB</motion.button>
      </motion.div>
    </motion.div>
  );
};

export default MyText;
