import React from "react";

import styles from "./filterPoint.module.scss";

const FilterPoint = ({ text }) => {
  return (
    <div className={styles.container}>
      <p>{text}</p>
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.313608 10.9341C-0.0555325 11.3032 -0.0731106 11.9624 0.322397 12.3403C0.700327 12.7358 1.3683 12.7183 1.73744 12.3491L6.00013 8.08643L10.2628 12.3491C10.6408 12.7271 11.2911 12.7358 11.6691 12.3403C12.0646 11.9624 12.0558 11.3032 11.6779 10.9253L7.41517 6.6626L11.6779 2.40869C12.0558 2.02197 12.0646 1.37158 11.6691 0.993652C11.2911 0.598145 10.6408 0.606934 10.2628 0.984863L6.00013 5.24756L1.73744 0.984863C1.3683 0.615723 0.700327 0.598145 0.322397 0.993652C-0.0731106 1.37158 -0.0555325 2.03076 0.313608 2.3999L4.5763 6.6626L0.313608 10.9341Z"
          fill="#6F707A"
        />
      </svg>
    </div>
  );
};

export default FilterPoint;