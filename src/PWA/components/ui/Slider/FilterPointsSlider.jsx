import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, FreeMode } from "swiper/modules";
import PropTypes from "prop-types";

import "./slider.scss";
import "swiper/scss";
import "swiper/scss/scrollbar";
import "swiper/scss/free-mode";

import FilterPoint from "../FilterPoint/FilterPoint";

const Slider = ({ data, removeFilter = () => {}, marginB }) => {
  return (
    <Swiper
      modules={[Scrollbar, FreeMode]}
      spaceBetween={8}
      slidesPerView={"auto"}
      freeMode={true}
      style={{ marginBottom: marginB }}
    >
      {data &&
        Object.keys(data).map(
          (key, idx) =>
            data[key] && (
              <SwiperSlide key={idx} style={{ width: "fit-content" }}>
                <button onClick={() => removeFilter(key)}>
                  <FilterPoint text={data[key]} />
                </button>
              </SwiperSlide>
            )
        )}
    </Swiper>
  );
};

Slider.propTypes = {
  data: PropTypes.object.isRequired,
  removeFilter: PropTypes.func,
  marginB: PropTypes.string,
};

export default Slider;
