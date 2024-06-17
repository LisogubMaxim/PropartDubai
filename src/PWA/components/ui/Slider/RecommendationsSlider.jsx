import { useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import CircleButton from "../CircleButton/CircleButton";
import { useSavedProjects } from "../../../hooks/useSavedProjects";
import { Link } from "react-router-dom";
import { getPresentationalImgs } from "../../../utils/getProjectImgs";
import { t } from "i18next";
import { useCurrency } from "../../../../components/CurrencyProvider";
import CurrencyLogo from "../../../../components/UI/CurrencyLogo";

import "./slider.scss";
import "swiper/scss";
import "swiper/scss/free-mode";

const RecommendationsSlider = ({
  data,
  dataType = "projects",
  width = "320px",
  height = "228px",
}) => {
  const [isImgLoading, setIsImgLoading] = useState(true);
  const [savedProjects, setSavedProjects] = useSavedProjects();
  const { selectedCurrency, convertPrice } = useCurrency();

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={12}
      className="recommendations-swiper"
    >
      {!data?.length &&
        Array.from({ length: 3 }).map((_, idx) => (
          <SwiperSlide
            key={idx}
            style={{ maxWidth: width, height }}
            className="recommendations-slide"
          >
            <div className="skeleton-loader"></div>
          </SwiperSlide>
        ))}
      {dataType === "projects" &&
        data?.map((project) => (
          <SwiperSlide
            key={project._id}
            style={{ width, height }}
            className="recommendations-slide"
          >
            <CircleButton
              isLiked={savedProjects.includes(project._id)}
              onClick={() => setSavedProjects(project._id)}
            />
            <Link to={`/phone/project/${project._id}`}>
              <div className="darker-img"></div>
              {isImgLoading && <div className="skeleton-loader"></div>}
              {getPresentationalImgs(project.generalInfo.images).length ? (
                <img
                  src={getPresentationalImgs(project.generalInfo.images)[0]}
                  className="recommendations-slide__img"
                  onLoad={() => setIsImgLoading(false)}
                  alt={project.generalInfo.name}
                />
              ) : (
                <>
                  <div className="skeleton-loader"></div>
                  <div className="loaderProjects__wrapper mapProject">
                    <span className="loaderProjects"></span>
                  </div>
                </>
              )}
              <div className="recommendations-slide__content">
                <span className="recommendations-slide__building-name">
                  {project.generalInfo.name}
                </span>
                {project.generalInfo?.location && (
                  <span className="recommendations-slide__text">
                    {project.generalInfo.location}
                  </span>
                )}
                <span className="recommendations-slide__text">
                  {t("r_pay5")} <CurrencyLogo currency={selectedCurrency} />{" "}
                  {convertPrice(project.generalInfo.priceFrom)}
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      {dataType === "areas" &&
        data?.map((area) => (
          <SwiperSlide
            key={area.area_title}
            style={{ maxWidth: width, height }}
            className="recommendations-slide"
          >
            {isImgLoading && <div className="skeleton-loader"></div>}
            <Link to={`/phone/about-area/${area.area_title}`}>
              <div className="darker-img"></div>
              {area.area_img_src ? (
                <img
                  src={area.area_img_src}
                  className="recommendations-slide__img"
                  onLoad={() => setIsImgLoading(false)}
                  alt={area.area_title}
                />
              ) : (
                <div className="loaderProjects__wrapper mapProject">
                  <span className="loaderProjects"></span>
                </div>
              )}
              <div className="recommendations-slide__content">
                <span className="recommendations-slide__building-name">
                  {area.area_title}
                </span>
                <span className="recommendations-slide__text">
                  {area.area_data}
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

RecommendationsSlider.propTypes = {
  data: PropTypes.array,
  dataType: PropTypes.oneOf(["projects", "areas"]),
  width: PropTypes.string,
  height: PropTypes.string,
};

export default RecommendationsSlider;
