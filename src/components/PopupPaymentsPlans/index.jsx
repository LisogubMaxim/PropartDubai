import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./popupPaymentsPlans.scss";
import Popup from "../UI/Popup";

const index = ({ handler, isVisible, item }) => {
    const { t, i18n } = useTranslation();
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
        <div className="paymentPlanProjectP" style={{ position: "relative" }}>
            <Popup isVisible={isVisible}>
                <div className="paymentPlanProjectP__content" ref={contentRef}>
                    <h2 className="paymentPlanProjectP__content-title">
                        {t("projectsPage__About__Payment")}
                    </h2>
                    <ul className="paymentPlanProjectP__content-list">
                        {item.paymentPlans.map((item, index) => (
                            <li
                                className="paymentPlanProjectP__content-item"
                                key={index}
                            >
                                {i18n.language === "en" && (
                                    <span>{item?.name?.EN}</span>
                                )}
                                {i18n.language === "ru" && (
                                    <span>{item?.name?.RU}</span>
                                )}
                                {i18n.language === "ua" && (
                                    <span>{item?.name?.UA}</span>
                                )}
                                <div className="paymentPlanProjectP__content-infoWrapper">
                                    <div className="paymentPlanProjectP__content-type">
                                        <span>%</span>
                                    </div>
                                    <div className="paymentPlanProjectP__content-value">
                                        <span>{item.percent}</span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Popup>
        </div>
    );
};

export default index;
