import React from "react";
import WidthContainer from "../UI/WidthContainer";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./footerMain.scss";

const index = () => {
    const { t } = useTranslation();

    return (
        <footer className="footerMain">
            <WidthContainer>
                <ul className="footerMain__list">
                    <li className="footerMain__item">
                        <Link to="/">
                            <img
                                src="/assets/Global/footerLogo.svg"
                                alt="Footer logo"
                                width={142.05}
                                height={56}
                            />
                        </Link>
                        <p className="footerMain__item-descr">
                            {t("Footer__Descr")}
                        </p>
                        <div className="footerMain__item-logos">
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
                            <Link to="https://t.me/pro_partUAE" target="_blank">
                                {" "}
                                <img
                                    src="/assets/components/Footer/telegram.svg"
                                    alt="Logo image"
                                    width={24}
                                    height={24}
                                />
                            </Link>
                            <Link
                                to="https://m.facebook.com/people/Property-Partners-Real-Estate-Agency-in-Dubai/61550742167754/"
                                target="_blank"
                            >
                                {" "}
                                <img
                                    src="/assets/components/Footer/facebook.svg"
                                    alt="Logo image"
                                    width={24}
                                    height={24}
                                />
                            </Link>
                        </div>
                    </li>
                    <li>
                        <ul className="footerMain__listLink">
                            <li className="footerMain__itemLink">
                                <span>{t("Footer__QuickMenue")}</span>
                                <Link
                                    to="/"
                                    className="footerMain__itemLink-link"
                                >
                                    {t("Footer__QuickMenue__Home")}
                                </Link>
                                <Link
                                    to="/properties"
                                    className="footerMain__itemLink-link"
                                >
                                    {t("Footer__QuickMenue__Buy")}
                                </Link>
                                <Link
                                    to="/areasWithMap"
                                    className="footerMain__itemLink-link"
                                >
                                    {t("Footer__QuickMenue__Areas")}
                                </Link>
                                <Link
                                    to="/developers"
                                    className="footerMain__itemLink-link"
                                >
                                    {t("Footer__QuickMenue__Developers")}
                                </Link>
                                <Link
                                    to="/consulting/services"
                                    className="footerMain__itemLink-link"
                                >
                                    {t("Footer__QuickMenue__Consulting")}
                                </Link>
                                <Link
                                    to="/concierge"
                                    className="footerMain__itemLink-link"
                                >
                                    {t("Footer__QuickMenue__Concierge")}
                                </Link>
                                <Link
                                    to="/about"
                                    className="footerMain__itemLink-link"
                                >
                                    {t("Footer__QuickMenue__AboutUs")}
                                </Link>
                            </li>
                            <li className="footerMain__itemLink">
                                <span>{t("Footer__Consulting")}</span>
                                <Link
                                    to="/consulting/services"
                                    className="footerMain__itemLink-link"
                                >
                                    {t("Footer__Consulting__General")}
                                </Link>
                                <Link
                                    to="/consulting/visa"
                                    className="footerMain__itemLink-link"
                                >
                                    {t("Footer__Consulting__Visa")}
                                </Link>
                                <Link
                                    to="/consulting/companyRegistration"
                                    className="footerMain__itemLink-link"
                                >
                                    {t("Footer__Consulting__Mainland")}
                                </Link>
                                <Link
                                    to="/consulting/accounting"
                                    className="footerMain__itemLink-link"
                                >
                                    {t("Footer__Consulting__Accounting")}
                                </Link>
                                <Link
                                    to="/consulting/accountAuditing"
                                    className="footerMain__itemLink-link"
                                >
                                    {t("Footer__Consulting__Employment")}
                                </Link>
                                <Link
                                    to="/consulting/localCompany"
                                    className="footerMain__itemLink-link"
                                >
                                    {t("Footer__Consulting__BankAccount")}
                                </Link>
                                <Link
                                    to="/consulting/tm"
                                    className="footerMain__itemLink-link"
                                >
                                    {t("Footer__Consulting__TMRegistration")}
                                </Link>
                            </li>
                            <li className="footerMain__itemLink">
                                <span>{t("Footer__ContactInfo")}</span>
                                <Link
                                    className="footerMain__itemLink-info"
                                    to="https://maps.app.goo.gl/DQ5aMLsp6ph4KmMR7"
                                >
                                    {t("Footer__Consulting__Address")}
                                </Link>
                                <Link
                                    to="tel:+971521038793"
                                    className="footerMain__itemLink-info"
                                >
                                    +971 52 103 8793
                                </Link>
                                <Link
                                    to="mailto:info@propart.com"
                                    className="footerMain__itemLink-info"
                                >
                                    info@propart.com
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className="footerMain__listCertificate">
                            <li className="footerMain__itemCertificate">
                                <Link
                                    to="https://drive.google.com/file/d/1-4UXmCB6sCdHSLMqshg1Uk6zdAa57yEU/view?usp=sharing"
                                    target="_blank"
                                >
                                    <div className="footerMain__itemCertificate-img">
                                        <img
                                            src="/assets/components/Footer/pdf.svg"
                                            alt="Image pdf document"
                                        />
                                    </div>
                                    <div className="footerMain__itemCertificate-text">
                                        {t("Footer__ReraCertificate")}
                                    </div>
                                </Link>
                            </li>
                            <li className="footerMain__itemCertificate">
                                <Link
                                    to="https://drive.google.com/file/d/1aGPEjkDXpIU2mYx-ZAtaEUjZhtO1XLUi/view?usp=sharing"
                                    target="_blank"
                                >
                                    <div className="footerMain__itemCertificate-img">
                                        <img
                                            src="/assets/components/Footer/pdf.svg"
                                            alt="Image pdf document"
                                        />
                                    </div>
                                    <div className="footerMain__itemCertificate-text">
                                        {t("Footer__OwnerBrokerID")}
                                    </div>
                                </Link>
                            </li>
                            <li className="footerMain__itemCertificate">
                                <Link
                                    to="https://drive.google.com/file/d/1XrSwSfvSfkjMsHdnZmV1KmXaeO4DFQx9/view?usp=sharing"
                                    target="_blank"
                                >
                                    <div className="footerMain__itemCertificate-text trade">
                                        {t("Footer__CompanyTradeLicense")}
                                    </div>
                                </Link>
                            </li>
                            <li className="footerMain__itemCertificate button">
                                <Link
                                    className="button--orange"
                                    to="tel:+971521038793"
                                >
                                    <img
                                        src="/assets/components/Header/phone.svg"
                                        alt="Image phone"
                                    />
                                    {t("Footer__CallUsBtn")}
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="footerMain__descr">
                    <p>{t("footer__descr1")}</p>
                </div>
                <div className="footerMain__text">
                    <p>
                        © {new Date().getFullYear}{" "}
                        {t("Footer__AllRightsReserved")}
                    </p>
                </div>
            </WidthContainer>
        </footer>
    );
};

export default index;
