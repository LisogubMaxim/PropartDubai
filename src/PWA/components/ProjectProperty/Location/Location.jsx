import { t } from "i18next";
import { Map } from "./Map";

import s from "./location.module.scss";

export const Location = ({ coordinates, polygon }) => {
  return (
    <section className={`project-property__section`}>
      <h2 className={`project-property__second-title ${s.locationTitle}`}>
        {t("r_loc")}
      </h2>
      <Map coordinates={coordinates} polygon={polygon} />
    </section>
  );
};
