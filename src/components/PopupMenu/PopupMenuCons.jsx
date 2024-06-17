import React from "react";
import PopupSample from "../PopupSample";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PopupMenuCons = ({ state, setState, closePopup }) => {
  const { t } = useTranslation();

  return (
    <div className={`headerFirst__dropMenuBg ${state ? "active" : ""}`}>
      <div className="headerFirst__dropMenuBg-blur">
        <div className="headerFirst__dropMenuBg-content">
          <PopupSample
            handler={setState}
            title="Propart Consulting Department"
            img="/assets/components/Header/popupConsu.png"
            linkTitle="/consulting/services"
          >
            <ul className="popupMainP__content--list">
              <li className="popupMainP__content--item">
                <Link onClick={() => closePopup()} to="/consulting/visa">
                  {t("popumMenuCons__item1")}
                </Link>
                <Link onClick={() => closePopup()} to="/consulting/accounting">
                  {t("popumMenuCons__item2")}
                </Link>
                <Link onClick={() => closePopup()} to="/consulting/tm">
                  {t("popumMenuCons__item3")}
                </Link>
                <Link
                  onClick={() => closePopup()}
                  to="/consulting/poweOfAttorney"
                >
                  {t("popumMenuCons__item4")}
                </Link>
              </li>
              <li className="popupMainP__content--item">
                <Link
                  onClick={() => closePopup()}
                  to="/consulting/companyRegistration"
                >
                  {t("popumMenuCons__item5")}
                </Link>
                <Link
                  onClick={() => closePopup()}
                  to="/consulting/accountAuditing"
                >
                  {t("popumMenuCons__item6")}
                </Link>
                <Link
                  onClick={() => closePopup()}
                  to="/consulting/localCompany"
                >
                  {t("popumMenuCons__item7")}
                </Link>
              </li>
            </ul>
          </PopupSample>
        </div>
      </div>
    </div>
  );
};

export default PopupMenuCons;
