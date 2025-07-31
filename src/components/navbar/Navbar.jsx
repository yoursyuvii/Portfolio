import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="wrapper">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span
            className="name"
            whileHover={{ 
              scale: 1.05,
              filter: "drop-shadow(0px 0px 15px #dfdf09ef)"
            }}
            transition={{ duration: 0.3 }}
          >
            yoursyuvii
          </motion.span>
          <motion.div 
            className="name-underline"
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <motion.div 
          className="social"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { href: "https://www.linkedin.com/in/yoursyuvii/", src: "/linkedin.png", alt: "LinkedIn", hoverColor: "#0077b5" },
            { href: "https://github.com/yoursyuvii", src: "/git.png", alt: "GitHub", hoverColor: "#333" },
            { href: "https://www.codechef.com/users/yourssyuvii", src: "/codechef.png", alt: "CodeChef", hoverColor: "#5B4638" },
            { href: "https://www.instagram.com/yoursyuvii", src: "/instagram.png", alt: "Instagram", hoverColor: "#E4405F" }
          ].map((social, index) => (
            <motion.a
              key={social.alt}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              whileHover={{ 
                scale: 1.2,
                rotate: 5,
                filter: `drop-shadow(0px 0px 10px ${social.hoverColor}80)`
              }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={social.src} alt={social.alt} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
