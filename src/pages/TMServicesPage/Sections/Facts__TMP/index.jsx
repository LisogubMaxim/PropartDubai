import React from "react";
import "./facts__TMP.scss";
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();

  return (
    <section className="factsTMP">
      <h3 className="factsCompPage__title">{t("tmPage__Facts__Title")}</h3>
      <ul className="factsCompPage__list">
        <li className="factsCompPage__item">
          <span className="factsCompPage__item-number">1</span>
          <p className="factsCompPage__item-descr">
            {t("tmPage__Facts__Item1")}
          </p>
        </li>
        <li className="factsCompPage__item">
          <span className="factsCompPage__item-number">2</span>
          <p className="factsCompPage__item-descr">
            {t("tmPage__Facts__Item2")}
          </p>
        </li>
        <li className="factsCompPage__item">
          <span className="factsCompPage__item-number">3</span>
          <p className="factsCompPage__item-descr">
            {t("tmPage__Facts__Item3")}
          </p>
        </li>
        <li className="factsCompPage__item">
          <span className="factsCompPage__item-number">4</span>
          <p className="factsCompPage__item-descr">
            {t("tmPage__Facts__Item4")}
          </p>
        </li>
        <li className="factsCompPage__item">
          <span className="factsCompPage__item-number">5</span>
          <p className="factsCompPage__item-descr">
            {t("tmPage__Facts__Item5")}
          </p>
        </li>
        <li className="factsCompPage__item">
          <span className="factsCompPage__item-number">6</span>
          <p className="factsCompPage__item-descr">
            {t("tmPage__Facts__Item6")}
          </p>
        </li>
        <li className="factsCompPage__item">
          <span className="factsCompPage__item-number">7</span>
          <p className="factsCompPage__item-descr">
            {t("tmPage__Facts__Item7")}
          </p>
        </li>
        <li className="factsCompPage__item">
          <span className="factsCompPage__item-number">8</span>
          <p className="factsCompPage__item-descr">
            {t("tmPage__Facts__Item8")}
          </p>
        </li>
      </ul>
    </section>
  );
};

export default index;
