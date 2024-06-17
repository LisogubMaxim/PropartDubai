import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { useSavedProjects } from "../../../hooks/useSavedProjects";
import { AnimatePresence } from "framer-motion";
import Menu from "../../Menu/Menu";
import ExploreAreas from "../../area/ExploreAreas/ExploreAreas";

import homeSvg from "../../../assets/images/menuBar/home.svg";
import homeActive from "../../../assets/images/menuBar/home-active.svg";
import heartSvg from "../../../assets/images/menuBar/heart.svg";
import heartSvgActive from "../../../assets/images/menuBar/heartSvgActive.svg";
import areasSvg from "../../../assets/images/menuBar/areas.svg";
import areasSvgActive from "../../../assets/images/menuBar/areasActive.svg";
import burgerSvg from "../../../assets/images/burger-icon.svg";
import searchSvg from "../../../assets/images/menuBar/search.svg";

import style from "./menuBar.module.scss";

const MenuBar = ({ isAreasOpen = false, isMenuActive = false, handleCloseMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [savedProjects] = useSavedProjects();
  const [imgLoading, setImgLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSelectedOpen, setIsSelectedOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickMain = (e) => {
    if (isAreasOpen && location.pathname === '/phone') {
      navigate(0);
      e.preventDefault();
    }
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsSelectedOpen(true);
  };

  const handleCloseItem = () => {
    setSelectedItem(null);
    setIsSelectedOpen(false);
  };

  return (
    <>
      {isSelectedOpen && createPortal(
        selectedItem,
        document.body
      )}
      <AnimatePresence>
        {(isMenuOpen || isMenuActive) && (
          <Menu
            closeMenu={() => {
              setIsMenuOpen(false);
              handleCloseMenu();
            }}
          />
        )}
      </AnimatePresence>
      <div className={`menu-bar ${style.container}`}>
        <div className={style.background}>
          <div className={style.navigate}>
            <div className={style.halfNav}>
              <NavLink to="/phone" end onClick={handleClickMain}>
                {({ isActive }) => (
                  <>
                    {isActive && !isAreasOpen ? (
                      <img src={homeActive} width={48} alt="home active" />
                    ) : (
                      <img src={homeSvg} width={48} alt="home" />
                    )}
                  </>
                )}
              </NavLink>
              <NavLink to="/phone/saved-projects">
                {({ isActive }) => (
                  <div className={style.savedLink}>
                    {!imgLoading && (
                      <div className={style.savedCount}>
                        <span className={style.savedCountText}>{savedProjects?.length}</span>
                      </div>
                    )}
                    {isActive && !isAreasOpen ? (
                      <img
                        src={heartSvgActive}
                        onLoad={() => setImgLoading(false)}
                        width={48}
                        alt="heart active"
                      />
                    ) : (
                      <img
                        src={heartSvg}
                        onLoad={() => setImgLoading(false)}
                        width={48}
                        alt="heart"
                      />
                    )}
                  </div>
                )}
              </NavLink>
            </div>
            <div className={style.halfNav}>
              <button
                className={style.btn}
                disabled={isAreasOpen}
                onClick={() => {
                  handleSelectItem(<ExploreAreas handleClose={handleCloseItem} />)
                }}
              >
                {isAreasOpen ? (
                  <img src={areasSvgActive} className={style.areaIcon} alt="Areas active" />
                ) : (
                  <img src={areasSvg} className={style.areaIcon} alt="Areas" />
                )}
              </button>
              <button
                className={style.btn}
                onClick={() => setIsMenuOpen(true)}
              >
                <img src={burgerSvg} alt="Burger" />
              </button>
            </div>
          </div>
          <div className={style.searchContainer}>
            <div className={style.search}>
              <Link to="/phone/map" className={style.buttonSearch}>
                <img src={searchSvg} alt="search" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
