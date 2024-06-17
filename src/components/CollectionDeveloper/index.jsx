import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../Collection/collection__MainP.scss";

const Index = ({ item }) => {
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
    <section className="collection__slider-content">
      <div className="collection__slider-leftContent">
        <h3>{item.container_info[0]}</h3>
        <div className="collection__slider-descr">
          <div className="collection__slider-texts">
            {item.container_info.slice(1).map((e) => (
              <p>{e}</p>
            ))}
          </div>
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
            disabled={currentIndex === item.two_col_grid_image_src.length}
          >
            <img src="/assets/Global/arrowRigth.svg" alt="Image arrow right" />
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
            {item.two_col_grid_image_src.map((e, index) => (
              <SwiperSlide key={index}>
                <div
                  className="projectItem"
                  style={{ backgroundImage: `url(${e})` }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Index;
