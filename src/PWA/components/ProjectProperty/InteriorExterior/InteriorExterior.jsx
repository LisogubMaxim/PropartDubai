import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { useState } from "react";

import s from "./interior-exterior.module.scss";
import "../property-slider.scss";
import "swiper/scss";
import "swiper/scss/free-mode";
import {
  getInteriorImgs,
  getPresentationalImgs,
} from "../../../utils/getProjectImgs";

export const InteriorExterior = ({ images }) => {
  const [selectedValue, setSelectedValue] = useState("exterior");
  const [selectedImgs, setSelectedImgs] = useState(
    getPresentationalImgs(images)
  );
  const [isImgLoading, setIsImgLoading] = useState(true);

  const handleToggleDisplayImgs = (e) => {
    setIsImgLoading(true);

    switch (e.target.value) {
      case "exterior":
        setSelectedValue("exterior");
        setSelectedImgs(getPresentationalImgs(images));
        break;
      case "interior":
        setSelectedValue("interior");
        setSelectedImgs(getInteriorImgs(images));
        break;
      default:
        setSelectedImgs(null);
    }
  };

  return (
    <section className="project-property__section main-container">
      <div className={s.buttons}>
        <label className={s.btn}>
          Exterior
          <input
            type="radio"
            name="mode"
            onChange={handleToggleDisplayImgs}
            value="exterior"
            checked={selectedValue === "exterior"}
          />
        </label>
        <label className={s.btn}>
          Interior
          <input
            type="radio"
            name="mode"
            onChange={handleToggleDisplayImgs}
            value="interior"
            checked={selectedValue === "interior"}
          />
        </label>
      </div>
      <Swiper
        modules={[FreeMode]}
        slidesPerView={"auto"}
        spaceBetween={12}
        freeMode={true}
        className="interior-exterior-swiper"
      >
        {selectedImgs?.length
          ? selectedImgs.map((img, idx) => (
              <SwiperSlide key={idx} className="interior-exterior-slider">
                {isImgLoading && <div className="skeleton-loader"></div>}
                <img
                  src={img}
                  className="interior-exterior-slider__img"
                  onLoad={() => setIsImgLoading(false)}
                  alt={`Image ${idx + 1}`}
                />
              </SwiperSlide>
            ))
          : "No images"}
      </Swiper>
    </section>
  );
};
