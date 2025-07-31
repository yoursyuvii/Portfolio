import { motion } from "framer-motion";
import "./links.scss";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Links = ({ open, setOpen }) => {
  const items = [
    { name: "Homepage", href: "#Homepage" },
    { name: "About", href: "#about" },
    { name: "Project", href: "#portfolio" },
    { name: "Certificate", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <motion.div className="links" variants={variants} animate={open ? "open" : "closed"}>
      {items.map((item) => (
        <motion.a
          href={item.href}
          key={item.name}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLinkClick}
        >
          {item.name}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
