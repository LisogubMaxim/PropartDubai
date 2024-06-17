import noResult from "../../../assets/images/noResult.png";

import s from "./no-result.module.scss";

const NoResult = () => {
  return (
    <div className={s.noResult}>
      <img src={noResult} alt="No result" />
      <p>There are no results matching your search. Please try again.</p>
    </div>
  );
};

export default NoResult;
