import React, { useState } from "react";
import { motion } from "framer-motion";
import close from "../../assets/images/multiply.svg";
import ExploreAreas from "../area/ExploreAreas/ExploreAreas";
import ExploreDevelopers from "../developer/ExploreDevelopers/ExploreDevelopers";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import useLocalStorage from "use-local-storage";
import OurServices from "../OurServices/OurServices";

import styles from "./menu.module.scss";
import HowItWorks from "../HowItWorks/HowItWorks";

const Menu = ({ closeMenu }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [savedProjects] = useLocalStorage("saved-projects", []);

  const handleCloseItem = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const handleSelectItem = (item) => {
    if (typeof item === "string") {
      switch (item) {
        case "Our services":
          setSelectedItem(<OurServices handleClose={handleCloseItem} />);
          break;
        case "How we works":
          setSelectedItem(<HowItWorks setIsModalOpen={handleCloseItem} />);
          break;
        default:
          console.log("Page not found");
          break;
      }
    } else {
      setSelectedItem(item);
    }
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.div className={styles.backdrop} onClick={closeMenu}></motion.div>
      <motion.div
        className="main-container modal-window"
        style={{ left: "unset", width: "70%", zIndex: 8100 }}
        variants={{
          hidden: { x: "90%" },
          visible: { x: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.2 }}
      >
        <div className={styles.menuHeader}>
          <h1 className={styles.mainTitle}>Menu</h1>
          <button className="circle-btn shadow" onClick={closeMenu}>
            <img src={close} alt="close btn" />
          </button>
        </div>
        <ul className={styles.menuList}>
          <li className={styles.menuItem} onClick={closeMenu}>
            <h3 className={styles.itemTitle}>
              <Link to="/phone" className={styles.itemLink}>
                Main page
              </Link>
            </h3>
          </li>
          <li
            className={styles.menuItem}
            onClick={() =>
              handleSelectItem(<ExploreAreas handleClose={handleCloseItem} />)
            }
          >
            <h3 className={styles.itemTitle}>Areas</h3>
          </li>
          <li
            className={styles.menuItem}
            onClick={() =>
              handleSelectItem(
                <ExploreDevelopers handleClose={handleCloseItem} />
              )
            }
          >
            <h3 className={styles.itemTitle}>Developers</h3>
          </li>
          <li className={styles.menuItem}>
            <h3 className={styles.itemTitle}>
              <Link to="/phone/map" className={styles.itemLink}>
                Map
              </Link>
            </h3>
          </li>
          <Dropdown
            title="Consulting"
            titleStyles={{ color: "#333863" }}
            items={["How we works", "Our services"]}
            handleItemOpen={handleSelectItem}
          />
          <li className={styles.menuItem}>
            <h3 className={styles.itemTitle}>
              <Link to="/phone/saved-projects" className={styles.itemLink}>
                <span>Saved</span>
                <span className={styles.savedCount}>
                  {savedProjects.length}
                </span>
              </Link>
            </h3>
          </li>
        </ul>
      </motion.div>
      {isModalOpen && selectedItem}
    </>
  );
};

export default Menu;
