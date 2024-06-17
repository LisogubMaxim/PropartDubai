import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, FreeMode } from "swiper/modules";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import "./sliderWIcon.scss";
import "swiper/scss";
import "swiper/scss/scrollbar";
import "swiper/scss/free-mode";

const SliderWIcon = ({
  data,
  widthItem,
  heightItem,
  color = "#0F1121",
  font = "16px",
  textAlign,
  justifyContent = "center",
  alignItems = "center",
  brdRadius,
  txtFontWeight,
  imageWidth = "34px",
  imageHeight = "34px",
  paddingItem,
  shadow = "none",
  isScrollbarVisible = false,
  linkToDeveloper,
  handleOpenOurServices,
  isOpenService,
  handleOpenService,
  isFreeMode = true
}) => {
  const navigate = useNavigate();

  const handleNavigate = (value) => {
    if (linkToDeveloper) {
      navigate(`/phone/about-developer/${value}`);
    } else if (typeof handleOpenOurServices === 'function') {
      handleOpenOurServices();
    }
  };

  return (
    <Swiper
      modules={[Scrollbar, FreeMode]}
      spaceBetween={8}
      slidesPerView={"auto"}
      scrollbar={isScrollbarVisible && { draggable: true }}
      freeMode={isFreeMode}
      className="w-icon-swiper"
    >
      {data.map((slide, idx) => (
        <SwiperSlide
          key={idx}
          className="w-icon-slide"
          onClick={() => {
            isOpenService
              ? handleOpenService(slide.title)
              : handleNavigate(slide?.value);
          }}
          style={{
            position: "relative",
            boxShadow: shadow,
            width: widthItem,
            minHeight: heightItem,
            justifyContent,
            alignItems,
            borderRadius: brdRadius,
            padding: paddingItem ? paddingItem : "0",
          }}
        >
          {(slide?.logo_src || slide.image) && 
            <img
              className="slide-image"
              src={slide?.logo_src ? slide.logo_src : slide.image}
              alt={slide.title}
              style={{
                width: imageWidth,
                maxHeight: imageHeight,
              }}
            />
          }
          {slide.title && !slide.value && (
            <h4
              className="slide-title"
              style={{
                color,
                textAlign,
                width: "85px",
                fontWeight: txtFontWeight,
                marginTop: "14px",
                fontSize: font,
              }}
            >
              {slide.title}
            </h4>
          )}
          {slide.text && <p className="slide-text">{slide.text}</p>}
          {slide.info && (
            <img
              src={slide.info}
              alt="important"
              style={{
                position: "absolute",
                top: "12px",
                right: "16px",
                width: "20px",
                height: "20px",
              }}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

SliderWIcon.propTypes = {
  data: PropTypes.array.isRequired,
  widthItem: PropTypes.string,
  heightItem: PropTypes.string,
  color: PropTypes.string,
  textAlign: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  brdRadius: PropTypes.string,
};

export default SliderWIcon;
