import { TbArrowsSort } from "react-icons/tb";
import closeSvg from "../../../assets/images/cross.svg";

import s from "./explore-header.module.scss";

const ExploreHeader = ({
  title,
  handleSearch,
  searchPlaceholder,
  isSort,
  setIsSort,
  handleClose,
}) => {
  return (
    <div className={s.header}>
      <div className={s.top}>
        <div className={s.title}>{title}</div>
        <button className={s.close} onClick={handleClose}>
          <img src={closeSvg} alt="close btn" />
        </button>
      </div>
      <div className={s.bottom}>
        <div className={s.searchInput}>
          <input
            type="text"
            className={s.input}
            onChange={handleSearch}
            placeholder={searchPlaceholder}
          />
        </div>
        <button
          className={`circle-btn shadow ${s.sortBtn} ${
            isSort ? s.sortBtnActive : ""
          }`}
          onClick={() => setIsSort(!isSort)}
        >
          <TbArrowsSort size="20px" color={`${isSort ? "white" : "#6f707a"}`} />
        </button>
      </div>
    </div>
  );
};

export default ExploreHeader;
