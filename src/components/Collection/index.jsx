import React, { useState, useRef } from "react";
import responce from "../../response.json";
import Button from "../UI/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectItem from "../ProjectItem";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./collection__MainP.scss";
import { useTranslation } from "react-i18next";
import { useGetProjectsQuery } from "../../store/query/projectsAPI/projectsAPI";

const Index = () => {
  const responceCopy = responce.slice(0, 10);
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);
  const { data, isLoading, isError } = useGetProjectsQuery("");

  const handlePrevButtonClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextButtonClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="collection__slider-content">
      <div className="collection__slider-leftContent">
        <h3>{t("Collection__Title")}</h3>
        <div className="collection__slider-descr">
          <p>{t("Collection__Text1")}</p>
          <p>{t("Collection__Text2")}</p>
        </div>
      </div>
      <div className="collection__slider-rigthContent">
        <div className="collection__slider-buttons">
          <Button
            className="button--orange"
            handler={handlePrevButtonClick}
            disabled={currentIndex === 0}
          >
            <img src="/assets/Global/arrowLeft.svg" alt="Image arrow left" />
          </Button>
          <Button
            className="button--orange"
            handler={handleNextButtonClick}
            disabled={currentIndex === responceCopy.length}
          >
            <img src="/assets/Global/arrowRigth.svg" alt="Image arrow right" />
          </Button>
        </div>
        <div className="collection__slider-slider">
          <Swiper
            ref={swiperRef}
            spaceBetween={25}
            slidesPerView={"auto"}
            onSlideChange={(swiper) => {
              setCurrentIndex(swiper.realIndex);
            }}
            style={{ borderRadius: "6px" }}
          >
            {isLoading || isError ? (
              <></>
            ) : (
              <>
                {data.slice(0, 10).map((item, index) => (
                  <SwiperSlide key={index}>
                    <ProjectItem
                      img={
                        item.generalInfo?.images?.[0]?.photos?.[0] ||
                        "defaultImagePath.jpg"
                      }
                      title={item.generalInfo?.name}
                      priceFrom={item.generalInfo?.priceFrom}
                      id={item._id}
                    />
                  </SwiperSlide>
                ))}
              </>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Index;
