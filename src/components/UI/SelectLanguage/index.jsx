import React, { useRef, useState, useEffect } from "react";
import Button from "../Button";
import "./selectLanguage.scss";
import { useTranslation } from "react-i18next";

const SelectLanguage = ({ img, width, height, children }) => {
  const { t, i18n } = useTranslation();
  const selectRef = useRef();

  const [showSelect, setShowSelect] = useState(false);

  const activeLanguage = i18n.language;

  const allLanguages = Object.keys(i18n.options.resources);

  const otherLanguages = allLanguages.filter((lang) => lang !== activeLanguage);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleLanguageChange = (language) => {
    changeLanguage(language.toLowerCase());
    setShowSelect(false);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setShowSelect(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header__wrap-select" ref={selectRef}>
      <div className="header__wrap-secondImg">
        {children}
        <Button
          handler={() => setShowSelect(!showSelect)}
          className="header__wrap-btnSelect"
        >
          {activeLanguage.toUpperCase()}
          <img
            src={img}
            alt="img arrow"
            width={width}
            height={height}
            className={`header__wrap-imgSelect ${showSelect ? "active" : ""}`}
          />
        </Button>
      </div>
      <div className={`header__wrap-dropContent ${showSelect ? "active" : ""}`}>
        {otherLanguages.map((lang) => (
          <Button
            key={lang}
            className="header__wrap-btnDropSelect"
            handler={() => handleLanguageChange(lang)}
          >
            {lang.toUpperCase()}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SelectLanguage;
