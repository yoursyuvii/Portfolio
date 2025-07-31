import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // --- FIXED: Better parallax transforms ---
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]); // Text moves down
  const yPlanets = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]); // Planets move down fast
  const yMountains = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); // Mountains move up
  const xStars = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]); // Stars move left

  const parallaxConfig = {
    services: {
      title: "About Me",
      subtitle: "Education • Skills • Experience",
      planetImage: "/planets.png",
      titleColor: "#a958f0"
    },
    portfolio: {
      title: "My Projects",
      subtitle: "Innovation • Creativity • Development",
      planetImage: "/sun.png",
      titleColor: "#dfdf09"
    },
    contact: {
      title: "Let's Connect",
      subtitle: "Collaboration • Opportunities • Communication",
      planetImage: "/planets.png",
      titleColor: "#a958f0"
    }
  };

  const config = parallaxConfig[type] || parallaxConfig.services;

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: type === 'portfolio' 
          ? "linear-gradient(180deg, #111132, #505064)"
          : "linear-gradient(180deg, #111132, #0c0c1d)",
      }}
    >
      {/* Stars - Background layer */}
      <motion.div 
        className="stars" 
        style={{ x: xStars }} 
      />
      
      {/* Planets - Middle layer */}
      <motion.div
        className="planets"
        style={{
          y: yPlanets,
          backgroundImage: `url(${config.planetImage})`
        }}
      />
      
      {/* Mountains - Foreground layer */}
      <motion.div 
        className="mountains" 
        style={{ y: yMountains }} 
      />
      
      {/* Content - Text */}
      <motion.div className="content" style={{ y: yText }}>
        <h1 style={{ color: config.titleColor }}>{config.title}</h1>
        <p>{config.subtitle}</p>
      </motion.div>
    </div>
  );
};