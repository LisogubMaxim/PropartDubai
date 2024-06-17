import React from "react";
import { motion } from "framer-motion";

import styles from "./dropmenu.module.scss";

const registrationServices = ["Freezone", "Mainland", "Comparison"];

const visaServices = [
  "Golden visa",
  "Freelance visa",
  "Investor visa",
  "Retirement visa",
  "Employee visa",
];

const DropMenu = ({ index, handleItemOpen }) => {
  let list;

  if (index === 0) {
    list = registrationServices;
  } else if (index === 1) {
    list = visaServices;
  }

  return (
    <motion.div
      className={styles.submenu}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      exit={{
        opacity: [1, 0.5, 0],
        y: [0, -2, -5, -7, -10],
        transition: { duration: 0.2 },
      }}
    >
      <ul className={styles.submenu_list}>
        {list.map((item) => (
          <li
            key={item}
            className={styles.submenu_item}
            onClick={() => handleItemOpen(item)}
          >
            <span className={styles.submenu_text}>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default DropMenu;
