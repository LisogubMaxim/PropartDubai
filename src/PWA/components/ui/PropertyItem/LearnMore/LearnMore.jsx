import React from "react";
import styles from "./learnMore.module.scss";

const LearnMore = ({ title, handleOpen }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.secondTitle}>{title}</h2>
      <button
        className={styles.moreBtn}
        onClick={handleOpen}
      >
        More
      </button>
    </div>
  );
};

export default LearnMore;
