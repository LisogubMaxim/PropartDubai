import React from "react";
import PopupSample from "../PopupSample";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function PopupMenuArea({ state, setState, closePopup }) {
  const { t } = useTranslation();

  return (
    <div className={`headerFirst__dropMenuBg ${state ? "active" : ""}`}>
      <div className="headerFirst__dropMenuBg-blur">
        <div className="headerFirst__dropMenuBg-content">
          <PopupSample
            handler={setState}
            title={t("popumMenuAreas__title1")}
            img="/assets/components/Header/popupArea.png"
            linkTitle="/areasWithMap"
          >
            <ul className="popupMainP__content--list">
              <li className="popupMainP__content--item">
                <Link onClick={() => closePopup()} to="/area/1">
                  Business Bay
                </Link>
                <Link onClick={() => closePopup()} to="/area/7">
                  Creek Harbour
                </Link>
                <Link onClick={() => closePopup()} to="/area/6">
                  JLT
                </Link>
                <Link onClick={() => closePopup()} to="/area/8">
                  JVC
                </Link>
                <Link onClick={() => closePopup()} to="/area/3">
                  MJL
                </Link>
              </li>
              <li className="popupMainP__content--item">
                <Link onClick={() => closePopup()} to="/area/4">
                  Madinat Jumeirah Living
                </Link>
                <Link onClick={() => closePopup()} to="/area/5">
                  Damac Lagoons
                </Link>
                <Link onClick={() => closePopup()} to="/area/2">
                  Palm Jumeirah
                </Link>
                <Link onClick={() => closePopup()} to="/area/9">
                  Bluewaters Island
                </Link>
              </li>
            </ul>
          </PopupSample>
        </div>
      </div>
    </div>
  );
}

export default PopupMenuArea;
