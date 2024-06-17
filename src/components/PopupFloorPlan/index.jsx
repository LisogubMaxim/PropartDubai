import { useTranslation } from "react-i18next";
import Button from "../../components/UI/Button";
import Popup from "../../components/UI/Popup";
import { useCurrency } from "../CurrencyProvider";
import CurrencyLogo from "../UI/CurrencyLogo";
import "./popupFloorPlan.scss";
import { useEffect, useRef } from "react";

const index = ({ handler, isVisible, plan, payment }) => {
    const { t, i18n } = useTranslation();
    const { selectedCurrency, convertPrice } = useCurrency();
    const contentRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                contentRef.current &&
                !contentRef.current.contains(event.target)
            ) {
                handler(false);
            }
        };

        if (isVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isVisible, handler]);

    return (
        <div className="popupFloorPlan" style={{ position: "relative" }}>
            <Popup isVisible={isVisible}>
                {plan && (
                    <div className="popupFloorPlan__content" ref={contentRef}>
                        <div className="popupFloorPlan__content-headerWrapper">
                            <div className="popupFloorPlan__content-closseWrapper">
                                <Button handler={() => handler(false)}>
                                    <img
                                        src="/assets/ProjectPage/closePopup.svg"
                                        alt="close image"
                                        className="popupFloorPlan__content-close"
                                        width={28}
                                        height={28}
                                    />
                                </Button>
                            </div>
                            <div className="popupFloorPlan__content-imageWrapper">
                                <img src={plan.image} alt="Image floor plan" />
                            </div>
                        </div>
                        <ul className="popupFloorPlan__content-listPrice">
                            <li className="popupFloorPlan__content-item">
                                <span>{t("projectPage__priceFromTo")}</span>
                                <div className="popupFloorPlan__content-infoWrapper">
                                    <div className="popupFloorPlan__content-type">
                                        <span>
                                            <CurrencyLogo
                                                currency={selectedCurrency}
                                            />
                                        </span>
                                    </div>
                                    <div className="popupFloorPlan__content-value">
                                        {convertPrice(plan.price)}
                                    </div>
                                </div>
                            </li>
                            <li className="popupFloorPlan__content-item">
                                <span>{t("projectsPage__About__item4")}</span>
                                <div className="popupFloorPlan__content-infoWrapper">
                                    <div className="popupFloorPlan__content-type">
                                        <span>sq.ft</span>
                                    </div>
                                    <div className="popupFloorPlan__content-value">
                                        <span>{plan.size}</span>
                                    </div>
                                </div>
                            </li>
                            <li className="popupFloorPlan__content-item">
                                <span>{t("projectsPage__About__item5")}</span>
                                <div className="popupFloorPlan__content-infoWrapper">
                                    <div className="popupFloorPlan__content-value">
                                        <span>Apartment</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="popupFloorPlan__content-wrapper">
                            <h3 className="popupFloorPlan__content-title">
                                {t("r_pay1")}
                            </h3>
                            <ul className="popupFloorPlan__content-listPayment">
                                {payment.map((item, index) => (
                                    <li
                                        className="popupFloorPlan__content-item"
                                        key={index}
                                    >
                                        {i18n.language === "en" && (
                                            <span>{item.name.EN}</span>
                                        )}
                                        {i18n.language === "ru" && (
                                            <span>{item.name.RU}</span>
                                        )}
                                        {i18n.language === "ua" && (
                                            <span>{item.name.UA}</span>
                                        )}
                                        <div className="popupFloorPlan__content-infoWrapper">
                                            <div className="popupFloorPlan__content-type">
                                                <span>
                                                    <CurrencyLogo
                                                        currency={
                                                            selectedCurrency
                                                        }
                                                    />
                                                </span>
                                            </div>
                                            <div className="popupFloorPlan__content-value">
                                                <span>
                                                    {convertPrice(
                                                        plan.price *
                                                            (item.percent / 100)
                                                    )}
                                                </span>
                                            </div>
                                            <div className="popupFloorPlan__content-typeRight">
                                                <span>{item.percent}%</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </Popup>
        </div>
    );
};

export default index;
