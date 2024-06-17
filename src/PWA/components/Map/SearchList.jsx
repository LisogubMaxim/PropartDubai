import React, { useState } from "react";
import Menu from "../Menu/Menu";
import { Filters } from "../Filters/Filters";
import { AnimatePresence, motion } from "framer-motion";
import { useDebouncedCallback } from "use-debounce";
import { getProjectsBySortParam } from "../../utils/getProjectsBySortParam";

import MenuItemsHeader from "../ui/PropertyItem/MenuItemsHeader/MenuItemsHeader";
import ImageCard from "../ui/PropertyItem/ImageCard/ImageCard";
import ViewMore from "../ui/ViewMore/ViewMore";
import NoResult from "../ui/NoResult/NoResult";

import settingSvg from "../../assets/images/settings.svg";
import indicatorSvg from "../../assets/images/indicator.svg";

import styles from "./searchList.module.scss";
import Slider from "../ui/Slider/FilterPointsSlider";

const SearchList = ({
  markers,
  searchText,
  setSearchText,
  selectedFilters,
  setSelectedFilters,
  swipe,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const ITEMS_PER_SET = 16;
  const totalSets = Math.ceil(markers?.length / ITEMS_PER_SET);
  const [currentSet, setCurrentSet] = useState(1);

  const debouncedSearch = useDebouncedCallback((value) => {
    setSearchText(value);
  }, 500);

  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="modal-window"
        layout
      >
        <div
          className="main-container"
          style={{ overflowY: "auto", marginBottom: "50px" }}
        >
          <MenuItemsHeader onClick={() => setIsMenuOpen(true)} />
          <div className={styles.search}>
            <div className={styles.searchInput}>
              <input
                type="text"
                defaultValue={searchText}
                onChange={(e) => debouncedSearch(e.target.value)}
                className={styles.input}
                placeholder="Search property, area..."
              />
            </div>
            <div
              className={styles.settings_btn}
              onClick={() => setIsFiltersOpen(true)}
            >
              <img src={settingSvg} alt="settings icon" />
            </div>
          </div>
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
          {markers.length > 0 ? (
            <div className={styles.content}>
              {getProjectsBySortParam(markers, selectedFilters.sort_param)
                .slice(0, currentSet * ITEMS_PER_SET)
                .map((property, idx) => (
                  <div className={styles.property} key={idx}>
                    <ImageCard data={property} likeBtn={true} />
                  </div>
                ))}
            </div>
          ) : (
            <NoResult />
          )}
          {currentSet < totalSets && (
            <ViewMore
              currentSet={currentSet}
              totalSets={totalSets}
              onClick={() => setCurrentSet(currentSet + 1)}
            />
          )}
        </div>
      </motion.div>
      <AnimatePresence>
        {isMenuOpen && <Menu closeMenu={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
      {isFiltersOpen && (
        <Filters
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          handleClose={() => setIsFiltersOpen(false)}
        />
      )}
      <div className={styles.footer} {...swipe}>
        <img src={indicatorSvg} alt="indicator" />
        <p>Swipe up to see map</p>
      </div>
    </>
  );
};

export default SearchList;
