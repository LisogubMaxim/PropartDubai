import CurrencyLogo from "../../../../components/UI/CurrencyLogo";
import { useCurrency } from "../../../../components/CurrencyProvider";
import roomIcon from "../../../assets/images/project-property/room-icon.svg";
import sizeIcon from "../../../assets/images/project-property/size-icon.svg";
import priceIcon from "../../../assets/images/project-property/price-icon.svg";

import s from "./details.module.scss";

export const Details = ({ bedrooms = null, size = null, price = null }) => {
  const { selectedCurrency, convertPrice } = useCurrency();

  return (
    <ul className={s.details}>
      <li className={s.detail}>
        <span className={s.detailIcon}>
          <img src={roomIcon} alt="Room" />
        </span>
        <span className={s.detailText}>{bedrooms || "0"} bdrms</span>
      </li>
      <li className={s.detail}>
        <span className={s.detailIcon}>
          <img src={sizeIcon} alt="Room" />
        </span>
        <span className={s.detailText}>
          {size || "0"} ft<sup>2</sup>
        </span>
      </li>
      <li className={s.detail}>
        <span className={s.detailIcon}>
          <img src={priceIcon} alt="Room" />
        </span>
        <span className={s.detailText}>
          <CurrencyLogo currency={selectedCurrency} />{" "}
          {convertPrice(price / size)}/ft<sup>2</sup>
        </span>
      </li>
    </ul>
  );
};
