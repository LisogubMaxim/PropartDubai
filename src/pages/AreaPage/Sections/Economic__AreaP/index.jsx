import React, { useRef, useState } from "react";
import WidthContainer from "../../../../components/UI/WidthContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectItem from "../../../../components/ProjectItem";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import response from "../../../../response.json";
import "./economic__AreaP.scss";
import { useTranslation } from "react-i18next";

const index = ({ data }) => {
  const { t } = useTranslation();

  const responceCopy = response.slice(0, 10);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <WidthContainer>
      <section className="economic__AreaP">
        <div className="economic__AreaP__info" id="economicSection">
          <h2>{t("areasPages__Header__Title8")}</h2>
          {data.paragraphsEconomic.map((e) => (
            <p>{e}</p>
          ))}
        </div>
        <div className="economic__AreaP__photo economic__AreaP__photo--first">
          <img
            src={data.bgEconomic}
            alt="Economic-1"
            width={680}
            height={419}
          />
        </div>
        <Swiper
          ref={swiperRef}
          spaceBetween={25}
          slidesPerView={"auto"}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.realIndex);
          }}
          style={{ borderRadius: "6px" }}
        >
          {data.bgSlider.map((e, index) => (
            <SwiperSlide key={index}>
              <img
                src={e}
                alt="Image project"
                width={773}
                height={516}
                className="economic__AreaP-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </WidthContainer>
  );
};

export default index;
