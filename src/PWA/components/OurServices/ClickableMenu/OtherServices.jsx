import React, { useState } from "react";

import { AccountingSupport } from "../AccountingSupport/AccountingSupport";
import { Employment } from "../Employment/Employment";
import { PowersOfAttorney } from "../PowersOfAttorney/PowersOfAttorney";
import TMRegistration from "../RegistrationTrademark/TMRegistration";
import { AnimatePresence } from "framer-motion";

import styles from "../ourservices.module.scss";

const OtherServices = ({ initialItem = null }) => {
  const [openSelectedItem, setOpenSelectedItem] = useState(initialItem);
  const [openModal, setOpenModal] = useState(false);

  const handleItemOpen = (item) => {
    setOpenSelectedItem(item);
    setOpenModal(true);
  };

  const closeMenu = () => {
    setOpenModal(false);
    setOpenSelectedItem(null);
  };

  let componentRendered;

  if (openSelectedItem === "Accounting support") {
    componentRendered = <AccountingSupport closeSlideMenu={closeMenu} />;
  } else if (openSelectedItem === "Employment") {
    componentRendered = <Employment closeSlideMenu={closeMenu} />;
  } else if (openSelectedItem === "Trademark registration") {
    componentRendered = <TMRegistration closeSlideMenu={closeMenu} />;
  } else if (openSelectedItem === "Attorney powers") {
    componentRendered = <PowersOfAttorney closeSlideMenu={closeMenu} />;
  }

  return (
    <>
      <div>
        <ul className={styles.service_list}>
          <li className={styles.service_list_item} onClick={() => handleItemOpen("Accounting support")}>
            <p>Accounting support</p>
          </li>
          <li className={styles.service_list_item} onClick={() => handleItemOpen("Employment")}>
            <p>Employment</p>
          </li>
          <li className={styles.service_list_item} onClick={() => handleItemOpen("Trademark registration")}>
            <p>TM Registration</p>
          </li>
          <li className={styles.service_list_item} onClick={() => handleItemOpen("Attorney powers")}>
            <p>Registration of powers of attorney</p>
          </li>
        </ul>
        <AnimatePresence>
          {openSelectedItem && componentRendered}
        </AnimatePresence>
      </div>
    </>
  );
};

export default OtherServices;
