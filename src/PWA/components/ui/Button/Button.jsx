import React from "react";
import styles from "./button.module.scss";

const Button = ({
  color,
  backgroundColor,
  text,
  borderProp,
  isDisabled = false,
  onClick,
}) => {
  return (
    <button
      className={styles.button}
      style={{
        color: color,
        backgroundColor: backgroundColor,
        border: borderProp ? borderProp : "none",
      }}
      disabled={isDisabled}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
