import React, { useState } from "react";
import Slider from "../ui/Slider/FilterPointsSlider";
import GetConsultation from "../ui/GetConsultationForm/GetConsultation";
import { Filters } from "../Filters/Filters";
import { initialFilters } from "../../data/data";
import MenuBar from "../ui/MenuBar/MenuBar";
import SearchInput from "../ui/PropertyItem/SearchInput/SearchInput";
import CircleButton from "../ui/CircleButton/CircleButton";
import { useSavedProjects } from "../../hooks/useSavedProjects";
import { Link } from "react-router-dom";
import { useGetProjectsQuery } from "../../../store/query/projectsAPI/projectsAPI";
import { useDebouncedCallback } from "use-debounce";
import { t } from "i18next";
import CurrencyLogo from "../../../components/UI/CurrencyLogo";
import { useCurrency } from "../../../components/CurrencyProvider";
import { getPresentationalImgs } from "../../utils/getProjectImgs";
import ViewMore from "../ui/ViewMore/ViewMore";
import NoResult from "../ui/NoResult/NoResult";
import { getProjectsBySortParam } from "../../utils/getProjectsBySortParam";

import cross from "../../assets/images/multiply.svg";

import styles from "./specialForYou.module.scss";

const SpecialForYou = ({ handleClose }) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [savedProjects, setSavedProjects] = useSavedProjects();
  const { selectedCurrency, convertPrice } = useCurrency();
  const [searchText, setSearchText] = useState("");

  const [selectedFilters, setSelectedFilters] = useState(initialFilters);

  const { data, isFetching, isError } = useGetProjectsQuery(
    `?nameStartsWith=${searchText}&type=${selectedFilters.completion_status}&minSize=${selectedFilters.sizeFrom}&maxSize=${selectedFilters.sizeTo}&minPrice=${selectedFilters.priceFrom}&maxPrice=${selectedFilters.priceTo}&location=${selectedFilters.area}`
  );

  const ITEMS_PER_SET = 16;
  const totalSets = Math.ceil(data?.length / ITEMS_PER_SET);
  const [currentSet, setCurrentSet] = useState(1);

  const debouncedSearch = useDebouncedCallback((value) => {
    setSearchText(value);
  }, 500);

  return (
    <>
      <div className="modal-window">
        <div className="main-container">
          <div className={styles.header}>
            <h1 className={styles.mainTitle}>Special for you</h1>
            <button className="circle-btn shadow" onClick={handleClose}>
              <img src={cross} alt="close btn" />
            </button>
          </div>
          <SearchInput
            onChange={(e) => debouncedSearch(e.target.value)}
            placeHolder="Search"
            handleOpenFilters={() => setIsFiltersOpen(true)}
          />
          <Slider
            data={selectedFilters}
            removeFilter={(key) =>
              setSelectedFilters((prevFilters) => ({
                ...prevFilters,
                [key]: "",
              }))
            }
            marginB="0px"
          />
          <ul className={styles.property_list}>
            {!isFetching && !data?.length && <NoResult />}
            {isFetching || isError ? (
              <div className="loaderProjects__wrapper mapProject">
                <span className="loaderProjects"></span>
              </div>
            ) : (
              <>
                {getProjectsBySortParam(data, selectedFilters.sort_param)
                  .slice(0, currentSet * ITEMS_PER_SET)
                  .map((item) => (
                  <li key={item._id} className={styles.image_content}>
                    <CircleButton
                      isLiked={savedProjects.includes(item._id)}
                      onClick={() => setSavedProjects(item._id)}
                    />
                    <Link to={`/phone/project/${item._id}`}>
                      <div className={styles.darkerImg}></div>
                      {getPresentationalImgs(item.generalInfo.images)
                        ?.length ? (
                        <img
                          src={
                            getPresentationalImgs(item.generalInfo.images)[0]
                          }
                          className={styles.image}
                          alt={item.generalInfo.name}
                        />
                      ) : (
                        <>
                          <div className="skeleton-loader"></div>
                          <div className="loaderProjects__wrapper mapProject">
                            <span className="loaderProjects"></span>
                          </div>
                        </>
                      )}
                      <div className={styles.image_info}>
                        <span className={styles.propertyName}>
                          {item.generalInfo.name}
                        </span>
                        <span className={styles.propertyText}>
                          {item.generalInfo.location}
                        </span>
                        <span className={styles.propertyText}>
                          {t("r_pay5")}{" "}
                          <CurrencyLogo currency={selectedCurrency} />{" "}
                          {convertPrice(item.generalInfo.priceFrom)}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>
          {currentSet < totalSets && (
            <ViewMore
              currentSet={currentSet}
              totalSets={totalSets}
              onClick={() => setCurrentSet(currentSet + 1)}
            />
          )}
          <GetConsultation />
          <MenuBar />
        </div>
      </div>
      {isFiltersOpen && (
        <Filters
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          handleClose={() => setIsFiltersOpen(false)}
        />
      )}
    </>
  );
};

export default SpecialForYou;
