import React, { useRef } from "react";
import Button from "../../../../components/UI/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./about__ProjectP.scss";

const Index = ({ item }) => {
    const { t, i18n } = useTranslation();
    const swiperRef = useRef(null);

    function stripHtml(html) {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
    }

    const strippedEN = stripHtml(item?.about?.EN);
    const strippedRU = stripHtml(item?.about?.RU);
    const strippedUA = stripHtml(item?.about?.UA);

    return (
        <section className="aboutProject">
            <div className="aboutProject__content">
                <h4 className="aboutProject__content-title">
                    {t("projectsPage__About__Title1")}
                </h4>
                {i18n.language === "en" && (
                    <p className="aboutProject__content-descr">{strippedEN}</p>
                )}
                {i18n.language === "ru" && (
                    <p className="aboutProject__content-descr">{strippedRU}</p>
                )}
                {i18n.language === "ua" && (
                    <p className="aboutProject__content-descr">{strippedUA}</p>
                )}
                <div className="aboutProject__content-uploaders">
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={15}
                        slidesPerView={"auto"}
                        onSlideChange={(swiper) => {
                            setCurrentIndex(swiper.realIndex);
                        }}
                        style={{ borderRadius: "6px" }}
                    >
                        {item.generalInfo.images.map((e, index) => (
                            <SwiperSlide key={index}>
                                <Link
                                    to={{
                                        pathname: `/imagesIndex/${item._id}`,
                                        search: `?index=${index}`,
                                    }}
                                >
                                    <div
                                        className="aboutProject__content-image"
                                        key={index}
                                    >
                                        <img
                                            src={e.photos[0]}
                                            alt={`Image exterior`}
                                            width={200}
                                            height={125}
                                            className="aboutProject__content-img"
                                        />
                                        <div className="aboutProject__content-count">
                                            <span>{e.photos.length}</span>
                                            <img
                                                src="/assets/ProjectPage/camera.svg"
                                                alt="Image camera"
                                                width={12}
                                                height={12}
                                            />
                                        </div>
                                        {i18n.language === "en" && (
                                            <span className="aboutProject__content-text">
                                                {e.name.EN}
                                            </span>
                                        )}
                                        {i18n.language === "ru" && (
                                            <span className="aboutProject__content-text">
                                                {e.name.RU}
                                            </span>
                                        )}
                                        {i18n.language === "ua" && (
                                            <span className="aboutProject__content-text">
                                                {e.name.UA}
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Index;
