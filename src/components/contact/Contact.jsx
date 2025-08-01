import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
// Icons ke liye react-icons import karein
import { FiMail, FiPhone, FiFileText, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import "./contact.scss";

// Animation variants
const variants = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.8, 
      staggerChildren: 0.2 
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
          setIsSubmitting(false);
        },
        (err) => {
          console.error("FAILED...", err);
          setError(true);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="contact-page-wrapper">
      <motion.div 
        className="contact" 
        initial="initial" 
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={variants}
      >
        <motion.h1 className="page-title" variants={variants}>
            Let's work together
        </motion.h1>

        <div className="content-wrapper">
            <motion.div className="textContainer" variants={variants}>
                <div className="info-grid">
                    {/* --- MAIL CARD (Clickable) --- */}
                    <motion.div className="infoCard" variants={variants}>
                      <a href="mailto:yoursyuvii@gmail.com" className="card-link">
                        <FiMail className="icon" />
                        <h2>Mail</h2>
                        <span>yoursyuvii@gmail.com</span>
                      </a>
                    </motion.div>
                    
                    {/* --- PHONE CARD (Clickable) --- */}
                    <motion.div className="infoCard" variants={variants}>
                      <a href="tel:+918210239609" className="card-link">
                        <FiPhone className="icon" />
                        <h2>Phone</h2>
                        <span>+91 8210239609</span>
                      </a>
                    </motion.div>

                    {/* --- RESUME CARD --- */}
                    <motion.div className="infoCard resume-card" variants={variants}>
                      <a href="/resume.jpg" target="_blank" rel="noopener noreferrer" className="card-link">
                        <FiFileText className="icon" />
                        <h2>Resume</h2>
                        <span>View & Download</span>
                      </a>
                    </motion.div>
                </div>

                <motion.div className="messageSection" variants={variants}>
                    <h2>A Note of Thanks</h2>
                    <p>
                    Thank you for taking the time to explore my portfolio. I'm passionate
                    about creating beautiful and functional web experiences. If you have
                    a project in mind, want to collaborate, or just want to connect, please feel free to reach out!
                    </p>
                </motion.div>
            </motion.div>

            <motion.div className="formContainer" variants={variants}>
                <motion.form ref={formRef} onSubmit={sendEmail}>
                    <input type="text" required placeholder="Your Name" name="from_name" />
                    <input type="email" required placeholder="Your Email" name="reply_to" />
                    <textarea rows={8} placeholder="Your Message" name="message" required />
                    <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Submit"}
                    </button>
                    {error && <span className="message error">Failed to send. Please try again.</span>}
                    {success && <span className="message success">Message sent successfully! Thank you.</span>}
                </motion.form>
            </motion.div>
        </div>
      </motion.div>
      
      <footer className="footer">
        <div className="footer-content">
          <p className="namelogo">
          <img src="/namelogo.png" alt="namelogo" className="logo-image" />
          </p>
          <div className="social-icons">
            <a href="https://github.com/yoursyuvii" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/yoursyuvii/" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
            <a href="https://twitter.com/yoursyuvii" target="_blank" rel="noopener noreferrer"><FiTwitter /></a>
          </div>
          <p className="made-by">
            Made with ❤️ by <a href="https://www.linkedin.com/in/yoursyuvii/" target="_blank" rel="noopener noreferrer">yoursyuvii</a>
          </p>
          <p className="copyright">&copy; {new Date().getFullYear()} yoursyuvii. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
