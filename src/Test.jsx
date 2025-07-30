import { motion } from "framer-motion";

const Test = () => {
  // Variants for the parent container (the <ul>)
  // This will orchestrate the animation of its children
  const listVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child's animation
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  // Variants for the child elements (the <li>)
  const itemVariants = {
    visible: {
      opacity: 1,
      x: 0, // End position
    },
    hidden: {
      opacity: 0,
      x: -100, // Start position (from the left)
    },
  };

  const items = ["item1", "item2", "item3", "item4"];

  return (
    <div className="course">
      {/* This list will now animate automatically on load */}
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={listVariants}
      >
        {items.map((item) => (
          <motion.li variants={itemVariants} key={item}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
