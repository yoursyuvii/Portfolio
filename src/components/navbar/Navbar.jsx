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

        
      </div>
    </motion.div>
  );
};

export default Navbar;
