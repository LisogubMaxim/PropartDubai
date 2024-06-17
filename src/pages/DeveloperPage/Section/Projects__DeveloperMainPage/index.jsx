import React, { useRef, useState } from "react";
// import response from "../../../../response.json";
import ProjectItem from "../../../../components/ProjectItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./projects__DeveloperMainPage.scss";

const index = ({ item }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="developerMain__topProjects">
      <div className="developerMain__topProjects-list">
        <Swiper
          ref={swiperRef}
          spaceBetween={33.33}
          slidesPerView={"auto"}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.realIndex);
          }}
          style={{ borderRadius: "6px" }}
        >
          {item.areas_info.map((item) => (
            <SwiperSlide key={index}>
              <div>
                <div
                  className="projectItem"
                  style={{
                    backgroundImage: `url(${item.area_img_src})`,
                  }}
                >
                  <div>
                    <h4>{item.area_title}</h4>
                    {/* <p>{item.area_data}</p> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default index;
