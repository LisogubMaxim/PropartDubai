import React, { useEffect, useState } from "react";

import MapComponent from "../components/Map/MapComponent";
import SearchList from "../components/Map/SearchList";
import { useSwipeable } from "react-swipeable";
import { useGetProjectsQuery } from "../../store/query/projectsAPI/projectsAPI";
import { getShortPrice } from "../utils/getShortPrice";
import { useLocation } from "react-router-dom";
import { initialFilters } from "../data/data";
import { skipToken } from "@reduxjs/toolkit/query";

const MapPagePWA = () => {
  const [isMapVisible, setIsMapVisible] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState(initialFilters);
  const [filtersReady, setFiltersReady] = useState(false);
  const [markers, setMarkers] = useState([]);
  const { state } = useLocation();
  const [searchText, setSearchText] = useState("");

  const { data, isFetching, isError } = useGetProjectsQuery(
    filtersReady
      ? `?nameStartsWith=${searchText}&type=${selectedFilters.completion_status}&minSize=${selectedFilters.sizeFrom}&maxSize=${selectedFilters.sizeTo}&minPrice=${selectedFilters.priceFrom}&maxPrice=${selectedFilters.priceTo}&location=${selectedFilters.area}`
      : skipToken
  );

  useEffect(() => {
    if (state) {
      setSelectedFilters(state.filters);
      setSearchText(state.searchText);
      setIsMapVisible(false);
    }
    setFiltersReady(true);
  }, [state]);

  useEffect(() => {
    if (data?.length) {
      const newMarkers = [];

      for (const project of data) {
        const mapData = {
          _id: project._id,
          generalInfo: {
            name: project.generalInfo.name,
            images: project.generalInfo.images,
            priceFrom: project.generalInfo.priceFrom,
            coordinates: project.generalInfo.coordinates,
          },
          shortPrice: getShortPrice(project.generalInfo.priceFrom),
        };

        newMarkers.push(mapData);
      }

      setMarkers(newMarkers);
    } else if (!isFetching && !isError) {
      setMarkers([]);
    }
  }, [data]);

  const swipeHandler = useSwipeable({
    onSwipedUp: () => setIsMapVisible((prev) => !prev),
  });

  return (
    <>
      {isFetching || isError ? (
        <div className="loaderProjects__wrapper">
          <span className="loaderProjects"></span>
        </div>
      ) : isMapVisible ? (
        <MapComponent
          markers={markers}
          searchText={searchText}
          setSearchText={setSearchText}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          swipe={swipeHandler}
        />
      ) : (
        <SearchList
          markers={markers}
          searchText={searchText}
          setSearchText={setSearchText}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          swipe={swipeHandler}
        />
      )}
    </>
  );
};

export default MapPagePWA;
