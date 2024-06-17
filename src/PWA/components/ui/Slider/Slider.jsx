import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, FreeMode } from 'swiper/modules';
import PropTypes from 'prop-types';

import "./slider.scss";
import 'swiper/scss';
import 'swiper/scss/scrollbar';
import 'swiper/scss/free-mode';


const Slider = ({
  data,
  width = "196px",
  height = "156px",
  color = "#333863",
  textAlign = "left",
  justifyContent = "space-between"
}) => {
  return (
    <Swiper
      modules={[Scrollbar, FreeMode]}
      spaceBetween={8}
      slidesPerView={"auto"}
      scrollbar={{ draggable: true }}
      freeMode={true}
      className="my-swiper"
    >
      {data.map((slide, idx) => (
        <SwiperSlide
          key={idx}
          className="shadow my-slide"
          style={{ maxWidth: width, minHeight: height, justifyContent }}
        >
          <h4 className="slide-title" style={{ color, textAlign }}>{slide.title}</h4>
          {slide.text && <p className="slide-text">{slide.text}</p>}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

Slider.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  textAlign: PropTypes.string,
  justifyContent: PropTypes.string
}

export default Slider;