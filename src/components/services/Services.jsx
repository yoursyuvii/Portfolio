import "./services.scss";
import { motion } from "framer-motion";

export const Services = () => {
  const education = [
    { id: 1, institution: "Technocrats Institute of Technology, Bhopal", degree: "B.Tech, Computer Science Engineering", grade: "7.58 CGPA", duration: "2022 - 2026", icon: "🎓" },
    { id: 2, institution: "J. D. Public School, Saran", degree: "Class XII", grade: "70%", duration: "2021", icon: "📚" },
    { id: 3, institution: "Bhagwant VidyaPeeth, Chhapra", degree: "Class X", grade: "66%", duration: "2019", icon: "📖" }
  ];

  const skills = {
    languages: ["C++", "HTML", "CSS", "JavaScript"],
    libraries: ["ReactJS", "MongoDB"],
    databases: ["SQL", "DBMS"],
    tools: ["VS Code", "Git", "GitHub"],
    softSkills: ["Competitive", "Dynamic", "Adaptability", "Responsibility", "Creativity"]
  };

  return (
    <div className="services">
      <div className="textContainer">
        <h2>About Me</h2>
        <h1>Education & Skills</h1>
        <p>A passionate Computer Science Engineering student with strong technical skills and a creative mindset. Dedicated to building innovative solutions and continuously learning new technologies.</p>
      </div>
      
      <div className="educationSection">
        <div className="sectionHeader"><h2>Education</h2><div className="underline"></div></div>
        <div className="educationGrid">
          {education.map((edu) => (
            <motion.div key={edu.id} className="educationCard" whileHover={{ y: -10 }}>
              <div className="eduIcon">{edu.icon}</div>
              <div className="eduContent">
                <h3>{edu.institution}</h3>
                <h4>{edu.degree}</h4>
                <div className="eduDetails">
                  <span className="grade">{edu.grade}</span>
                  <span className="duration">{edu.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="skillsSection">
        <div className="sectionHeader"><h2>Technical Skills</h2><div className="underline"></div></div>
        <div className="skillsGrid">
          <div className="skillCategory"><h3>Languages</h3><div className="skillTags">{skills.languages.map((skill, index) => (<span key={index} className="skill-tag languages">{skill}</span>))}</div></div>
          <div className="skillCategory"><h3>Libraries & Frameworks</h3><div className="skillTags">{skills.libraries.map((skill, index) => (<span key={index} className="skill-tag libraries">{skill}</span>))}</div></div>
          <div className="skillCategory"><h3>Databases</h3><div className="skillTags">{skills.databases.map((skill, index) => (<span key={index} className="skill-tag databases">{skill}</span>))}</div></div>
          <div className="skillCategory"><h3>Tools & Software</h3><div className="skillTags">{skills.tools.map((skill, index) => (<span key={index} className="skill-tag tools">{skill}</span>))}</div></div>
          <div className="skillCategory full-width"><h3>Soft Skills</h3><div className="skillTags">{skills.softSkills.map((skill, index) => (<span key={index} className="skill-tag soft-skills">{skill}</span>))}</div></div>
        </div>
      </div>

      <div className="slidingTextContainer">
        <div className="slidingText">EDUCATION • SKILLS • PROJECTS • INNOVATION • </div>
      </div>
    </div>
  );
};
