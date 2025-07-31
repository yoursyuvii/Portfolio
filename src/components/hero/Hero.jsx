import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
  scrollButton: { opacity: 0, y: 10, transition: { duration: 2, repeat: Infinity } },
};

const sliderVariants = {
  initial: { x: 0 },
  animate: { x: "-220%", transition: { repeat: Infinity, repeatType: "mirror", duration: 20 } },
};

const imageVariants = {
  initial: { x: 500, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1.2, delay: 0.3, ease: "easeOut" } },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0 0 25px #a958f0ef", transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

export const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>YUVRAJ SINGH</motion.h2>
          <motion.h1 variants={textVariants}>
            <span className="gradient-text">Software Developer</span>
            <br />
            <span className="secondary-text">and Tech Enthusiast</span>
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button className="primary-btn" variants={buttonVariants} whileHover="hover" whileTap="tap" onClick={() => scrollToSection('portfolio')}>
              <span>See Latest Works</span>
            </motion.button>
            <motion.button className="secondary-btn" variants={buttonVariants} whileHover="hover" whileTap="tap" onClick={() => scrollToSection('contact')}>
              <span>Contact Me</span>
            </motion.button>
          </motion.div>
          <motion.div className="scroll-indicator" variants={textVariants} animate="scrollButton">
            <img src="/scroll.png" alt="Scroll down" onClick={() => scrollToSection('about')} />
            <span>Scroll Down</span>
          </motion.div>
        </motion.div>
        <motion.div className="imageContainer" variants={imageVariants} initial="initial" animate="animate">
          <div className="image-wrapper">
            <img src="/hero.png" alt="Yuvraj Singh - Software Developer" />
            <div className="image-overlay"></div>
          </div>
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Creator • Innovator • Problem-Solver • Developer •
      </motion.div>
    </div>
  );
};
