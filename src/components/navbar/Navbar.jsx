import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          yoursyuvii
        </motion.span>
        
        {/* CORRECTED: All social links are now inside the .social div */}
        <div className="social">
          <a href="https://www.linkedin.com/in/yoursyuvii/">
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/yoursyuvii">
            <img src="/git.png" alt="Git" />
          </a>
          <a href="https://www.codechef.com/users/yourssyuvii">
            <img src="/codechef.png" alt="codechef" />
          </a>
          <a href="https://www.instagram.com/yoursyuvii">
            <img src="/instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;