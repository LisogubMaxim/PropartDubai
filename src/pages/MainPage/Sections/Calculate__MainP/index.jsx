import React, { useRef, useState } from "react";
import responce from "../../../../response.json";
import Button from "../../../../components/UI/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./calculate__MainP.scss";
import { useTranslation } from "react-i18next";

const Index = () => {
  const [activeBedrooms, setActiveBedrooms] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const [activeMap, setMap] = useState(5);

  const responceCopy = responce.slice(0, 10);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);
  const { t } = useTranslation();

  const handleItemClick = (index) => {
    setActiveType(index);
  };

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
    <section className="calculatPage">
      <h4>Calculate your home price</h4>
      <div className="calculatPage__content">
        <div className="calculatPage__content-info">
          <p>Bedrooms</p>
          <ul className="calculatPage__content-bedroomsList">
            {[1, 2, 3, 4, 5, 6, "7+"].map((item, index) => (
              <li
                key={index}
                className={`calculatPage__content-bedroomsItem ${
                  activeBedrooms === index ? "active" : ""
                }`}
                onClick={() => setActiveBedrooms(index)}
              >
                {item}
              </li>
            ))}
          </ul>
          <ul className="calculatPage__content-typeList">
            {[
              t("MainPage__Calculate__MainP__Apartment"),
              t("MainPage__Calculate__MainP__Villa"),
              t("MainPage__Calculate__MainP__Townhouse"),
              t("MainPage__Calculate__MainP__Penthouse"),
            ].map((item, index) => (
              <li
                key={index}
                className={`calculatPage__content-typeItem ${
                  index === activeType ? "active" : ""
                }`}
                onClick={() => handleItemClick(index)}
              >
                <img
                  src={`/assets/MainPage/${item.toLowerCase()}.svg`}
                  alt={`${item} image`}
                  width={25}
                  height={25}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <svg
            width="465"
            height="284"
            viewBox="0 0 465 284"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="calculatPage__content-mapIsland"
          >
            <g clip-path="url(#clip0_977_116217)">
              <path
                d="M88.9981 43.9878L83.2223 44.8986C84.4708 55.1985 91.1776 64.0399 100.814 69.3839L100.676 63.0876C94.1775 58.4069 89.8171 51.6561 88.9981 43.9878ZM121.875 12.5878C139.745 12.2 154.618 23.7199 156.036 38.6637L161.949 39.3269C160.934 21.2646 143.19 7.14398 121.766 7.60888C100.354 8.07352 83.2443 22.9419 83.0115 41.0313L88.8907 40.1121C89.6557 25.1296 104.011 12.9755 121.875 12.5878ZM145.272 62.1199L145.41 68.4162C154.8 62.6605 161.116 53.5353 161.916 43.1995L156.099 42.544C155.615 50.2369 151.548 57.1619 145.272 62.1199ZM122.815 44.1535L122.814 44.1315C137.145 41.3599 147.473 51.3376 147.568 51.4473C148.009 51.8832 148.694 51.8523 149.093 51.3725C149.494 50.8851 149.459 50.1471 149.018 49.7075C148.561 49.2683 137.972 38.9857 122.769 41.7541L122.767 41.6768C137.244 34.9725 150.157 44.715 150.282 44.8093C150.777 45.1839 151.444 45.0651 151.78 44.5423C152.122 44.0133 152 43.2858 151.52 42.906C151.003 42.4962 139.64 33.886 125.706 38.075C130.579 35.6167 140.432 31.6733 148.938 34.7581C149.505 34.9642 150.107 34.6321 150.294 34.0144C150.482 33.3955 150.173 32.7382 149.607 32.5321C138.888 28.6486 126.736 34.744 122.813 37.005C122.864 36.9622 122.901 36.9172 122.948 36.8781C123.029 36.7856 131.438 27.3953 142.718 27.4953C143.312 27.4996 143.802 26.9785 143.803 26.3354C143.804 25.6911 143.323 25.1554 142.725 25.1598C134.035 25.0821 127.111 30.0001 123.696 33.0084C125.038 30.4672 128.636 24.6274 134.172 22.4983C134.738 22.2933 135.024 21.617 134.826 21.0053C134.619 20.3949 134.011 20.0719 133.452 20.2938C129.032 21.9851 125.793 25.6426 123.747 28.6286C124.712 25.8587 126.304 22.3769 127.822 21.4653C128.34 21.1534 128.535 20.4447 128.238 19.8768C127.952 19.3038 127.301 19.0995 126.782 19.4151C124.915 20.5306 123.406 23.505 122.412 25.9614L122.303 20.9616L121.61 19.4377L121.467 19.4408L120.826 20.9937L120.936 25.9898C119.847 23.5798 118.205 20.6738 116.291 19.6403C115.761 19.356 115.113 19.5799 114.85 20.1649C114.589 20.7523 114.814 21.453 115.341 21.7374C116.904 22.5772 118.644 25.9916 119.728 28.7122C117.555 25.8214 114.163 22.309 109.68 20.8097C109.107 20.6123 108.502 20.9654 108.331 21.5839C108.159 22.1988 108.486 22.8581 109.045 23.0386C114.673 24.9304 118.513 30.6088 119.982 33.089C116.436 30.228 109.301 25.6188 100.617 26.0773C100.025 26.0901 99.5711 26.6461 99.5999 27.2946C99.6308 27.9321 100.14 28.4353 100.727 28.4066C111.982 27.8175 120.799 36.834 120.892 36.9228C120.931 36.9661 120.981 37.0067 121.024 37.0438C117.015 34.955 104.618 29.3935 94.0818 33.7456C93.5223 33.9725 93.2441 34.6461 93.459 35.2526C93.6684 35.8617 94.2947 36.1672 94.8429 35.9368C103.21 32.4823 113.224 35.9982 118.201 38.2378C104.094 34.661 93.1078 43.7612 92.6157 44.1842C92.1467 44.5846 92.0636 45.3166 92.4263 45.8303C92.7845 46.3392 93.4715 46.4286 93.9304 46.0321C94.06 45.9323 106.527 35.6354 121.281 41.7091L121.282 41.7863C105.981 39.6811 95.8479 50.4036 95.4108 50.8708C94.995 51.3327 94.9874 52.0643 95.4047 52.5461C95.8246 52.9947 96.5041 52.9972 96.9236 52.5548C97.027 52.4397 106.906 42.0149 121.333 44.1685L121.334 44.1943C107.884 45.544 100.697 55.7337 100.39 56.1772C100.038 56.6843 100.134 57.426 100.607 57.8109C101.079 58.2032 101.755 58.105 102.112 57.5855C102.177 57.4908 108.497 48.5754 120.011 46.7179C111.736 49.5385 105.985 59.7804 105.727 60.2524C105.419 60.8052 105.589 61.5329 106.093 61.857C106.602 62.1982 107.262 62.0157 107.565 61.4642C107.63 61.3524 113.544 50.8344 121.433 48.723L121.448 49.3817C121.448 49.3817 120.652 49.68 120.402 50.6635C120.155 51.6568 119.346 51.4804 118.206 52.7741C117.074 54.0713 117.274 55.1285 117.106 55.5322C116.935 55.9225 113.789 55.6042 113.175 56.0041C112.552 56.4116 113.82 57.1609 114.373 57.733C114.926 58.3089 114.765 59.396 115.331 60.3459C115.884 61.312 118.025 60.6727 118.025 60.6727C118.025 60.6727 117.789 78.5351 118.476 81.2581C119.072 83.6186 122.079 84.0111 122.854 84.0815L122.854 84.0986C122.854 84.0986 122.884 84.0906 122.944 84.0893C123.008 84.0879 123.039 84.0946 123.039 84.0946L123.038 84.0774C123.811 83.9735 126.804 83.4509 127.293 81.0668C127.857 78.3166 126.843 60.4814 126.843 60.4814C126.843 60.4814 128.998 61.0262 129.517 60.038C130.035 59.0524 129.833 57.9719 130.361 57.3861C130.892 56.799 132.128 55.988 131.49 55.6067C130.857 55.2338 127.728 55.6883 127.535 55.3059C127.345 54.9112 127.503 53.8462 126.318 52.5981C125.119 51.3478 124.316 51.5579 124.028 50.5848C123.743 49.6129 122.927 49.3496 122.927 49.3496L122.913 48.6909C130.9 50.4529 137.258 60.7058 137.323 60.8185C137.651 61.3563 138.325 61.5098 138.81 61.147C139.304 60.8013 139.443 60.0668 139.106 59.528C138.839 59.0712 132.632 49.0838 124.248 46.6247C135.833 47.9822 142.53 56.614 142.601 56.7057C142.983 57.2091 143.664 57.2778 144.117 56.8655C144.57 56.4605 144.639 55.7153 144.258 55.2241C143.94 54.7818 136.314 44.9222 122.815 44.1535Z"
                fill="#E3E3E3"
                className={`calculatPage__content-img ${
                  activeMap === 1 ? "active" : ""
                }`}
                onClick={() => setMap(1)}
              />
              <path
                d="M37.1258 142.884C34.511 138.989 45.433 96.3429 51.2208 75.5068C57.0631 71.5846 49.7952 80.7014 53.1954 82.6564C56.5955 84.6115 81.1811 86.4696 89.3181 88.0698C97.4551 89.6699 180.635 87.4919 181.065 94.2797C181.495 101.067 185.86 143.339 186.444 148.583C187.029 153.827 177.027 153.492 171.825 154.16C166.623 154.827 40.3942 147.752 37.1258 142.884Z"
                fill="#E3E3E3"
                className={`calculatPage__content-img ${
                  activeMap === 2 ? "active" : ""
                }`}
                onClick={() => setMap(2)}
              />
              <path
                d="M301.031 150.774C309.61 148.404 312.645 154.748 313.09 158.216C318.945 158.522 319.279 161.123 321.56 162.417C323.507 161.109 329.016 154.586 335.791 137.325C345.852 110.23 347.219 83.5095 346.645 73.5363C339.06 74.8621 322.915 78.1674 319.021 80.7821C314.152 84.0505 318.394 88.2646 315.792 88.5982C313.191 88.9319 306.028 86.678 301.48 88.3191C297.841 89.6319 297.376 93.4288 297.599 95.1631C290.055 95.7086 217.906 94.9858 182.775 94.5563C182.519 95.8582 186.041 132.386 187.834 150.487C192.396 153.074 200.187 147.846 204.402 143.604C208.616 139.362 215.46 143.243 217.754 148.765C220.049 154.287 244.753 149.003 250.622 153.538C256.492 158.073 255.6 184.098 258.521 182.137C261.442 180.176 264.989 170.731 268.217 162.914C271.982 153.794 281.386 144.657 286.037 141.064C288.958 139.103 290.905 137.795 294.16 138.435C297.479 139.088 300.15 146.656 301.031 150.774Z"
                fill="#E3E3E3"
                className={`calculatPage__content-img ${
                  activeMap === 3 ? "active" : ""
                }`}
                onClick={() => setMap(3)}
              />
              <path
                d="M321.66 165.178C342.403 142.212 348.538 94.3988 349.012 73.363C371.8 79.2529 418.484 91.4196 422.912 92.9666C428.448 94.9004 426.181 97.8352 423.259 99.7962C420.338 101.757 406.025 101.478 405.052 102.132C404.078 102.785 402.852 126.209 410.029 132.691C417.206 139.174 417.513 133.318 420.781 138.186C423.396 142.081 412.873 187.697 423.259 248.055C364.45 247.985 282.051 289.235 232.228 271.83C242.324 241.981 263.611 179.287 267.996 167.302C273.478 152.322 288.724 139.262 292.952 139.249C296.335 139.238 299.378 148.119 300.476 152.561C308.533 149.412 311.873 156.21 312.535 160.003C315.651 157.911 319.917 162.581 321.66 165.178Z"
                fill="#E3E3E3"
                className={`calculatPage__content-img ${
                  activeMap === 4 ? "active" : ""
                }`}
                onClick={() => setMap(4)}
              />
              <path
                d="M198.893 150.127C195.777 152.219 190.445 152.973 188.168 153.089C172.895 157.692 163.104 155.731 118.565 154.614C90.9793 153.922 52.4067 148.647 36.5685 146.096C33.7246 172.018 29.2051 223.079 33.8789 219.941C39.7212 216.019 145.182 238.449 178.703 244.196C205.521 248.793 224.631 264.215 230.835 271.351C239.961 243.565 260.023 183.953 260.802 183.431C261.775 182.777 257.227 184.418 255.92 182.47C254.612 180.523 252.93 163.289 251.943 159.714C250.956 156.139 250.302 155.166 248.021 153.872C246.196 152.837 232.73 152.837 226.225 152.966C223.624 153.3 220.049 154.287 216.127 148.445C212.205 142.603 207.002 143.27 206.029 143.924C205.055 144.577 202.788 147.512 198.893 150.127Z"
                fill="#E3E3E3"
                className={`calculatPage__content-img ${
                  activeMap === 5 ? "active" : ""
                }`}
                onClick={() => setMap(5)}
              />
            </g>
            <defs>
              <clipPath id="clip0_977_116217">
                <rect width="465" height="284" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <div className="calculatPage__content-averagePrice">
            <div></div>
            {t("MainPage__Calculate__MainP__AvrPrice")}
          </div>
        </div>
        <div className="calculatPage__content-slider">
          <div>
            <Swiper
              ref={swiperRef}
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={(swiper) => {
                setCurrentIndex(swiper.realIndex);
              }}
              style={{ borderRadius: "6px" }}
            >
              {responceCopy.map((e, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <div
                      style={{
                        backgroundImage: `url(${e.imageSrcMain})`,
                        height: 630,
                      }}
                      className="calculatPage__slider-bg"
                    >
                      <div className="calculatPage__slider-texts">
                        <h2>{e.projectName}</h2>
                        <span>
                          from $
                          {(e.priceFrom / 3.6)
                            .toFixed(2)
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                            .replace(/\.\d{2}$/, "")}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="calculatPage__slider-buttons">
            <Button
              className="button--grey"
              handler={handlePrevButtonClick}
              disabled={currentIndex === 0}
            >
              <img src="/assets/Global/arrowLeft.svg" alt="Image arrow left" />
            </Button>
            <Button
              className="button--grey"
              handler={handleNextButtonClick}
              disabled={currentIndex === responceCopy.length}
            >
              <img
                src="/assets/Global/arrowRigth.svg"
                alt="Image arrow right"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
