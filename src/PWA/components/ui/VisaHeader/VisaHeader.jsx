import PropTypes from "prop-types";
import close from "../../../assets/images/multiply.svg";

import s from "./visa-header.module.scss";

const VisaHeader = ({ title, handleClose }) => {
  return (
    <div className={s.visaHeader}>
      <h2 className={s.title}>{title}</h2>
      <button className={`circle-btn ${s.closeBtn}`} onClick={handleClose}>
        <img src={close} alt="close btn" />
      </button>
    </div>
  );
};

VisaHeader.propTypes = {
  title: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default VisaHeader;
