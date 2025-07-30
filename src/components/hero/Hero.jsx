import "./hero.scss";
import { motion } from "framer-motion";

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
  // FIXED: Corrected the syntax here from '=' to ':'
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

// This component is exported with "export const", not as default.
export const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          {/* Removed redundant variants from children for cleaner code */}
          <motion.h2 variants={textVariants}>YUVRAJ SINGH</motion.h2>
          <motion.h1 variants={textVariants}>
            Software Developer and Tech Enthusiast
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button>See the Latest Works</motion.button>
            <motion.button>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants} // Kept variants here to target "scrollButton"
            animate="scrollButton"
            src="/scroll.png"
            alt="Scroll down indicator"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Creator Innovator Problem-Solver
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="Personal portfolio image" />
      </div>
    </div>
  );
};