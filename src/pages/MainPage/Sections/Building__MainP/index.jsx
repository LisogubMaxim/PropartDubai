import React, { useState, useEffect } from "react";
import Button from "../../../../components/UI/Button";
import sliderData from "./sliderData";
import Select from "../../../../components/UI/Select";
import data from "../../../../response.json";
import toggleProperty from "../../../DeveloperPage/Section/SearchDev_DeveloperPage/helper";
import { Link } from "react-router-dom";
import WidthContainer from "../../../../components/UI/WidthContainer";
import "./building__MainP.scss";
import { useTranslation } from "react-i18next";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();
  const handleFilterChange = (event) => {
    setFilterCriteria({ ...filterCriteria, projectName: event.target.value });
  };
  const [filterCriteria, setFilterCriteria] = useState({
    projectName: "",
    Status: [],
    Type: ["All"],
    Beds: ["All"],
    Location: [],
    Size: {
      from: "",
      to: "",
    },
    Price: {
      from: "",
      to: "",
    },
  });

  const queryParamsHandel = () => {
    const queryParams = JSON.stringify(filterCriteria);
    const searchParams = new URLSearchParams();
    searchParams.append("filters", queryParams);

    return searchParams.toString();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex, sliderData.length]);

  return (
    <section className="buildingPage__content-wrapper">
      {sliderData.map((slide, index) => (
        <div
          key={index}
          className={`buildingPage__content-slide ${
            index === currentIndex ? "active" : ""
          }`}
        >
          <div
            className="buildingPage"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.55) 35%, rgba(0, 0, 0, 0) 100%), 
          linear-gradient(to top, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0) 80%), 
          url(${slide.img})`,
            }}
          >
            <WidthContainer>
              <div className="buildingPage__wrap">
                <div>
                  <h2>{slide.title}</h2>
                  <div className="buildingPage__content-info">
                    <div>
                      <img
                        src="/assets/MainPage/dollar.svg"
                        alt="Image dollar"
                        width={36}
                        height={36}
                      />
                      <div>
                        <h4>{slide.startPrice}</h4>
                        <span>
                          {t("MainPage__Building__MainP__StartingPrice")}
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        src="/assets/MainPage/calendar.svg"
                        alt="Image dollar"
                        width={36}
                        height={36}
                      />
                      <div>
                        <h4>{slide.handover}</h4>
                        <span>{t("MainPage__Building__MainP__Handover")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </WidthContainer>
          </div>
        </div>
      ))}
      <WidthContainer>
        <div className="buildingPage__content-menuWrapper">
          <div className="buildingPage__content-button">
            <Link to="/properties">
              <Button className="button--grey">
                {t("MainPage__Building__MainP__DiscBtn")}
              </Button>
            </Link>
          </div>
          <div className="buildingPage__content-menu">
            <div className="buildingPage__content-filter">
              <div className="buildingPage__content-filterButtons">
                <Button
                  className={
                    filterCriteria.Status.indexOf("Off-Plan") !== -1
                      ? `button--activeMainFilter`
                      : `button--inactiveMainFilter`
                  }
                  handler={() =>
                    toggleProperty(
                      "Status",
                      "Off-Plan",
                      setFilterCriteria,
                      filterCriteria
                    )
                  }
                >
                  {t("Sorting__OffPlanBtn")}
                </Button>
                <Button
                  className={
                    filterCriteria.Status.indexOf("Ready") !== -1
                      ? `button--activeMainFilter`
                      : `button--inactiveMainFilter`
                  }
                  handler={() =>
                    toggleProperty(
                      "Status",
                      "Ready",
                      setFilterCriteria,
                      filterCriteria
                    )
                  }
                >
                  {t("Sorting__ReadyBtn")}
                </Button>
                <Button
                  className={
                    filterCriteria.Status.indexOf("Special Offers") !== -1
                      ? `button--activeMainFilter`
                      : `button--inactiveMainFilter`
                  }
                  handler={() =>
                    toggleProperty(
                      "Status",
                      "Special Offers",
                      setFilterCriteria,
                      filterCriteria
                    )
                  }
                >
                  {t("Sorting__SpecialOffersBtn")}
                </Button>
                <span className="buildingPage__content-search">
                  <img
                    src="/assets/components/Header/search.svg"
                    alt="searchIcon"
                    width={19.28}
                    height={24}
                    className="buildingPage__content-searchImg"
                  />
                  <input
                    type="text"
                    name="projectName"
                    value={filterCriteria.projectName}
                    onChange={handleFilterChange}
                    className="buildingPage__content-searchInput"
                    placeholder={t("Sorting__InputPlaceHolder")}
                  />
                </span>
                <Link to={`/properties?${queryParamsHandel()}`}>
                  <Button className="button--grey">
                    {t("Sorting__SearchBtn")}
                  </Button>
                </Link>
              </div>
              <div className="buildingPage__content-filterButtonsSecond">
                <Select
                  placeholder={t("Sorting__TypeBtn")}
                  img={"/assets/Global/arrowBottom.svg"}
                  items={[
                    "All",
                    ...data
                      .filter(
                        (item, index, self) =>
                          index ===
                          self.findIndex(
                            (t) => t.selectedType === item.selectedType
                          )
                      )
                      .map((item) => item.selectedType),
                  ]}
                  setState={setFilterCriteria}
                  state={filterCriteria}
                  valueToChange="Type"
                />
                <Select
                  placeholder={t("Sorting__BedsBtn")}
                  img={"/assets/Global/arrowBottom.svg"}
                  items={[
                    "All",
                    ...data
                      .filter(
                        (item, index, self) =>
                          index ===
                          self.findIndex(
                            (t) => t.selectedBedrooms === item.selectedBedrooms
                          )
                      )
                      .map((item) => item.selectedBedrooms)
                      .sort(),
                  ]}
                  setState={setFilterCriteria}
                  state={filterCriteria}
                  valueToChange="Beds"
                />
                <Select
                  placeholder={t("Sorting__SizeBtn")}
                  img="/assets/Global/arrowBottom.svg"
                  valute="ft"
                  setState={setFilterCriteria}
                  state={filterCriteria}
                  valueToChange="Size"
                />
                <Select
                  placeholder={t("Sorting__PriceBtn")}
                  img="/assets/Global/arrowBottom.svg"
                  valute="€"
                  setState={setFilterCriteria}
                  state={filterCriteria}
                  valueToChange="Price"
                />
                <Select
                  placeholder={t("Sorting__LocationBtn")}
                  img="/assets/Global/arrowBottom.svg"
                  items={data
                    .filter(
                      (item, index, self) =>
                        index ===
                        self.findIndex(
                          (t) => t.selectedLocation === item.selectedLocation
                        )
                    )
                    .map((item) => item.selectedLocation)
                    .sort()}
                  setState={setFilterCriteria}
                  state={filterCriteria}
                  valueToChange="Location"
                />
                <Button
                  className="buildingPage__content-btn"
                  handler={() =>
                    setFilterCriteria({
                      projectName: "",
                      Status: [],
                      Type: ["All"],
                      Beds: ["All"],
                      Location: [],
                      Size: {
                        from: "",
                        to: "",
                      },
                      Price: {
                        from: "",
                        to: "",
                      },
                    })
                  }
                >
                  <img
                    src="/assets/MainPage/reset.svg"
                    alt="Image reset"
                    width={21}
                    height={18}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </WidthContainer>
    </section>
  );
};

export default Slider;
