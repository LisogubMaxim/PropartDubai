import { motion } from "framer-motion";
import { useCustomSelect } from "../../hooks/useCustomSelect";

import styles from "./menu.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Dropdown = ({ title, titleStyles = {}, items, handleItemOpen }) => {
  const [isDropOpen, setIsDropOpen, dropRef, dropItemsRef] = useCustomSelect();

  return (
    <li ref={dropRef}>
      <div
        className={styles.menuItem}
        onClick={() => setIsDropOpen(!isDropOpen)}
      >
        <h3 className={styles.itemTitle} style={titleStyles}>
          {title}
        </h3>
        {isDropOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {isDropOpen && (
        <motion.div
          ref={dropItemsRef}
          className={styles.dropdown}
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
            {items.map((item) => (
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
      )}
    </li>
  );
};

export default Dropdown;
