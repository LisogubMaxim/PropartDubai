import mapboxgl from "mapbox-gl";
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

import HeaderSecond from "../../components/HeaderSecond";
import WidthContainer from "../../components/UI/WidthContainer";
import ProjectItem from "../../components/ProjectItem";
import HelpForm from "../../components/HelpForm";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./areasWithMapPage.scss";
import "../DeveloperPage/Section/SearchDev_DeveloperPage/searchDev_DeveloperPage.scss";

export default function AreasWithMapPage() {
  const { t } = useTranslation();
  const [showList, setShowList] = useState(false);
  const [search, setSearch] = useState("");
  const dropDownListRef = useRef(null);
  const [filteredAreaData, setFilteredAreaData] = useState([]);

  const areaData = [
    {
      id: "1",
      title: t("areasPages__title1"),
      bgSmall: "/assets/AreaPage/bgSmall1.png",
    },
    {
      id: "2",
      title: t("areasPages__title2"),
      bgSmall: "/assets/AreaPage/bgSmall2.png",
    },
    {
      id: "3",
      title: t("areasPages__title3"),
      bgSmall: "/assets/AreaPage/bgSmall3.png",
    },
    {
      id: "4",
      title: t("areasPages__title4"),
      bgSmall: "/assets/AreaPage/bgSmall8.png",
    },
    {
      id: "5",
      title: t("areasPages__title5"),
      bgSmall: "/assets/AreaPage/bgSmall6.png",
    },
    {
      id: "6",
      title: t("areasPages__title6"),
      bgSmall: "/assets/AreaPage/bgSmall7.png",
    },
    {
      id: "7",
      title: t("areasPages__title7"),
      bgSmall: "/assets/AreaPage/bgSmall4.jpg",
    },
    {
      id: "8",
      title: t("areasPages__title8"),
      bgSmall: "/assets/AreaPage/bgSmall5.png",
    },
    {
      id: "9",
      title: t("areasPages__title9"),
      bgSmall: "/assets/AreaPage/bgSmall9.png",
    },
    {
      id: "10",
      title: t("areasPages__title10"),
      bgSmall: "/assets/AreaPage/bgSmall10.png",
    },
    {
      id: "11",
      title: t("areasPages__title11"),
      bgSmall: "/assets/AreaPage/bgSmall11.png",
    },
    {
      id: "12",
      title: t("areasPages__title12"),
      bgSmall: "/assets/AreaPage/bgSmall12.png",
    },
    {
      id: "13",
      title: t("areasPages__title13"),
      bgSmall: "/assets/AreaPage/bgSmall13.png",
    },
    {
      id: "14",
      title: t("areasPages__title14"),
      bgSmall: "/assets/AreaPage/bgSmall14.png",
    },
    {
      id: "15",
      title: t("areasPages__title15"),
      bgSmall: "/assets/AreaPage/bgSmall15.png",
    },
    {
      id: "16",
      title: t("areasPages__title16"),
      bgSmall: "/assets/AreaPage/bgSmall16.png",
    },
    {
      id: "17",
      title: t("areasPages__title17"),
      bgSmall: "/assets/AreaPage/bgSmall17.png",
    },
    {
      id: "18",
      title: t("areasPages__title18"),
      bgSmall: "/assets/AreaPage/bgSmall18.png",
    },
    {
      id: "19",
      title: t("areasPages__title19"),
      bgSmall: "/assets/AreaPage/bgSmall19.png",
    },
    {
      id: "20",
      title: t("areasPages__title20"),
      bgSmall: "/assets/AreaPage/bgSmall20.png",
    },
    {
      id: "21",
      title: t("areasPages__title21"),
      bgSmall: "/assets/AreaPage/bgSmall21.png",
    },
    {
      id: "22",
      title: t("areasPages__title22"),
      bgSmall: "/assets/AreaPage/bgSmall22.png",
    },
    {
      id: "23",
      title: t("areasPages__title23"),
      bgSmall: "/assets/AreaPage/bgSmall23.png",
    },
    {
      id: "24",
      title: t("areasPages__title24"),
      bgSmall: "/assets/AreaPage/bgSmall24.png",
    },
    {
      id: "25",
      title: t("areasPages__title25"),
      bgSmall: "/assets/AreaPage/bgSmall25.png",
    },
    {
      id: "26",
      title: t("areasPages__title26"),
      bgSmall: "/assets/AreaPage/bgSmall26.png",
    },
    {
      id: "27",
      title: t("areasPages__title27"),
      bgSmall: "/assets/AreaPage/bgSmall27.png",
    },
    {
      id: "28",
      title: t("areasPages__title28"),
      bgSmall: "/assets/AreaPage/bgSmall28.png",
    },
    {
      id: "29",
      title: t("areasPages__title29"),
      bgSmall: "/assets/AreaPage/bgSmall29.png",
    },
    {
      id: "30",
      title: t("areasPages__title30"),
      bgSmall: "/assets/AreaPage/bgSmall30.png",
    },
    {
      id: "31",
      title: t("areasPages__title31"),
      bgSmall: "/assets/AreaPage/bgSmall31.png",
    },
    {
      id: "32",
      title: t("areasPages__title32"),
      bgSmall: "/assets/AreaPage/bgSmall32.png",
    },
    {
      id: "33",
      title: t("areasPages__title33"),
      bgSmall: "/assets/AreaPage/bgSmall33.png",
    },
    {
      id: "34",
      title: t("areasPages__title34"),
      bgSmall: "/assets/AreaPage/bgSmall34.png",
    },
    {
      id: "35",
      title: t("areasPages__title35"),
      bgSmall: "/assets/AreaPage/bgSmall35.png",
    },
  ];

  useEffect(() => {
    document.title = "AreasWithMap";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropDownListRef.current &&
        !dropDownListRef.current.contains(event.target)
      ) {
        setShowList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    const filteredData = areaData.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredAreaData(filteredData);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [search, areaData, dropDownListRef]);

  return (
    <>
      <HeaderSecond />
      <section className="areasWithMapPage">
        <WidthContainer>
          <div className="searchDev__left">
            <span className="searchDev__dropDownListBox">
              <input
                type="text"
                placeholder={t("areasPages__Header__Descr2")}
                className="mapPage__searchInput"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setShowList(true)}
              />
              {showList && (
                <span className="searchDev__dropDownList" ref={dropDownListRef}>
                  {filteredAreaData.map((item) => (
                    <div
                      key={item.id}
                      className="searchDev__dropDownListItem"
                      onClick={() => {
                        setSearch(item.title);
                        setShowList(false);
                      }}
                    >
                      {item.title}
                    </div>
                  ))}
                </span>
              )}
            </span>
          </div>
          <div className="areasWithMapPage__topProjects">
            {filteredAreaData.map((item, index) => (
              <div
                className="projectItem"
                style={{ backgroundImage: `url(${item.bgSmall})` }}
                key={index}
              >
                <Link to={`/area/${item.id}`}>
                  <div>
                    <h4>{item.title}</h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <HelpForm />
        </WidthContainer>
      </section>
    </>
  );
}
