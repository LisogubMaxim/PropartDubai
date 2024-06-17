import React from "react";
import Button from "../UI/Button";
import BlockContainer from "../UI/BlockContainer";
import { Link } from "react-router-dom";
import "./popupSample.scss";
import { useTranslation } from "react-i18next";

const index = ({ handler, children, title, img, linkTitle }) => {
  const close = () => {
    handler(false);
  };

  const { t } = useTranslation();

  return (
    <div
      className="popupMainP"
      onMouseEnter={() => handler(true)}
      onMouseLeave={() => handler(false)}
    >
      <div className="popupMainP__content">
        <BlockContainer className="blockContainer--orange">
          <Link to={linkTitle}>
            <h4 className="popupMainP__content-title" onClick={() => close()}>
              {title}
              <svg
                width="15"
                height="10"
                viewBox="0 0 8 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="popupMainP__content-img"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.260347 14.7254C-0.0867825 14.3593 -0.0867825 13.7657 0.260347 13.3996L5.85406 7.49999L0.260347 1.60039C-0.0867831 1.23429 -0.0867831 0.640666 0.260347 0.274571C0.607486 -0.0915232 1.1703 -0.0915232 1.51744 0.274571L7.73967 6.83708C8.08678 7.20318 8.08678 7.7968 7.73967 8.1629L1.51744 14.7254C1.1703 15.0915 0.607486 15.0915 0.260347 14.7254Z"
                  fill="black"
                />
              </svg>
            </h4>
          </Link>
          {children}
          <ul className="popupMainP__content--list">
            <li className="popupMainP__content--item next">
              <Link to="/consulting/companyRegistration">
                <span className="next" onClick={() => close()}>
                  {t("popumMenuAreas__item1")}
                </span>
              </Link>
              <Link to="/concierge">
                <span className="next" onClick={() => close()}>
                  {t("popumMenuAreas__item2")}
                </span>
              </Link>
            </li>

            <li className="popupMainP__content--item" onClick={() => close()}>
              <Link to="/consulting/visa">
                <span className="next"> {t("popumMenuAreas__item3")}</span>
              </Link>
            </li>
          </ul>
          <div className="popupMainP__content-line"></div>
          <h4 className="popupMainP__content-subtitle">
            {t("popumMenuAreas__title2")}
          </h4>
          <div className="popupMainP__content-buttons">
            <Link to="/area/1">
              <Button
                className="button--inactiveMainFilter"
                handler={() => close()}
              >
                Business Bay
              </Button>
            </Link>
            <Link to="/area/2">
              <Button
                className="button--inactiveMainFilter"
                handler={() => close()}
              >
                Palm Jumeirah
              </Button>
            </Link>
          </div>
        </BlockContainer>
        <BlockContainer>
          <Link to="/area/7">
            <div
              className="popupMainP__content-bg"
              style={{
                backgroundImage: `url(${img})`,
              }}
              width={661}
              height={335}
            >
              <div className="popupMainP__content-texts">
                <div>
                  <h4 className="popupMainP__content-descr">
                    {t("popumMenuAreas__descr1")}
                  </h4>
                  <button className="popupMainP__content-more">
                    {t("popumMenuAreas__btn")}
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </BlockContainer>
      </div>
    </div>
  );
};

export default index;
