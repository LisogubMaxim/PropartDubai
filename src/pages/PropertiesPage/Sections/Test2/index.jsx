import React, { useState, useEffect } from "react";
import data from "../../../../response.json";
import { Link } from "react-router-dom";
import Button from "../../../../components/UI/Button";
import WidthContainer from "../../../../components/UI/WidthContainer";
import Select from "../../../../components/UI/Select";
import toggleProperty from "../../../DeveloperPage/Section/SearchDev_DeveloperPage/helper";
import { useSearchParams } from "react-router-dom";
import ListPojects from "../../../../components/ListProjects";
import { useTranslation } from "react-i18next";
import "../Filter__PropertiesP/filter__PropertiesP.scss";

const index = () => {
  const [visibleProjects, setVisibleProjects] = useState(16);
  const [filterData, setFilterData] = useState([]);
  const { t } = useTranslation();
  let [searchParams, setSearchParams] = useSearchParams();
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

  const handleFilterChange = (event) => {
    setFilterCriteria({ ...filterCriteria, projectName: event.target.value });
  };

  function handleFilter(criteria) {
    setFilterData(
      data.filter((item) => {
        if (
          criteria.projectName &&
          !item.projectName
            .toLowerCase()
            .includes(criteria.projectName.toLowerCase())
        ) {
          return false;
        }

        if (
          criteria.Status.length > 0 &&
          !criteria.Status.includes(item.selectedStatus)
        ) {
          return false;
        }

        if (
          criteria.Type.length > 0 &&
          !criteria.Type.includes(item.selectedType) &&
          !criteria.Type.includes("All")
        ) {
          return false;
        }

        if (
          criteria.Beds.length > 0 &&
          !criteria.Beds.includes(item.selectedBedrooms) &&
          !criteria.Beds.includes("All")
        ) {
          return false;
        }

        if (
          criteria.Location.length > 0 &&
          !criteria.Location.includes(item.selectedLocation)
        ) {
          return false;
        }

        if (criteria.Size.from && criteria.Size.to) {
          const sizeFrom = parseInt(criteria.Size.from);
          const sizeTo = parseInt(criteria.Size.to);
          const itemSize = parseInt(item.sizeFrom);
          if (itemSize < sizeFrom || itemSize > sizeTo) {
            return false;
          }
        }

        if (criteria.Price.from && criteria.Price.to) {
          const priceFrom = parseInt(criteria.Price.from);
          const priceTo = parseInt(criteria.Price.to);
          const itemPrice = parseInt(item.priceFrom);
          if (itemPrice < priceFrom || itemPrice > priceTo) {
            return false;
          }
        }

        return true;
      })
    );
    const jsonString = JSON.stringify(criteria);

    const searchParams = new URLSearchParams();
    searchParams.append("filters", jsonString);

    setSearchParams(searchParams);
  }
  useEffect(() => {
    const newFilterCriteria = JSON.parse(searchParams.get("filters"));
    if (newFilterCriteria) {
      setFilterCriteria(newFilterCriteria);
      handleFilter(newFilterCriteria);
    } else handleFilter(filterCriteria);
  }, []);

  const handleShowMoreClick = () => {
    const remainingProjects = filterData.length - visibleProjects;
    const projectsToAdd = remainingProjects > 8 ? 8 : remainingProjects;
    setVisibleProjects(visibleProjects + projectsToAdd);
  };

  return (
    <section className="filterPage">
      <WidthContainer>
        <div className="filterPage__content-filterButtons">
          <Button
            className={
              filterCriteria.Status.indexOf("Off-Plan") !== -1
                ? `button--activeFilter`
                : `button--inactiveFilter`
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
                ? `button--activeFilter`
                : `button--inactiveFilter`
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
                ? `button--activeFilter`
                : `button--inactiveFilter`
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
            <Button
              className="button--orange"
              handler={() => handleFilter(filterCriteria)}
            >
              {t("Sorting__SearchBtn")}
            </Button>
          </span>
        </div>
        <div className="filterPage__content-filerSelect">
          <Select
            placeholder={t("Sorting__TypeBtn")}
            img="/assets/Global/blackArrowBottom.svg"
            items={[
              "All",
              ...data
                .filter(
                  (item, index, self) =>
                    index ===
                    self.findIndex((t) => t.selectedType === item.selectedType)
                )
                .map((item) => item.selectedType),
            ]}
            setState={setFilterCriteria}
            state={filterCriteria}
            valueToChange="Type"
          />
          <Select
            placeholder={t("Sorting__BedsBtn")}
            img="/assets/Global/blackArrowBottom.svg"
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
        </div>
      </WidthContainer>
      <div className="filterPage__bottomLine"></div>
      <WidthContainer>
        <ListPojects items={filterData} number={visibleProjects} />
        <div className="filterPage__buttons">
          <Link to={`/map?${searchParams}`}>
            <Button className="button--orange">
              <img
                src="/assets/PropertiesPage/map.svg"
                alt="Image map button"
              />
              {t("PropertiePage__MapBtn")}
            </Button>
          </Link>
          {filterData.length > 16 && visibleProjects !== filterData.length && (
            <Button handler={handleShowMoreClick}>
              {t("PropertiePage__ShowMoreBtn")}
            </Button>
          )}
        </div>
      </WidthContainer>
    </section>
  );
};

export default index;
