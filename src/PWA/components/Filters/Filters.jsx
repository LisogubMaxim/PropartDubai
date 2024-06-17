import { useNavigate } from "react-router-dom";

import { CustomSelect } from "../ui/CustomSelects/CustomSelect";
import { initialFilters, filtersData } from "../../data/data";
import { RadioSelect } from "../ui/CustomSelects/RadioSelect";
import RangeSelect from "../ui/CustomSelects/RangeSelect";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import arrowLeft from "../../assets/images/arrow-left.svg";

import s from "./filters.module.scss";

export const Filters = ({
  selectedFilters,
  setSelectedFilters,
  isSearchBtn = false,
  searchText,
  handleClose,
}) => {
  const navigate = useNavigate();

  const handleSelectFilters = (name, value) => {
    if (Array.isArray(value)) {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        [`${name}From`]: value[0],
        [`${name}To`]: value[1],
      }));
    } else {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };

  const hasNonEmptyFilters = (filters) => {
    if (searchText) return true;

    for (const key in filters) {
      if (filters[key]) return true;
    }

    return false;
  };

  const handleSearch = () => {
    navigate("/phone/map", {
      state: { filters: selectedFilters, searchText },
    });
  };

  const isNonEmptyFilters = hasNonEmptyFilters(selectedFilters);

  return (
    <div className={`modal-window ${s.filters}`} style={{ zIndex: 10001 }}>
      <div className="main-container" style={{ overflow: "visible" }}>
        <div className={s.filtersHeader}>
          <button className="circle-btn shadow" onClick={handleClose}>
            <img src={arrowLeft} alt="Arrow Left" />
          </button>
          <h1 className={s.filtersTitle}>Filters</h1>
          <div className={s.rightButtons}>
            {isSearchBtn ? (
              <button
                onClick={handleSearch}
                disabled={!isNonEmptyFilters}
                className={`${s.searchBtn} ${isNonEmptyFilters ? s.searchBtnActive : ""}`}
              >
                <PiMagnifyingGlassBold
                  className={s.iconBtn}
                  size="1.25rem"
                  color="white"
                />
              </button>
            ) : (
              <button
                className={s.clearAllBtn}
                onClick={() => setSelectedFilters(initialFilters)}
              >
                Clear all
              </button>
            )}
          </div>
        </div>
        <div className={s.filtersContent}>
          <div className={s.formGroup}>
            <p className={s.formLabel}>Area</p>
            <CustomSelect
              options={filtersData.areas}
              selectedValues={selectedFilters.area}
              placeholder={selectedFilters.area || "Choose area"}
              onChange={(value) => handleSelectFilters("area", value)}
            />
          </div>
          <div className={s.formGroup}>
            <p className={s.formLabel}>Property type</p>
            <RadioSelect
              options={filtersData.types}
              selectedValues={selectedFilters.type}
              onChange={(value) => handleSelectFilters("type", value)}
            />
          </div>
          <div className={s.formGroup}>
            <p className={s.formLabel}>Size</p>
            <RangeSelect
              options={filtersData.sizes}
              selectedMin={selectedFilters.sizeFrom}
              selectedMax={selectedFilters.sizeTo}
              onChange={(value) => handleSelectFilters("size", value)}
            />
          </div>
          <div className={s.formGroup}>
            <p className={s.formLabel}>Bedrooms</p>
            <RadioSelect
              options={filtersData.bedrooms}
              selectedValues={selectedFilters.bedrooms}
              onChange={(value) => handleSelectFilters("bedrooms", value)}
            />
          </div>
          <div className={s.formGroup}>
            <p className={s.formLabel}>Price</p>
            <RangeSelect
              options={filtersData.prices}
              selectedMin={selectedFilters.priceFrom}
              selectedMax={selectedFilters.priceTo}
              onChange={(value) => handleSelectFilters("price", value)}
            />
          </div>
          <div className={s.formGroup}>
            <p className={s.formLabel}>Completion status</p>
            <RadioSelect
              options={filtersData.completion_statuses}
              selectedValues={selectedFilters.completion_status}
              onChange={(value) =>
                handleSelectFilters("completion_status", value)
              }
            />
          </div>
          <div className={s.formGroup}>
            <p className={s.formLabel}>Sort by</p>
            <CustomSelect
              options={filtersData.sort_params}
              selectedValues={selectedFilters.sort_param}
              placeholder={selectedFilters.sort_param || "Choose sort type"}
              onChange={(value) => handleSelectFilters("sort_param", value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
