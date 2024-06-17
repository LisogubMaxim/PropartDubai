import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Map from "./Map";
import RecommendationsSlider from "../ui/Slider/RecommendationsSlider";

import backBtn from "../../assets/images/backBtn.svg";
import settingSvg from "../../assets/images/settings.svg";
import indicatorSvg from "../../assets/images/indicator.svg";

import styles from "./map.module.scss";
import { Filters } from "../Filters/Filters";
import { useDebouncedCallback } from "use-debounce";

const MapComponent = ({
  markers,
  searchText,
  setSearchText,
  selectedFilters,
  setSelectedFilters,
  swipe,
}) => {
  const [dataFromCluster, setDataFromCluster] = useState([]);
  const [buildigsForRender, setBuildingsForRender] = useState([]);
  const [markerCoordinates, setMarkerCoordinates] = useState([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const navigate = useNavigate();

  const handleDataFromChild = (data) => {
    if (data.length === 1) {
      setBuildingsForRender([]);
      setMarkerCoordinates(data);
    } else {
      setBuildingsForRender([]);
      setDataFromCluster(data);
    }
  };

  const addObject = (newObject) => {
    if (!buildigsForRender.some((obj) => obj.name === newObject.name)) {
      setBuildingsForRender((prevObjects) => [...prevObjects, newObject]);
      setMarkerCoordinates([]);
    }
  };

  function compareArrays(array1, array2) {
    array1.forEach((obj1) => {
      array2.forEach((obj2) => {
        if (
          parseFloat(obj1.properties.lng) ===
            parseFloat(obj2.generalInfo.coordinates.lng) &&
          parseFloat(obj1.properties.lat) ===
            parseFloat(obj2.generalInfo.coordinates.lat)
        ) {
          addObject(obj2);
        }
      });
    });
  }

  useEffect(() => {
    compareArrays(dataFromCluster, markers);
    compareArrays(markerCoordinates, markers);
  }, [dataFromCluster, markerCoordinates]);

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
        <Map markers={markers} onData={handleDataFromChild} />
      </motion.div>
      <img
        className={styles.backButton}
        src={backBtn}
        onClick={() => navigate(-1)}
        alt="Back button"
      />
      <div className={styles.searchInput}>
        <input
          type="text"
          defaultValue={searchText}
          onChange={(e) => debouncedSearch(e.target.value)}
          className={styles.input}
          placeholder="Search property, areas..."
        />
      </div>
      {buildigsForRender.length === 0 && (
        <button
          className={styles.settings_btn}
          onClick={() => setIsFiltersOpen(true)}
        >
          <img src={settingSvg} alt="settings icon" />
          <p>Filters</p>
        </button>
      )}
      {buildigsForRender.length > 0 && (
        <div className={styles.sliderContainer}>
          <RecommendationsSlider data={buildigsForRender} width={"326px"} />
        </div>
      )}
      {isFiltersOpen && (
        <Filters
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          handleClose={() => setIsFiltersOpen(false)}
        />
      )}
      <div className={styles.footer} {...swipe}>
        <img src={indicatorSvg} alt="indicator" />
        <p>Swipe up to see list</p>
      </div>
    </>
  );
};

export default MapComponent;
