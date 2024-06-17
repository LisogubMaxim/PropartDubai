import React, { useState } from "react";
import { Link } from "react-router-dom";

import GetConsultation from "../../ui/GetConsultationForm/GetConsultation";
import ExploreHeader from "../../ui/ExploreHeader/ExploreHeader";
import MenuBar from "../../ui/MenuBar/MenuBar";
import { sortInAlphabeticalOrder } from "../../../utils/sortInAlphabeticalOrder";
import { useDebouncedCallback } from "use-debounce";
import ViewMore from "../../ui/ViewMore/ViewMore";
import NoResult from "../../ui/NoResult/NoResult";
import { shortDevelopersData } from "../../../data/developersData";

import style from "./exploreDevelopers.module.scss";

const ExploreDevelopers = ({ handleClose }) => {
  const [searchText, setSearchText] = useState("");
  const [isSortApplied, setIsSortApplied] = useState(false);

  const applySearchParams = (developers) => {
    if (developers) {
      const filteredDevelopers = developers.filter((developer) =>
        developer.title.toLowerCase().includes(searchText.toLowerCase())
      );

      return isSortApplied
        ? sortInAlphabeticalOrder(filteredDevelopers, "developers")
        : filteredDevelopers;
    }
  };

  const developers = applySearchParams(shortDevelopersData);

  const ITEMS_PER_SET = 12;
  const totalSets = Math.ceil(developers.length / ITEMS_PER_SET);
  const [currentSet, setCurrentSet] = useState(1);

  const debouncedSearch = useDebouncedCallback((value) => {
    setSearchText(value);
  }, 500);

  return (
    <div className="main-container modal-window" style={{ zIndex: 10000 }}>
      <ExploreHeader
        title="Explore developers"
        handleSearch={(e) => debouncedSearch(e.target.value)}
        isSort={isSortApplied}
        setIsSort={setIsSortApplied}
        searchPlaceholder="Enter the developer`s name"
        handleClose={handleClose}
      />
      {developers?.length ? (
        <>
          <div className={style.developers}>
            {developers
              .slice(0, currentSet * ITEMS_PER_SET)
              .map((developer) => (
                <Link
                  to={`/phone/about-developer/${developer.value}`}
                  className={style.developer}
                  key={developer.value}
                >
                  {developer.logo_src ? (
                    <img
                      className={style.img}
                      src={developer.logo_src}
                      alt={developer.value}
                    />
                  ) : (
                    <h2 className={style.title}>{developer.title}</h2>
                  )}
                </Link>
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
      <div className={style.help}>
        <GetConsultation />
      </div>
      <MenuBar />
    </div>
  );
};

export default ExploreDevelopers;
