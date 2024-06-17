import React, { useState } from "react";
import WidthContainer from "../UI/WidthContainer";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PopupMenuArea from "../PopupMenu/PopupMenuArea";
import PopupMenuCons from "../PopupMenu/PopupMenuCons";
import SelectLanguage from "../UI/SelectLanguage";
import SelecCurrency from "../UI/SelecCurrency";
import { useCurrency } from "../CurrencyProvider";
import "./headerSecond.scss";

const index = ({ floorPopupActive }) => {
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
        <header
            className={`headerSecond ${floorPopupActive ? "floorPopupActive" : ""}`}
        >
            <WidthContainer>
                <nav className="headerSecond__wrap">
                    <ul className="headerSecond__wrap-list">
                        <li className="headerSecond__wrap-item">
                            <Link to="/">
                                <img
                                    src="/assets/Global/footerLogo.svg"
                                    alt="Header logo"
                                    width={88.41}
                                    height={34}
                                />
                            </Link>
                        </li>
                        <li className="headerSecond__wrap-item contact">
                            <div>
                                <Link
                                    to="https://www.instagram.com/pro.part.ae?igsh=dzIzYjkycW5wdHMz"
                                    target="_blank"
                                >
                                    <img
                                        src="/assets/components/Footer/instagram.svg"
                                        alt="Logo image"
                                        width={24}
                                        height={24}
                                    />
                                </Link>
                                <Link
                                    to="https://api.whatsapp.com/send/?phone=971521038793&text&type=phone_number&app_absent=0"
                                    target="_blank"
                                >
                                    <img
                                        src="/assets/components/Footer/whatsapp.svg"
                                        alt="Logo image"
                                        width={24}
                                        height={24}
                                    />
                                </Link>
                                <Link
                                    to="https://t.me/pro_partUAE"
                                    target="_blank"
                                >
                                    {" "}
                                    <img
                                        src="/assets/components/Footer/telegram.svg"
                                        alt="Logo image"
                                        width={24}
                                        height={24}
                                    />
                                </Link>
                            </div>
                            <div className="headerSecond__wrap-phone">
                                <img
                                    src="/assets/Global/phoneOrange.svg"
                                    alt="Phone image"
                                    width={18}
                                    height={18}
                                />
                                <Link to="tel:+971521038793">
                                    +971 52 103 8793
                                </Link>
                            </div>
                            <SelectLanguage
                                img="/assets/components/Header/arrowSecondHeader.svg"
                                width={10}
                                height={5}
                            >
                                <img
                                    src="/assets/components/Header/planet.svg"
                                    alt="Image select language"
                                    width={18}
                                    height={18}
                                />
                            </SelectLanguage>
                            <SelecCurrency
                                onCurrencyChange={handleCurrencyChanged}
                                img="/assets/components/Header/arrowSecondHeader.svg"
                                width={10}
                                height={5}
                            >
                                <img
                                    src="/assets/components/Header/dollar.svg"
                                    alt="Image select language"
                                    width={18}
                                    height={18}
                                />
                            </SelecCurrency>
                        </li>
                    </ul>
                    <ul className="headerSecond__wrap-list">
                        <li className="headerFirst__wrap-buttons">
                            <Link
                                to="/"
                                className="headerFirst__wrap-btn second"
                            >
                                {t("Header__Home")}
                            </Link>
                            <Link
                                to="/map"
                                className="headerFirst__wrap-btn second"
                            >
                                {t("Header__Map")}
                            </Link>
                            <Link
                                to="/properties"
                                className="headerFirst__wrap-btn second"
                            >
                                {t("Header__Buy")}
                            </Link>
                            <button
                                className="headerFirst__wrap-btn second"
                                onMouseEnter={() => setPopupShowArea(true)}
                                onMouseLeave={() => setPopupShowArea(false)}
                            >
                                {t("Header__Areas")}
                            </button>
                            <Link
                                to="/developers"
                                className="headerFirst__wrap-btn second"
                            >
                                {t("Header__Developers")}
                            </Link>
                            <button
                                className="headerFirst__wrap-btn second"
                                onMouseEnter={() => setPopupShowConsu(true)}
                                onMouseLeave={() => setPopupShowConsu(false)}
                            >
                                {t("Header__Consulting")}
                            </button>
                            <Link
                                to="/concierge"
                                className="headerFirst__wrap-btn second"
                            >
                                {t("Header__Concierge")}
                            </Link>
                            <Link
                                to="/about"
                                className="headerFirst__wrap-btn second"
                            >
                                {t("Header__AboutUs")}
                            </Link>
                        </li>
                        <li className="headerSecond__wrap-itemButton">
                            <Button className="button--orange">
                                <Link to="/map">{t("Header__BtbOrange")}</Link>
                            </Button>
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
            <div className="headerSecond__bottomLine"></div>
        </header>
    );
};

export default index;
