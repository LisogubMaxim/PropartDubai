import { Link } from "react-router-dom";
import CurrencyLogo from "../../../../../components/UI/CurrencyLogo";
import { t } from "i18next";
import { useCurrency } from "../../../../../components/CurrencyProvider";

import s from "./area-card.module.scss";

const AreaCard = ({ area, height }) => {
  const { selectedCurrency, convertPrice } = useCurrency();

  return (
    <div className={s.areaContainer} style={{ height }}>
      <Link to={`/phone/about-area/${area.title}`} className={s.link}>
        <div className="darker-img"></div>
        <img src={area.bgSmall} className={s.img} alt={area.title} />
        <div className={s.areaInfo}>
          <h3 className={s.areaTitle}>{area.title}</h3>
          <span className={s.areaText}>
            {typeof area.priceFrom === "number" ? (
              <>
                {t("r_pay5")} <CurrencyLogo currency={selectedCurrency} />{" "}
                {convertPrice(area.priceFrom)}
              </>
            ) : (
              area.priceFrom
            )}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default AreaCard;
