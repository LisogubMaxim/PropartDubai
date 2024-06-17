import React from "react";
import { useTranslation } from "react-i18next";
import { useCurrency } from "../../components/CurrencyProvider";
import CurrencyLogo from "../../components/UI/CurrencyLogo";
import { Link } from "react-router-dom";

const index = ({ items, number }) => {
    const { t } = useTranslation();
    const { selectedCurrency, convertPrice } = useCurrency();

    return (
        <ul className="filterPage__list">
            {items.slice(0, number).map((e, index) => (
                <li key={index} className="filterPage__item">
                    <Link to={`/project/${e._id}`}>
                        <div className="filterPage__item-image">
                            {e.generalInfo.images[0] &&
                            e.generalInfo.images[0].photos &&
                            e.generalInfo.images[0].photos[0] ? (
                                <img
                                    src={e.generalInfo.images[0].photos[0]}
                                    alt="Image flat"
                                    width={328}
                                    height={189}
                                />
                            ) : (
                                <div className="loaderProjects__wrapper mapProject">
                                    <span className="loaderProjects"></span>
                                </div>
                            )}
                        </div>
                        <div className="filterPage__item-texts">
                            <div className="filterPage__item-name">
                                <span>{e.generalInfo.name}</span>
                                <span className="filterPage__item-size">
                                    {e.generalInfo.projectMainInfo.size}
                                    {t("projectsPage__About__Ft")}
                                    <sub>2</sub>
                                </span>
                            </div>
                            <div className="filterPage__item-info">
                                <div>
                                    <div className="filterPage__item-location">
                                        <img
                                            src="/assets/PropertiesPage/location.svg"
                                            alt="Image location"
                                            width={16}
                                            height={16}
                                        />
                                        <span className="filterPage__item-locationWrapper">
                                            {e.generalInfo.location}
                                        </span>
                                    </div>
                                    <div className="filterPage__item-wrapper">
                                        <div className="filterPage__item-bedroom">
                                            <img
                                                src="/assets/PropertiesPage/bedroom.svg"
                                                alt="Image location"
                                                width={16}
                                                height={16}
                                            />
                                            {
                                                e.generalInfo.projectMainInfo
                                                    .rooms
                                            }{" "}
                                            bedrooms
                                        </div>
                                        <div className="filterPage__item-price">
                                            <CurrencyLogo
                                                currency={selectedCurrency}
                                            />
                                            {convertPrice(
                                                e.generalInfo.priceFrom
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default index;
