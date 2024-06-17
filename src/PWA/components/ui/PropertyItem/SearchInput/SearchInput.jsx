import React from "react";
import { useNavigate } from "react-router-dom";
import { PiMagnifyingGlassBold } from "react-icons/pi";

import magnify from "../../../../assets/images/magnify.svg";
import settings from "../../../../assets/images/settings.svg";

import styles from "./searchInput.module.scss";

const SearchInput = ({
  onChange,
  searchText,
  placeHolder,
  isSearchBtn = false,
  selectedFilters,
  handleOpenFilters = () => {},
}) => {
  const navigate = useNavigate();

  const hasNonEmptyFilters = (filters) => {
    if (searchText) return true;

    for (const key in filters) {
      if (filters[key]) return true;
    }

    return false;
  };

  const isNonEmptyFilters = hasNonEmptyFilters(selectedFilters);

  const handleSearch = () => {
    navigate("/phone/map", {
      state: { filters: selectedFilters, searchText: searchText },
    });
  };

  return (
    <div className={styles.search}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          onChange={onChange}
          className={`shadow ${styles.searchInput}`}
          style={isSearchBtn ? { padding: "8px 52px 8px 16px" } : {}}
          placeholder={placeHolder}
        />
        {isSearchBtn ? (
          <button
            onClick={handleSearch}
            disabled={!isNonEmptyFilters}
            className={`${styles.searchBtn} ${
              isNonEmptyFilters ? styles.searchBtnActive : ""
            }`}
          >
            <PiMagnifyingGlassBold
              className={styles.iconBtn}
              size="1.25rem"
              color="white"
            />
          </button>
        ) : (
          <img src={magnify} className={styles.icon} alt="Magnify" />
        )}
      </div>
      <button className={"circle-btn shadow"} onClick={handleOpenFilters}>
        <img src={settings} alt="settings icon" />
      </button>
    </div>
  );
};

export default SearchInput;
