import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./contact.scss";

const variants = {
  initial: { y: 500, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
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
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setError(true);
        }
      );
  };

  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>yoursyuvii@example.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91 8210239609</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Message</h2>
          <span>
            Thank you for taking the time to view my portfolio. I'm passionate
            about creating beautiful and functional web experiences. If you have
            a project in mind or just want to connect, feel free to reach out!
          </span>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <motion.form ref={formRef} onSubmit={sendEmail} variants={variants}>
          <input type="text" required placeholder="Name" name="from_name" />
          <input type="email" required placeholder="Email" name="reply_to" />
          <textarea rows={8} placeholder="Message" name="message" required />
          <button type="submit">Submit</button>
          {error && <span className="message error">Failed to send message. Please try again.</span>}
          {success && <span className="message success">Message sent successfully! Thank you.</span>}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
