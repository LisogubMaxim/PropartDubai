import React, { useState, useEffect } from "react";
import responce from "../../../../response.json";
import { Link } from "react-router-dom";
import Button from "../../../../components/UI/Button";
import WidthContainer from "../../../../components/UI/WidthContainer";
import Select from "../../../../components/UI/Select";
import ListPojects from "../../../../components/ListProjects";
import { useTranslation } from "react-i18next";
import { useGetProjectsQuery } from "../../../../store/query/projectsAPI/projectsAPI";
import locations from "../../../../data/locations.json";
import "./filter__PropertiesP.scss";

const Index = () => {
  const [visibleProjects, setVisibleProjects] = useState(16);
  const { t } = useTranslation();
  const [filterCriteria, setFilterCriteria] = useState({
    projectName: "",
    Type: "",
    Location: "",
    Size: {
      from: "",
      to: "",
    },
    Price: {
      from: "",
      to: "",
    },
  });

  const { data, isLoading, isError } = useGetProjectsQuery(
    `?nameStartsWith=${filterCriteria.projectName}&type=${filterCriteria.Type}&minSize=${filterCriteria.Size.from}&maxSize=${filterCriteria.Size.to}&minPrice=${filterCriteria.Price.from}&maxPrice=${filterCriteria.Price.to}&location=${filterCriteria.Location}`
  );

  const handleFilterChange = (event) => {
    setFilterCriteria({ ...filterCriteria, projectName: event.target.value });
  };

  const handleShowMoreClick = () => {
    const remainingProjects = data.length - visibleProjects;
    const projectsToAdd = remainingProjects > 8 ? 8 : remainingProjects;
    setVisibleProjects(Math.min(visibleProjects + projectsToAdd, data.length));
  };

  return isLoading || isError ? (
    <div className="loaderProjects__wrapper">
      <span className="loaderProjects"></span>
    </div>
  ) : (
    <section className="filterPage">
      <WidthContainer>
        <div className="filterPage__content-filterButtons">
          <span className="filterPage__content-search">
            <img
              src="/assets/PropertiesPage/search.svg"
              alt="searchIcon"
              width={18}
              height={18}
              className="filterPage__content-searchImg"
            />
            <input
              type="text"
              name="projectName"
              value={filterCriteria.projectName}
              onChange={handleFilterChange}
              className="filterPage__content-searchInput"
              placeholder={t("Sorting__InputPlaceHolder")}
            />
            {/* <Button
              className="button--orange"
              handler={() => handleFilter(filterCriteria)}
            >
              {t("Sorting__SearchBtn")}
            </Button> */}
          </span>
        </div>
        <div className="filterPage__content-filerSelect">
          <Select
            placeholder={t("Sorting__TypeBtn")}
            img="/assets/Global/blackArrowBottom.svg"
            items={["Off plan", "Secondary", "Special Offer"]}
            setState={setFilterCriteria}
            state={filterCriteria}
            valueToChange="Type"
          />
          <Select
            placeholder={t("Sorting__SizeBtn")}
            img="/assets/Global/blackArrowBottom.svg"
            valute="ft"
            setState={setFilterCriteria}
            state={filterCriteria}
            valueToChange="Size"
          />
          <Select
            placeholder={t("Sorting__PriceBtn")}
            img="/assets/Global/blackArrowBottom.svg"
            valute="€"
            setState={setFilterCriteria}
            state={filterCriteria}
            valueToChange="Price"
          />
          <Select
            placeholder={t("Sorting__LocationBtn")}
            img="/assets/Global/blackArrowBottom.svg"
            // items={data
            //   .map((project) => project.generalInfo.location)
            //   .filter((value, index, self) => self.indexOf(value) === index)}
            items={locations}
            setState={setFilterCriteria}
            state={filterCriteria}
            valueToChange="Location"
          />
        </div>
      </WidthContainer>
      <div className="filterPage__bottomLine"></div>
      <WidthContainer>
        <ListPojects items={data} number={visibleProjects} />
        <div className="filterPage__buttons">
          <Link to={`/map`}>
            <Button className="button--orange">
              <img
                src="/assets/PropertiesPage/map.svg"
                alt="Image map button"
              />
              {t("PropertiePage__MapBtn")}
            </Button>
          </Link>
          {data.length > 16 && visibleProjects !== data.length && (
            <Button handler={handleShowMoreClick}>
              {t("PropertiePage__ShowMoreBtn")}
            </Button>
          )}
        </div>
      </WidthContainer>
    </section>
  );
};

export default Index;
