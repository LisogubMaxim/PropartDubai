import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import GetConsultation from "../../ui/GetConsultationForm/GetConsultation";
import MenuItemsHeader from "../../ui/PropertyItem/MenuItemsHeader/MenuItemsHeader";
import AreaCard from "../../ui/PropertyItem/AreaCard/AreaCard";
import Slider from "../../ui/Slider/FilterPointsSlider";
import MenuBar from "../../ui/MenuBar/MenuBar";
import { developersData } from "../../../data/developersData";
import { useDebouncedCallback } from "use-debounce";
import ViewMore from "../../ui/ViewMore/ViewMore";
import magnify from "../../../assets/images/magnify.svg"
import { TbArrowsSort } from "react-icons/tb";
import { sortInAlphabeticalOrder } from "../../../utils/sortInAlphabeticalOrder";

import styles from "./devProperties.module.scss";

const DevProperties = () => {
  const { id: developerName } = useParams("id");
  const [isSortApplied, setIsSortApplied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [areas, setAreas] = useState(null);
  const [searchText, setSearchText] = useState("");

  const applySearchParams = (areas) => {
    if (areas) {
      const filteredAreas = areas.filter((area) =>
        area.title.toLowerCase().includes(searchText.toLowerCase())
      );

      return isSortApplied
        ? sortInAlphabeticalOrder(filteredAreas, "areas")
        : filteredAreas;
    }
  };

  const ITEMS_PER_SET = 8;
  const totalSets = Math.ceil(areas?.length / ITEMS_PER_SET);
  const [currentSet, setCurrentSet] = useState(1);

  const debouncedSearch = useDebouncedCallback((value) => {
    setSearchText(value);
  }, 500);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const developer = developersData.find((dev) => dev.value === developerName);

    if (developer) {
      setAreas(
        developer.areas_info.map((area) => ({
          id: "1",
          title: area.area_title,
          bgSmall: area.area_img_src,
          priceFrom: area.area_data,
        }))
      );
    }
  }, [developerName]);

  return (
    <div className="main-container">
      <MenuItemsHeader onClick={() => setMenuOpen(true)} />
      <div className={styles.search}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            onChange={(e) => debouncedSearch(e.target.value)}
            className={`shadow ${styles.searchInput}`}
            placeholder="Search properties, areas..."
          />
          <img src={magnify} className={styles.icon} alt="Magnify" />
        </div>
        <button
          className={`circle-btn shadow ${styles.sortBtn} ${isSortApplied ? styles.sortBtnActive : ""}`}
          onClick={() => setIsSortApplied(!isSortApplied)}
        >
          <TbArrowsSort size="20px" color={`${isSortApplied ? "white" : "#6f707a"}`} />
        </button>
      </div>
      <Slider data={{ developerName }} marginB="16px" />

      <section className={styles.section}>
        <div className={styles.demonstrate_imgs}>
          {areas ? (
            applySearchParams(areas)
              .slice(0, currentSet * ITEMS_PER_SET)
              .map((area, idx) => (
                <AreaCard key={idx} area={area} height="284px" />
              ))
          ) : (
            <div className="loaderProjects__wrapper mapProject">
              <span className="loaderProjects"></span>
            </div>
          )}
        </div>
      </section>
      {currentSet < totalSets && (
        <ViewMore
          currentSet={currentSet}
          totalSets={totalSets}
          onClick={() => setCurrentSet(currentSet + 1)}
        />
      )}

      <GetConsultation />
      <MenuBar isMenuActive={menuOpen} handleCloseMenu={() => setMenuOpen(false)} />
    </div>
  );
};

export default DevProperties;
