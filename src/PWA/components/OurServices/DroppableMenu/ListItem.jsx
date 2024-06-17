import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import EmployeeVisa from "../Vises/EmployeeVisa/EmployeeVisa";
import FreelanceVisa from "../Vises/FreelanceVisa/FreelanceVisa";
import GoldenVisa from "../Vises/GoldenVisa/GoldenVisa";
import { InvestorVisa } from "../Vises/InvestorVisa/InvestorVisa";
import RetirementVisa from "../Vises/RetirementVisa/RetirementVisa";

import Freezone from "../CompanyRegistration/Freezone/Freezone"
import Mainland from "../CompanyRegistration/Mainland/Mainland"
import Comparison from "../CompanyRegistration/Comparison/Comparison"

import DropMenu from "./DropMenu";

import styles from "../ourservices.module.scss";

const ListItem = ({ item, i, initialMenuOpened = [] }) => {
  const [menuOpened, setMenuOpened] = useState(initialMenuOpened);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSlideModalOpen, setIsSlideModalOpen] = useState(false);

  const handleItemOpen = (item) => {
    if (i === 0) {
      setIsSlideModalOpen(true);
    } else {
      setIsModalOpen(true);
    }

    setSelectedItem(item);
  }

  const handleCloseItem = () => {
    if (i === 0) {
      setIsSlideModalOpen(false);
    } else {
      setIsModalOpen(false);
    }

    setSelectedItem(null);    
  }

  let componentRendered;

  if (selectedItem === "Golden visa") {
    componentRendered = <GoldenVisa handleClose={handleCloseItem} />;
  } else if (selectedItem === "Freelance visa") {
    componentRendered = <FreelanceVisa handleClose={handleCloseItem} />;
  } else if (selectedItem === "Investor visa") {
    componentRendered = <InvestorVisa handleClose={handleCloseItem} />;
  } else if (selectedItem === "Retirement visa") {
    componentRendered = <RetirementVisa handleClose={handleCloseItem} />;
  } else if (selectedItem === "Employee visa") {
    componentRendered = <EmployeeVisa handleClose={handleCloseItem} />;
  } else if (selectedItem === "Freezone") {
    componentRendered = <Freezone closeSlideMenu={handleCloseItem} />;
  } else if (selectedItem === "Mainland") {
    componentRendered = <Mainland closeSlideMenu={handleCloseItem} />;
  } else if (selectedItem === "Comparison") {
    componentRendered = <Comparison closeSlideMenu={handleCloseItem} />;
  }

  const toggleMenuHandler = (index) => {
    if (menuOpened.includes(index)) {
      setMenuOpened(menuOpened.filter((item) => item !== index));
    } else {
      setMenuOpened([...menuOpened, index]);
    }
  };

  return (
    <>
      <li
        key={i}
        onClick={() => {
          toggleMenuHandler(i);
        }}
        className={`${styles.service_list_item} ${menuOpened.includes(i) ? styles.li_activeClass : ""}`}
      >
        <p className={styles.service_list_itemName}>{item}</p>
        <div>
          {menuOpened.includes(i) ? (
            <IoIosArrowUp
              className={
                menuOpened.includes(i)
                  ? `${styles.iconArrow} ${styles.li_activeClass}`
                  : styles.iconArrow
              }
            />
          ) : (
            <IoIosArrowDown className={styles.iconArrow} />
          )}
        </div>
      </li>
      <AnimatePresence>
        {menuOpened.includes(i) &&
          <DropMenu index={i} handleItemOpen={handleItemOpen} />
        }
      </AnimatePresence>
      {isModalOpen && componentRendered}
      <AnimatePresence>
        {isSlideModalOpen && componentRendered}
      </AnimatePresence>
    </>
  );
};

ListItem.propTypes = {
  item: PropTypes.string,
  i: PropTypes.number,
};

export default ListItem;
