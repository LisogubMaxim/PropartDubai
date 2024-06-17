import React from "react";
import { Link } from "react-router-dom";
import "./developer__ProjectP.scss";
import { useTranslation } from "react-i18next";

export default function index({ item, devData }) {
    const { t } = useTranslation();

    return (
        <section className="developerProjectP">
            <div className="developerProjectP__content">
                <h2 className="developerProjectP__content-title">
                    {t("projectsPage__About__item1")}
                </h2>
                <div className="developerProjectP__content-devInfo">
                    <div className="developerProjectP__content-image">
                        <img
                            src={devData?.logoUrl}
                            alt="Image developer"
                            width={139}
                            height={139}
                            className="developerProjectP__content-img"
                        />
                    </div>
                    <p className="developerProjectP__content-descr">
                        {devData?.description}
                    </p>
                </div>
                <div className="developerProjectP__content-wrapper">
                    <div className="developerProjectP__content-buttons">
                        <Link to={item.generalInfo.website} target="_blank">
                            <button className="developerProjectP__content-btn">
                                {t("projectPage__visitWebsite")}
                            </button>
                        </Link>
                        <a href={item.brochure} download target="_blank">
                            <button className="developerProjectP__content-btn">
                                {t("projectPage__getBrochure")}
                            </button>
                        </a>
                    </div>
                    <div className="developerProjectP__content-qrWrapper">
                        {item.information && item.information.qrCode ? (
                            <div className="developerProjectP__content-qrImage">
                                {item.information &&
                                    item.information.qrCode && (
                                        <img
                                            src={item.information.qrCode}
                                            alt="Image qr code"
                                            width={139}
                                            height={139}
                                            className="developerProjectP__content-qrImg"
                                        />
                                    )}
                            </div>
                        ) : (
                            <></>
                        )}
                        <div
                            className={`developerProjectP__content-infoWrapper ${
                                item.information && item.information.qrCode
                                    ? ""
                                    : "not"
                            }`}
                        >
                            {item.information && item.information.trakhesi ? (
                                <div className="developerProjectP__content-infoItem">
                                    {item.information &&
                                        item.information.trakhesi && (
                                            <span>
                                                {item.information.trakhesi}
                                            </span>
                                        )}
                                </div>
                            ) : (
                                <></>
                            )}
                            {item.information &&
                            item.information.dateOfExpiration ? (
                                <div className="developerProjectP__content-infoItem">
                                    {item.information &&
                                        item.information.dateOfExpiration && (
                                            <span>
                                                {new Date(
                                                    item.information.dateOfExpiration
                                                ).toLocaleDateString("en-US", {
                                                    day: "2-digit",
                                                    month: "2-digit",
                                                    year: "numeric",
                                                })}
                                            </span>
                                        )}
                                </div>
                            ) : (
                                <></>
                            )}
                            <div className="developerProjectP__content-infoItem">
                                {/* <Link to={devData?.website} target="_blank"> */}
                                <Link
                                    to="https://propart.ae/developers"
                                    target="_blank"
                                >
                                    <button>
                                        {/* <span>{t("projectPage__tapToSeeWeb")}</span> */}
                                        <span>
                                            {t("projectPage__tapToSeeAllDevs")}
                                        </span>
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                        >
                                            <path
                                                d="M7 0C3.13444 0 0 3.13444 0 7C0 10.8656 3.13444 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13444 10.8656 0 7 0ZM12.8333 5.04C12.6202 5.73689 12.1271 6.31556 11.4722 6.63444C11.1222 5.32 10.1827 4.24356 8.92889 3.71778C9.03 3.37244 9.24778 3.07222 9.54333 2.87C9.20889 2.65222 8.76556 2.54333 8.50111 2.92444C8.08889 3.46111 8.50111 4.17667 8.66444 4.48V4.58889C8.23278 4.32678 7.89444 3.93556 7.7 3.46889C6.94867 3.44556 6.20511 3.63067 5.55333 4.00556C5.48567 3.56611 5.52844 3.11733 5.67778 2.69889C6.24789 2.75333 6.80789 2.52 7.17111 2.07667C7.52889 1.67222 7.07 1.15889 6.71222 0.847778H6.99222C8.05 0.84 9.09378 1.10833 10.0178 1.62556C11.0756 2.40722 11.7242 3.62444 11.7833 4.93889C11.97 4.93889 12.3278 4.51111 12.4911 4.22333C12.6249 4.48778 12.74 4.76 12.8333 5.04ZM7 13.0978C5.40556 11.48 7.19444 10.1811 6.22222 9.02222C5.50667 8.36111 4.44111 8.82 3.80333 8.06556C3.584 6.91989 4.011 5.74622 4.91556 5.00889C5.32 4.66667 8.02667 4.23111 9.13111 5.18C9.77667 5.73611 10.2317 6.482 10.43 7.31111C10.7878 7.33833 11.144 7.25978 11.4567 7.08556C11.7756 9.40333 9.00667 12.3278 7 13.0978ZM4.00556 1.62556C4.61689 1.39222 5.30911 1.60378 5.68556 2.13889C5.35889 2.43444 4.95444 2.62889 4.51889 2.69889C4.53444 2.47022 4.585 2.24467 4.66667 2.03L4.00556 1.62556Z"
                                                fill="#222222"
                                            />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                            {/* <div className="developerProjectP__content-infoItem">
                                <Link to={`tel:${devData?.phone}`}>
                                    <button>
                                        <span>
                                            {t("projectPage__getNumber")}
                                        </span>
                                        <svg
                                            width="13"
                                            height="14"
                                            viewBox="0 0 13 14"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.3752 9.47209V11.4501C11.3753 11.5918 11.3234 11.7282 11.2299 11.8318C11.1364 11.9354 11.0083 11.9985 10.8715 12.0084C10.6348 12.0252 10.4414 12.0342 10.2919 12.0342C5.5052 12.0342 1.62524 8.02714 1.62524 3.08366C1.62524 2.92926 1.63337 2.72955 1.65016 2.48509C1.65976 2.34381 1.72089 2.21155 1.82122 2.11499C1.92155 2.01844 2.05361 1.96478 2.19074 1.96484H4.10608C4.17327 1.96477 4.23808 1.9905 4.28793 2.03702C4.33778 2.08354 4.36911 2.14754 4.37583 2.21658C4.38829 2.34524 4.39966 2.44761 4.41049 2.52537C4.51814 3.30122 4.73874 4.05581 5.06483 4.76356C5.11629 4.87544 5.0827 5.00914 4.9852 5.08074L3.81629 5.94335C4.53099 7.66324 5.8581 9.03379 7.52345 9.77193L8.35762 8.56697C8.39169 8.51774 8.44147 8.48244 8.49818 8.46722C8.55489 8.45195 8.61502 8.45777 8.66799 8.48361C9.3532 8.81976 10.0837 9.04699 10.8347 9.1577C10.91 9.16889 11.0091 9.18119 11.1326 9.1935C11.1993 9.20055 11.2612 9.233 11.3061 9.28446C11.351 9.33593 11.3754 9.40278 11.3752 9.47209Z"
                                                fill="#222222"
                                            />
                                        </svg>
                                    </button>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="developerProjectP__content-description">
                    <p>{t("projectPage__staticInfo")}</p>
                </div>
            </div>
        </section>
    );
}
