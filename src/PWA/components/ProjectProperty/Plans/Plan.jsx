import { useState } from "react";
import roomIcon from "../../../assets/images/project-property/room-icon.svg";
import sizeIcon from "../../../assets/images/project-property/size-icon.svg";
import priceIcon from "../../../assets/images/project-property/price-icon.svg";

import s from "./plans.module.scss";

export const Plan = ({ plan, bedrooms, height = "220px" }) => {
  const [isImgLoading, setIsImgLoading] = useState(true);

  return (
    <>
      <div className={s.imgContainer} style={{ height }}>
        {isImgLoading && <div className="skeleton-loader"></div>}
        <img
          src={plan.image}
          className={s.img}
          onLoad={() => setIsImgLoading(false)}
          alt="Plan"
        />
      </div>
      <ul className={s.planInfo}>
        <li className={s.planItem}>
          <span className={s.planInfoIcon}>
            <img src={priceIcon} alt="Price" />
          </span>
          <span className={s.planInfoText}>
            AED {plan.price.toLocaleString()}
          </span>
        </li>
        <li className={s.planItem}>
          <span className={s.planInfoIcon}>
            <img src={sizeIcon} alt="Size" />
          </span>
          <span className={s.planInfoText}>
            {plan.size.toFixed(2)} ft<sup>2</sup>
          </span>
        </li>
        <li className={s.planItem}>
          <span className={s.planInfoIcon}>
            <img src={roomIcon} alt="Bedrooms" />
          </span>
          <span className={s.planInfoText}>{bedrooms || "N/A"}</span>
        </li>
      </ul>
    </>
  );
};
