import React from "react";
import { Link } from "react-router-dom";
import "./images__ProjectP.scss";
import { useTranslation } from "react-i18next";

export default function index({ item }) {
    const { t } = useTranslation();

    return (
        <section className="buildingInfo__content-imageWrapper">
            <Link to={`/images/${item._id}`}>
                <div className="buildingInfo__content-image">
                    {item.generalInfo.images[0] &&
                    item.generalInfo.images[0].photos &&
                    item.generalInfo.images[0].photos[0] ? (
                        <img
                            src={item.generalInfo.images[0].photos[0]}
                            alt="Image building"
                            width={818.54}
                            height={479}
                        />
                    ) : (
                        <div className="loaderProjects__wrapper map">
                            <span className="loaderProjects"></span>
                        </div>
                    )}
                </div>
            </Link>
            <button className="buildingInfo__content-btnSeeAll">
                {t("projectPage__seeAllPhotos")}
            </button>
        </section>
    );
}
