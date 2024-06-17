import React, { useState } from "react";
import WidthContainer from "../UI/WidthContainer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "../UI/Button";
import PopupMenuArea from "../PopupMenu/PopupMenuArea";
import PopupMenuCons from "../PopupMenu/PopupMenuCons";
import SelectLanguage from "../UI/SelectLanguage";
import SelecCurrency from "../UI/SelecCurrency";
import { useCurrency } from "../CurrencyProvider";
import "./headerFirst.scss";

const index = () => {
  const [popupShowArea, setPopupShowArea] = useState(false);
  const [popupShowConsu, setPopupShowConsu] = useState(false);
  const { handleCurrencyChange } = useCurrency();
  const { t } = useTranslation();

  const handleCurrencyChanged = (currency) => {
    handleCurrencyChange(currency);
  };

  const closePopup = () => {
    setPopupShowArea(false);
    setPopupShowConsu(false);
  };

  return (
    <header className="headerFirst">
      <WidthContainer>
        <nav className="headerFirst__wrap">
          <ul className="headerFirst__wrap-list">
            <li className="headerFirst__wrap-item">
              <Link to="/">
                <img
                  src="/assets/components/Header/logo.svg"
                  alt="Header logo"
                  width={88.41}
                  height={34}
                />
              </Link>
            </li>
            <li className="headerFirst__wrap-buttons">
              <Link to="/" className="headerFirst__wrap-btn">
                {t("Header__Home")}
              </Link>
              <Link to="/map" className="headerFirst__wrap-btn">
                {t("Header__Map")}
              </Link>
              <Link to="/properties" className="headerFirst__wrap-btn">
                {t("Header__Buy")}
              </Link>
              <button
                className="headerFirst__wrap-btn"
                onMouseEnter={() => setPopupShowArea(true)}
                onMouseLeave={() => setPopupShowArea(false)}
              >
                {t("Header__Areas")}
              </button>
              <Link to="/developers" className="headerFirst__wrap-btn">
                {t("Header__Developers")}
              </Link>
              <button
                className="headerFirst__wrap-btn"
                onMouseEnter={() => setPopupShowConsu(true)}
                onMouseLeave={() => setPopupShowConsu(false)}
              >
                {t("Header__Consulting")}
              </button>
              <Link to="/concierge" className="headerFirst__wrap-btn">
                {t("Header__Concierge")}
              </Link>
              <Link to="/about" className="headerFirst__wrap-btn">
                {t("Header__AboutUs")}
              </Link>
            </li>
            <li className="headerFirst__wrap-contact">
              <Link to="tel:+971521038793" className="headerFirst__wrap-phone">
                <img
                  src="/assets/components/Header/phone.svg"
                  alt="Image phone"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                className="headerFirst__wrap-mail"
                to="mailto:info@propart.com"
              >
                <img
                  src="/assets/components/Header/mail.svg"
                  alt="Image mail"
                  width={24}
                  height={24}
                />
              </Link>
              <SelectLanguage
                img="/assets/components/Header/arrowFirstHeader.svg"
                width={12}
                height={5}
              />
              {/* <SelecCurrency onCurrencyChange={handleCurrencyChanged} /> */}
              <SelecCurrency
                onCurrencyChange={handleCurrencyChanged}
                img="/assets/components/Header/arrowFirstHeader.svg"
                width={12}
                height={5}
              />
            </li>
          </ul>
        </nav>
      </WidthContainer>
      <PopupMenuArea
        state={popupShowArea}
        setState={setPopupShowArea}
        closePopup={closePopup}
      />
      <PopupMenuCons
        state={popupShowConsu}
        setState={setPopupShowConsu}
        closePopup={closePopup}
      />
      {popupShowArea && (
        <div className="headerFirst__blur">
          <div className="headerFirst__blur-blur"></div>
        </div>
      )}
      {popupShowConsu && (
        <div className="headerFirst__blur">
          <div className="headerFirst__blur-blur"></div>
        </div>
      )}
    </header>
  );
};

export default index;
