import { motion } from "framer-motion";
import "./certificates.scss";

// Data for the certificates, including real logo URLs
const certificatesData = [
  {
    id: 1,
    title: "Google Cloud Engineering",
    issuer: "Google Cloud",
    year: "2024",
    description: "Gained hands-on experience in cloud infrastructure, IAM, networking, and Kubernetes using Google Cloud technologies.",
    icon: "./public/google.png", // Google Cloud Logo
    color: "#4285F4",
  },
  {
    id: 2,
    title: "Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "2023",
    description: "Demonstrated foundational knowledge of cloud concepts, Azure services, pricing models, and governance tools.",
    icon: "./public/microsoft.jpg", // Microsoft Azure Logo
    color: " #FBBC05",
  },
  {
    id: 3,
    title: "Java Foundations Certified",
    issuer: "Oracle",
    year: "2023",
    description: "Validated skills in object-oriented programming, core Java syntax, and application development using the Java SE platform.",
    icon: "./public/oracle.png", // Oracle Logo
    color: "#F80000",
  },
];

// Animation variants for the container to orchestrate children animations
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.3, // Delay between each child animation
    },
  },
};

// Animation variants for each individual card
const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Start hidden, slightly below
  visible: { opacity: 1, y: 0 }, // Animate to visible, original position
};

export const Certificates = () => {
  return (
    <div className="certificates">
      <div className="container">
        {/* Header Section with its own animation */}
        <motion.div
          className="header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2>Achievements</h2>
          <h1>My <span className="gradient-text">Certificates</span></h1>
        </motion.div>

        {/* Grid container for the certificate cards */}
        <motion.div
          className="grid"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
        >
          {certificatesData.map((cert) => (
            <motion.div
              key={cert.id}
              className="card"
              variants={cardVariants} // Apply card animation variants
              whileHover={{ y: -10, boxShadow: `0px 20px 30px ${cert.color}40` }}
            >
              <div className="card-header" style={{ borderTopColor: cert.color }}>
                <img src={cert.icon} alt={`${cert.issuer} logo`} className="issuer-icon" />
                <div className="title-group">
                  <h3>{cert.title}</h3>
                  <h4>{cert.issuer}</h4>
                </div>
                <span className="year">{cert.year}</span>
              </div>
              <div className="card-body">
                <p>{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
