import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./about__DeveloperMainP.scss";
import { useTranslation } from "react-i18next";

const index = ({ item }) => {
  const { t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  if (!item.about_the_company || !Array.isArray(item.about_the_company)) {
    return null;
  }

  return (
    <section className="developerMainPage__about">
      <div className="developerMainPage__about-texts">
        <h3>{t("developerMainPage__AboutDevTitle")}</h3>
        <ul className="developerMainPage__list">
          {item.about_the_company.map((paragraph, index) => (
            <li key={index} className="developerMainPage__item">
              <p>{paragraph}</p>
            </li>
          ))}
        </ul>
      </div>
      {item.gallery_images && item.gallery_images.length > 0 ? (
        <Swiper
          spaceBetween={25}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.realIndex);
          }}
          style={{ borderRadius: "6px" }}
          className="developerMainPage__about-slider"
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {item.gallery_images.map((e, index) => (
            <SwiperSlide key={index}>
              <div>
                <div
                  style={{
                    backgroundImage: `url(${e})`,
                    height: 418,
                  }}
                  className="projectItem"
                >
                  <div></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div
          style={{
            backgroundImage: `url(${item.header_photo_src})`,
            height: 418,
            borderRadius: "6px",
          }}
          className="developerMainPage__about-img"
        >
          <div></div>
        </div>
      )}
    </section>
  );
};

export default index;
