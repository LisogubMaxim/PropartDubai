import "./searchDev_DeveloperPage.scss";
import response from "../../../../companiesInfo.json";
import TopDevItem from "../TopDevItem";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../../../components/UI/Button";
import { Link } from "react-router-dom";

export default function SearchDev_DeveloperPage() {
  const [showList, setShowList] = useState(false);
  const [search, setSearch] = useState("");
  const [lastItem, setLastItem] = useState({
    title: "Emaar",
    value: "emaar",
    header_photo_src:
      "https://metropolitan.realestate/wp-content/uploads/2021/10/burj-khalifa.jpg",
  });

  const dropDownListRef = useRef(null);
  const { t } = useTranslation();

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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropDownListRef]);
  return (
    <section
      className="searchDev"
      style={{
        backgroundImage: `url(${lastItem.header_photo_src})`,
      }}
      width={1312}
      height={504}
    >
      <div className="searchDev__left">
        <span>
          <h1>{t("DevelopersPage__SearchDev_DeveloperPage__Title")}</h1>
        </span>
        <span className="searchDev__dropDownListBox">
          <div className="mapPage__wrapper">
            <img
              src="/assets/Global/search.svg"
              alt="Image search"
              width={16}
              height={16}
            />
            <input
              type="text"
              placeholder={t("areasPages__Header__Descr2")}
              className="mapPage__wrapper-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setShowList(true)}
            />
            <div className="mapPage__wrapper-buttonWrapper">
              <div className="mapPage__wrapper-button">
                <Link to={`/developer/${lastItem.value}`}>
                  <button className="mapPage__wrapper-btn">Search</button>
                </Link>
              </div>
            </div>
          </div>

          {showList && (
            <span className="searchDev__dropDownList" ref={dropDownListRef}>
              {response
                .filter(
                  (item, index, self) =>
                    index === self.findIndex((t) => t.title === item.title) &&
                    item.title
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase())
                )
                .map((item) => (
                  <div
                    key={item._id}
                    className="searchDev__dropDownListItem"
                    onClick={() => {
                      setSearch(item.title);
                      setLastItem(
                        response.find((item1) => item1.title === item.title)
                      );
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
    </section>
  );
}
