import React, { useRef, useState } from "react";
import "./collection__AreaP.scss";
import Button from "../../../../components/UI/Button";
import ProjectItem from "../../../../components/ProjectItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useTranslation } from "react-i18next";

const index = ({ response, data }) => {
  const { t } = useTranslation();

  const filter = data.filterSlider;
  const responceCopy = response
    .filter((item) => item.selectedLocation === filter)
    .slice(0, 10);

  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

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
    <section className="collectionAreaP" id="propertySection">
      <div className="collection__slider-content">
        <div className="collection__slider-leftContent">
          <h3>
            {t("areasPages__Header__Descr1")} {data.titleSlider}
          </h3>
          <div className="collection__slider-descr">
            {data.paragraphsSelider.map((e) => (
              <p>{e}</p>
            ))}
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
              <img
                src="/assets/Global/arrowRigth.svg"
                alt="Image arrow right"
              />
            </Button>
          </div>
          <div>
            <Swiper
              ref={swiperRef}
              spaceBetween={25}
              slidesPerView={"auto"}
              onSlideChange={(swiper) => {
                setCurrentIndex(swiper.realIndex);
              }}
              style={{ borderRadius: "6px" }}
            >
              {responceCopy.map((e, index) => (
                <SwiperSlide key={index}>
                  <ProjectItem
                    img={e.imageSrcMain}
                    title={e.projectName}
                    priceFrom={e.priceFrom}
                    id={e._id}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
