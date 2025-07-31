import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";

const Sidebar = ({ open, setOpen }) => {
  // Animation variants for the sidebar background
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
        damping: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links open={open} setOpen={setOpen} />
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
