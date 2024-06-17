import React, { useEffect, useState } from "react";

import MenuItemsHeader from "../../ui/PropertyItem/MenuItemsHeader/MenuItemsHeader";
import Slider from "../../ui/Slider/FilterPointsSlider";
import ImageCard from "../../ui/PropertyItem/ImageCard/ImageCard";
import GetConsultation from "../../ui/GetConsultationForm/GetConsultation";
import MenuBar from "../../ui/MenuBar/MenuBar";
import { useGetProjectsQuery } from "../../../../store/query/projectsAPI/projectsAPI";
import SearchInput from "../../ui/PropertyItem/SearchInput/SearchInput";
import ViewMore from "../../ui/ViewMore/ViewMore";
import { Filters } from "../../Filters/Filters";
import { initialFilters } from "../../../data/data";
import { areasData } from "../../../data/areasData";
import { skipToken } from "@reduxjs/toolkit/query";
import { useDebouncedCallback } from "use-debounce";
import { getProjectsBySortParam } from "../../../utils/getProjectsBySortParam";

import styles from "./areaProperties.module.scss";

const AreaProperties = ({ areaTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState(initialFilters);

  const [area, setArea] = useState(null);
  const [projectsInAreas, setProjectsInAreas] = useState(null);
  const [searchText, setSearchText] = useState("");

  const {
    data: projectsData,
    isLoading,
    isError,
  } = useGetProjectsQuery(
    area
      ? `?nameStartsWith=${searchText}&type=${selectedFilters.completion_status}&minSize=${selectedFilters.sizeFrom}&maxSize=${selectedFilters.sizeTo}&minPrice=${selectedFilters.priceFrom}&maxPrice=${selectedFilters.priceTo}&location=${area.titleSlider}`
      : skipToken
  );

  const ITEMS_PER_SET = 8;
  const totalSets = Math.ceil(projectsInAreas?.length / ITEMS_PER_SET);
  const [currentSet, setCurrentSet] = useState(1);

  useEffect(() => {
    if (projectsData && area) {
      const projects = projectsData.filter((item) =>
        item.generalInfo.location?.includes(area.titleSlider)
      );

      setProjectsInAreas(projects);
    }
  }, [projectsData, area]);

  const debouncedSearch = useDebouncedCallback((value) => {
    setSearchText(value);
  }, 500);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setArea(areasData.find((area) => area.titleSlider.includes(areaTitle)));
  }, [areaTitle]);

  return (
    <>
      <div className="main-container">
        <MenuItemsHeader onClick={() => setMenuOpen(!menuOpen)} />
        <SearchInput
          placeHolder="Search property, area..."
          onChange={(e) => debouncedSearch(e.target.value)}
          handleOpenFilters={() => setIsFiltersOpen(true)}
        />

        <Slider
          data={{ ...selectedFilters, area: area?.titleSlider }}
          removeFilter={(key) =>
            setSelectedFilters((prevFilters) => ({
              ...prevFilters,
              [key]: "",
            }))
          }
          marginB={24}
        />

        <div className={styles.content}>
          {isLoading || isError ? (
            <div className="loaderProjects__wrapper mapProject">
              <span className="loaderProjects"></span>
            </div>
          ) : (
            <>
              <div className={styles.properties}>
                {getProjectsBySortParam(projectsInAreas, selectedFilters.sort_param)
                  ?.slice(0, currentSet * ITEMS_PER_SET)
                  .map((project) => (
                    <div key={project._id} className={styles.property}>
                      <ImageCard data={project} likeBtn />
                    </div>
                  ))}
              </div>
              {currentSet < totalSets && (
                <ViewMore
                  currentSet={currentSet}
                  totalSets={totalSets}
                  onClick={() => setCurrentSet(currentSet + 1)}
                />
              )}
              <GetConsultation />
            </>
          )}
        </div>
        <MenuBar isMenuActive={menuOpen} handleCloseMenu={() => setMenuOpen(false)} />
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

export default AreaProperties;
