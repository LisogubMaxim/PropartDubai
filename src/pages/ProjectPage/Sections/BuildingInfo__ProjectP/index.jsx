import React from "react";
import Button from "../../../../components/UI/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { useCurrency } from "../../../../components/CurrencyProvider";
import CurrencyLogo from "../../../../components/UI/CurrencyLogo";
import "./buildingInfo__ProjectP.scss";

const index = ({ item, devData }) => {
    const { t } = useTranslation();
    const { selectedCurrency, convertPrice } = useCurrency();

    const formatDateHandover = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        let quarter;

        if (month <= 3) {
            quarter = "Q1";
        } else if (month <= 6) {
            quarter = "Q2";
        } else if (month <= 9) {
            quarter = "Q3";
        } else {
            quarter = "Q4";
        }

        return `${quarter} ${year}`;
    };

    return (
        <section className="buildingInfo">
            <div className="buildingInfo__content">
                <div className="buildingInfo__content-info">
                    <div className="buildingInfo__content-priceInfo">
                        <div className="buildingInfo__content-price">
                            <span className="buildingInfo__content-price from">
                                {t(
                                    "ConsultingServicesPage__AdditionalPrice__from"
                                )}
                            </span>
                            <span>
                                <CurrencyLogo currency={selectedCurrency} />
                                {convertPrice(item.generalInfo.priceFrom)}
                            </span>
                        </div>
                        <div className="buildingInfo__content-priceSquare">
                            <span className="buildingInfo__content-priceSquareWrapper">
                                <CurrencyLogo currency={selectedCurrency} />
                                {convertPrice(
                                    item.generalInfo.priceFrom /
                                        item.generalInfo.projectMainInfo.size
                                )}
                            </span>
                            <span>
                                {t("projectPage__perFt")}
                                <sub className="square">2</sub>
                            </span>
                        </div>
                    </div>
                    <div className="buildingInfo__content-infoProject">
                        <h4 className="buildingInfo__content-name">
                            {item.generalInfo.name}
                        </h4>
                        <div>
                            <p className="buildingInfo__content-location">
                                {item.generalInfo.location}
                            </p>
                        </div>
                    </div>
                    <ul className="buildingInfo__content-list">
                        <li className="buildingInfo__content-item">
                            <img
                                src="/assets/ProjectPage/home.svg"
                                alt="Home image"
                                width={24}
                                height={24}
                            />
                            <div>
                                <span>{t("projectsPage__About__item1")}</span>
                                <span>{devData?.name}</span>
                            </div>
                        </li>
                        <li className="buildingInfo__content-item">
                            <img
                                src="/assets/ProjectPage/folder.svg"
                                alt="Folder image"
                                width={24}
                                height={24}
                            />
                            <div>
                                <span>{t("projectsPage__About__item2")}</span>
                                <span>
                                    {item.generalInfo.projectMainInfo?.rooms}
                                </span>
                            </div>
                        </li>
                        <li className="buildingInfo__content-item">
                            <img
                                src="/assets/ProjectPage/price.svg"
                                alt="Price m^2 image"
                                width={24}
                                height={24}
                            />
                            <div>
                                <span>
                                    {t("projectsPage__About__item3")}
                                    <sub className="square">2</sub>
                                </span>
                                <span>
                                    <CurrencyLogo currency={selectedCurrency} />
                                    {convertPrice(
                                        item.generalInfo.priceFrom /
                                            item.generalInfo.projectMainInfo
                                                .size
                                    )}
                                </span>
                            </div>
                        </li>
                        <li className="buildingInfo__content-item">
                            <img
                                src="/assets/ProjectPage/size.svg"
                                alt="Size image"
                                width={24}
                                height={24}
                            />
                            <div>
                                <span>{t("projectsPage__About__item4")}</span>
                                <span>
                                    {item.generalInfo.projectMainInfo.size
                                        .toString()
                                        .replace(
                                            /\B(?=(\d{3})+(?!\d))/g,
                                            ","
                                        )}{" "}
                                    ft
                                    <sub className="square">2</sub>
                                </span>
                            </div>
                        </li>
                        <li className="buildingInfo__content-item">
                            <img
                                src="/assets/ProjectPage/typeNew.svg"
                                alt="Type image"
                                width={24}
                                height={24}
                            />
                            <div>
                                <span>{t("projectsPage__About__item5")}</span>
                                <span>
                                    {item.generalInfo.projectMainInfo.type}
                                </span>
                            </div>
                        </li>
                        <li className="buildingInfo__content-item">
                            <img
                                src="/assets/ProjectPage/handover.svg"
                                alt="Type image"
                                width={24}
                                height={24}
                            />
                            <div>
                                <span>{t("projectPage__handover")}</span>
                                <span>
                                    {formatDateHandover(
                                        item.generalInfo.projectMainInfo
                                            .handover
                                    )}
                                </span>
                            </div>
                        </li>
                    </ul>
                    <div className="buildingInfo__content-buttons">
                        <Link
                            className="buildingInfo__content-scroll"
                            to="consultationHelpForm"
                            smooth={true}
                            duration={500}
                            offset={-100}
                        >
                            <button className="buildingInfo__content-btn">
                                {t("projectsPage__About__Contact")}
                            </button>
                        </Link>
                        <Button className="buildingInfo__content-btnPhone">
                            <a href="tel:+971521038793">
                                <img
                                    src="/assets/Global/phoneOrange.svg"
                                    alt="Image phone"
                                    width={24}
                                    height={24}
                                />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;
