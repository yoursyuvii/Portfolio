import { motion } from "framer-motion";
import "./certificates.scss";

const certificatesData = [
  {
    id: 1,
    title: "Google Cloud Engineering",
    issuer: "Google Cloud",
    year: "2024",
    description: "Gained hands-on experience in cloud infrastructure, IAM, networking, and Kubernetes using Google Cloud technologies.",
    icon: "/google-cloud.png", // Example path
    color: "#4285F4",
  },
  {
    id: 2,
    title: "Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "2023",
    description: "Demonstrated foundational knowledge of cloud concepts, Azure services, pricing models, and governance tools.",
    icon: "/microsoft-azure.png", // Example path
    color: "#0078D4",
  },
  {
    id: 3,
    title: "Java Foundations Certified",
    issuer: "Oracle",
    year: "2023",
    description: "Validated skills in object-oriented programming, core Java syntax, and application development using the Java SE platform.",
    icon: "/oracle.png", // Example path
    color: "#F80000",
  },
];

export const Certificates = () => {
  return (
    <div className="certificates">
      <div className="container">
        <motion.div className="header" initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2>Achievements</h2>
          <h1>My <span className="gradient-text">Certificates</span></h1>
        </motion.div>
        <motion.div className="grid" initial="hidden" whileInView="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
          {certificatesData.map((cert) => (
            <motion.div key={cert.id} className="card" variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }} whileHover={{ y: -10, boxShadow: `0px 20px 30px ${cert.color}40` }}>
              <div className="card-header" style={{ borderTopColor: cert.color }}>
                <img src={cert.icon} alt={cert.issuer} className="issuer-icon" />
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
