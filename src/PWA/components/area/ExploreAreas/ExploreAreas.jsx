import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import AreaCard from "../../ui/PropertyItem/AreaCard/AreaCard";
import GetConsultation from "../../ui/GetConsultationForm/GetConsultation";
import MenuBar from "../../ui/MenuBar/MenuBar";
import ExploreHeader from "../../ui/ExploreHeader/ExploreHeader";
import ViewMore from "../../ui/ViewMore/ViewMore";
import NoResult from "../../ui/NoResult/NoResult";
import { sortInAlphabeticalOrder } from "../../../utils/sortInAlphabeticalOrder";
import { shortAreasData } from "../../../data/areasData";

import "./grid.scss";

const ExploreAreas = ({ handleClose }) => {
  const [searchText, setSearchText] = useState("");
  const [isSortApplied, setIsSortApplied] = useState(false);

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

  const areas = applySearchParams(shortAreasData);

  const ITEMS_PER_SET = 8;
  const totalSets = Math.ceil(areas.length / ITEMS_PER_SET);
  const [currentSet, setCurrentSet] = useState(1);

  const debouncedSearch = useDebouncedCallback((value) => {
    setSearchText(value);
  }, 500);

  return (
    <div className="main-container modal-window" style={{ zIndex: 10000 }}>
      <ExploreHeader
        title="Explore areas"
        handleSearch={(e) => debouncedSearch(e.target.value)}
        searchPlaceholder="Enter the area`s name"
        isSort={isSortApplied}
        setIsSort={setIsSortApplied}
        handleClose={handleClose}
      />
      {areas?.length ? (
        <>
          <div className="gridContainer">
            {areas.slice(0, currentSet * ITEMS_PER_SET).map((area) => (
              <AreaCard area={area} key={area.id} />
            ))}
          </div>
          {currentSet < totalSets && (
            <ViewMore
              currentSet={currentSet}
              totalSets={totalSets}
              onClick={() => setCurrentSet(currentSet + 1)}
            />
          )}
        </>
      ) : (
        <NoResult />
      )}
      <GetConsultation />
      <MenuBar isAreasOpen />
    </div>
  );
};

export default ExploreAreas;
