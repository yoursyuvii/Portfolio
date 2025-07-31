import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./projects.scss"; // Renamed from projects.scss for consistency

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px", once: true });

  // Updated projects list as per your request
  const projects = [
    {
      id: 1,
      title: "Quiz Web Application",
      category: "frontend",
      description: "Designed and developed a dynamic Quiz Web Application using HTML, CSS, and JavaScript with an interactive UI and real-time score tracking.",
      technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
      image: "./public/kbc.png",
      github: "https://github.com/yoursyuvii/KBC.git",
      live: "https://kbc-woad.vercel.app/", // Replace with your Vercel link
      featured: true,
      year: "2025"
    },
    {
      id: 2,
      title: "Temperature Converter",
      category: "frontend",
      description: "Developed a responsive web application using HTML, CSS, and JavaScript to convert temperature units between Celsius, Fahrenheit, and Kelvin.",
      technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      image: "./public/temp.png",
      github: "https://github.com/yoursyuvii/TemperatureConverter.git",
      live: "https://temperature-converter-yoursyuvii.vercel.app/", // Replace with your GitHub Pages link
      featured: true,
      year: "2023"
    }
  ];

  // Simplified filters for the new project list
  const filters = [
    { key: "all", label: "All Projects" },
    { key: "frontend", label: "Frontend" }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="portfolio" ref={ref}>
      <div className="container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Featured Work</h2>
          <h1>My <span className="gradient-text">Projects</span></h1>
          <p>
            Explore my portfolio of innovative projects showcasing creativity, 
            technical expertise, and problem-solving skills.
          </p>
        </motion.div>

        <motion.div 
          className="filter-tabs"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              className={`filter-tab ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card featured"
              variants={itemVariants}
              layout
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="image-overlay">
                  <div className="project-links">
                    <motion.a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" whileHover={{ scale: 1.1 }}>GitHub</motion.a>
                    <motion.a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link" whileHover={{ scale: 1.1 }}>Live Demo</motion.a>
                  </div>
                </div>
                <div className="project-year">{project.year}</div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-category">{project.category}</div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export { Portfolio };
