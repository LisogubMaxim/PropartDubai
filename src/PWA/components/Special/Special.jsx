import React, { useEffect, useState } from "react";
import { useGetProjectsQuery } from "../../../store/query/projectsAPI/projectsAPI";

import GetConsultation from "../ui/GetConsultationForm/GetConsultation";
import MenuItemsHeader from "../ui/PropertyItem/MenuItemsHeader/MenuItemsHeader";
import LearnMore from "../ui/PropertyItem/LearnMore/LearnMore";
import RecommendationsSlider from "../ui/Slider/RecommendationsSlider";
import SliderWIcon from "../ui/PropertyItem/SliderWIcon/SliderWIcon";
import MenuBar from "../ui/MenuBar/MenuBar";
import SearchInput from "../ui/PropertyItem/SearchInput/SearchInput";
import AreaCard from "../ui/PropertyItem/AreaCard/AreaCard";
import Slider from "../ui/Slider/FilterPointsSlider";
import { dubaiData, services } from "./sliderData";
import { Filters } from "../Filters/Filters";
import SpecialForYou from "./SpecialForYou";
import { initialFilters } from "../../data/data";
import ExploreAreas from "../area/ExploreAreas/ExploreAreas";
import ExploreDevelopers from "../developer/ExploreDevelopers/ExploreDevelopers";
import { getShuffledArray } from "../../utils/getShuffledArray";
import { shortAreasData } from "../../data/areasData";
import { developersData } from "../../data/developersData";
import OurServices from "../OurServices/OurServices";

import styles from "./special.module.scss";

const Special = () => {
  const [selectedFilters, setSelectedFilters] = useState(initialFilters);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSelectedOpen, setIsSelectedOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const { data, isLoading, isError } = useGetProjectsQuery("");

  const [shuffledData, setShuffledData] = useState([]);

  const handleSearch = (value) => {
    setSearchText(value);
  };

  useEffect(() => {
    if (data) {
      setShuffledData(getShuffledArray(data));
    }
  }, [data]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsSelectedOpen(true);
  };

  const handleCloseItem = () => {
    setSelectedItem(null);
    setIsSelectedOpen(false);
  };

  const handleOpenService = (service) => {
    setSelectedItem(<OurServices selectedService={service} handleClose={handleCloseItem} />);
    setIsSelectedOpen(true);
  }

  return (
    <>
      <main className="main-container">
        <MenuItemsHeader onClick={() => setMenuOpen(!menuOpen)} />
        <SearchInput
          placeHolder="Search property, areas..."
          isSearchBtn
          selectedFilters={selectedFilters}
          searchText={searchText}
          onChange={(e) => handleSearch(e.target.value)}
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

        <section className={styles.section} style={{ marginTop: 20 }}>
          <LearnMore
            title="Special for you"
            handleOpen={() =>
              handleSelectItem(<SpecialForYou handleClose={handleCloseItem} />)
            }
          />
          <RecommendationsSlider
            data={shuffledData?.slice(0, 8)}
            isLoading={isLoading}
            isError={isError}
            width="320px"
            height="368px"
          />
        </section>
        <section className={styles.section}>
          <h2 className={styles.secondTitle}>Why choose Dubai</h2>
          <SliderWIcon
            data={dubaiData}
            textAlign="center"
            paddingItem="16px"
            brdRadius="0px"
            color="#0F1121"
            txtFontWeight="400"
            widthItem="169px"
            heightItem="128px"
            imageHeight="34px"
            imageWidth="34px"
            handleOpenOurServices={() => 
              handleSelectItem(<OurServices handleClose={handleCloseItem} />)
            }
          />
        </section>
        <section className={styles.section}>
          <LearnMore
            title="Explore areas"
            handleOpen={() =>
              handleSelectItem(<ExploreAreas handleClose={handleCloseItem} />)
            }
          />
          <div className={styles.demonstrate_imgs}>
            {shortAreasData.slice(0, 3).map((area) => (
              <AreaCard key={area.id} area={area} />
            ))}
          </div>
        </section>
        <section className={styles.section}>
          <LearnMore
            title="Explore developers"
            handleOpen={() =>
              handleSelectItem(
                <ExploreDevelopers handleClose={handleCloseItem} />
              )
            }
          />
          <SliderWIcon
            data={developersData.slice(0, 8)}
            linkToDeveloper
            widthItem="244px"
            heightItem="176px"
            paddingItem="50px"
            imageWidth="100%"
            imageHeight="70px"
            textAlign="center"
            brdRadius="0px"
            isFreeMode={false}
          />
        </section>
        <section className={styles.section}>
          <h2 className={styles.secondTitle}>Our services</h2>

          <SliderWIcon
            data={services}
            textAlign="left"
            justifyContent="flex-end"
            alignItems="unset"
            paddingItem="12px 16px"
            brdRadius="16px"
            color="#0F1121"
            txtFontWeight="400"
            font="14px"
            widthItem="169px"
            heightItem="120px"
            imageHeight="34px"
            imageWidth="34px"
            shadow=" 0px 4px 20px 0px rgba(15, 17, 33, 0.1)"
            isScrollbarVisible
            isOpenService
            handleOpenService={handleOpenService}
          />
        </section>
        <GetConsultation />
        <MenuBar isMenuActive={menuOpen} handleCloseMenu={() => setMenuOpen(false)} />
      </main>
      {isSelectedOpen && selectedItem}
      {isFiltersOpen && (
        <Filters
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          isSearchBtn
          searchText={searchText}
          handleClose={() => setIsFiltersOpen(false)}
        />
      )}
    </>
  );
};

export default Special;
