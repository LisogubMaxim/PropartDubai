import { useState } from "react";
import { t } from "i18next";
import { Modal } from "./Modal/Modal";

import s from "./amenities.module.scss";

export const Amenities = ({ amenities }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && (
        <Modal
          amenitiesData={amenities}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
      <section className="project-property__section main-container">
        <div className={s.amenitiesHeader}>
          <h2 className="project-property__second-title">
            {t("projectsPage__About__Title2")}
          </h2>
          <span className={s.moreLink} onClick={() => setIsModalOpen(true)}>
            More
          </span>
        </div>
        <div className={s.amenities}>
          {amenities?.length
            ? amenities.slice(0, 4).map((amenity, idx) => (
                <div className={s.amenity} key={idx}>
                  <span className={s.amenityText}>{amenity}</span>
                </div>
              ))
            : "No amenities"}
        </div>
      </section>
    </>
  );
};
