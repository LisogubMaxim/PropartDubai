import React from "react";
import { useTranslation } from "react-i18next";
import "./amenities__ProjectP.scss";

export default function index({ item }) {
  const { t } = useTranslation();

  return (
    <section className="amenities__content">
      <h4 className="amenities__content-title">
        {t("projectsPage__About__Title2")}
      </h4>
      <ul className="amenities__content-list">
        {item.amenities &&
          item.amenities.map((item, index) => (
            <li className="amenities__content-item" key={index}>
              <span>{item}</span>
            </li>
          ))}
      </ul>
    </section>
  );
}
