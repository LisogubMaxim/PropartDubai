import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import CircleButton from "../../ui/CircleButton/CircleButton";
import CurrencyLogo from "../../../../components/UI/CurrencyLogo";
import { useNavigate } from "react-router-dom";
import { useSavedProjects } from "../../../hooks/useSavedProjects";
import { useCurrency } from "../../../../components/CurrencyProvider";
import { getPresentationalImgs } from "../../../utils/getProjectImgs";
import { t } from "i18next";

import s from "./hero.module.scss";
import "swiper/scss";
import "swiper/scss/effect-fade";
import "swiper/scss/scrollbar";

export const Hero = ({ projectData }) => {
  const { selectedCurrency, convertPrice } = useCurrency();
  const navigate = useNavigate();
  const [isImgLoading, setIsImgLoading] = useState(true);
  const [savedProjects, setSavedProjects] = useSavedProjects();

  const presentetionalImgs = getPresentationalImgs(
    projectData?.generalInfo?.images
  );

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/phone');
    }
  }

  return (
    <section className={s.hero}>
      <CircleButton
        type="goBack"
        styles={{ top: "20px", left: "20px" }}
        onClick={handleGoBack}
      />
      <CircleButton
        isLiked={savedProjects.includes(projectData._id)}
        styles={{ top: "20px", right: "20px" }}
        onClick={() => setSavedProjects(projectData._id)}
      />
      <div className={`main-container ${s.bottomContent} ${s.heroContent}`}>
        <h1 className={s.mainTitle}>{projectData.generalInfo.name}</h1>
        <p className={s.heroText}>{projectData.generalInfo.location}</p>
        <p className={s.heroText}>
          {t("r_pay5")} <CurrencyLogo currency={selectedCurrency} />{" "}
          {convertPrice(projectData.generalInfo.priceFrom)}
        </p>
      </div>
      <Swiper
        modules={[Scrollbar]}
        scrollbar={{
          draggable: true,
          horizontalClass: "horizontal-hero-scrollbar",
        }}
        spaceBetween={4}
        slidesPerView={1}
        className="hero-swiper"
      >
        {presentetionalImgs?.length
          ? presentetionalImgs.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className={s.imgContainer}>
                  {isImgLoading && <div className="skeleton-loader"></div>}
                  <div className={s.darkerImg}></div>
                  <img
                    src={img}
                    className={s.img}
                    onLoad={() => setIsImgLoading(false)}
                    alt={`Project image ${idx + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))
          : Array.from({ length: 3 }).map((_, idx) => (
              <SwiperSlide key={idx}>
                <div className={s.imgContainer}>
                  <div className="darker-img">
                    <div className="loaderProjects__wrapper">
                      <span className="loaderProjects"></span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </section>
  );
};
